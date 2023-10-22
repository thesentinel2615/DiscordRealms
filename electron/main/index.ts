import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { release } from 'node:os'
import { join } from 'node:path'
import fs from "fs";
import path from "path";
import Store from "electron-store";
import express, { Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';
import { createServer } from "node:http";

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, '../')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
export let isDarwin = process.platform === "darwin";
let win: BrowserWindow | null = null
// Here, you can also use other preload
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')
export const modelsPath = join(process.env.VITE_PUBLIC, "models/");
export const wasmPath = join(process.env.VITE_PUBLIC, "wasm/");
export const backgroundsPath = join(process.env.VITE_PUBLIC, "backgrounds/");
export const charactersPath = join(process.env.VITE_PUBLIC, "defaults/characters/");
export const dataPath = path.join(app.getPath("userData"), "data/");
export const imagesPath = path.join(dataPath, "images/");
export const uploadsPath = path.join(dataPath, "uploads/");
export const actionLogsPath = path.join(dataPath, "action-logs/");
fs.mkdirSync(dataPath, { recursive: true });
fs.mkdirSync(imagesPath, { recursive: true });
fs.mkdirSync(uploadsPath, { recursive: true });
fs.mkdirSync(actionLogsPath, { recursive: true });
export const store = new Store()
async function createWindow() {
  win = new BrowserWindow({
    title: 'Discord Realms',
    icon: join(process.env.VITE_PUBLIC, 'favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      spellcheck: true,
    },
    fullscreenable: true,
    frame: true,
    transparent: false,
    autoHideMenuBar: true,
    resizable: true,
    maximizable: true,
    minimizable: true,
  });

  win.maximize();
  if (url) { // electron-vite-vue#298
    win.loadURL(url)
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })

  LanguageModelAPI();
  SDRoutes();
  VectorDBRoutes();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})

export const expressApp = express();
import bodyParser from 'body-parser';
import { Server } from 'socket.io';
import { getModels } from './model-pipeline/transformers';
import { LanguageModelAPI } from './api/llm';
import { SDRoutes } from './api/sd';
import { VectorDBRoutes } from './api/vector';
const port = 3003;

expressApp.use(express.static('public'));
expressApp.use(express.static('dist'));
expressApp.use(bodyParser.json({ limit: '1000mb' }));
expressApp.use(bodyParser.urlencoded({ limit: '1000mb', extended: true }));
expressApp.use(cors());
expressApp.use('/api/images', express.static(uploadsPath));
const server = createServer(expressApp);
export const expressAppIO = new Server(server);

expressAppIO.sockets.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Logging all events
  socket.onAny((eventName, ...args) => {
     console.log(`event: ${eventName}`, args);
  });
});

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

expressApp.post("/api/models/load", async (req: Request, res: Response) => {
  getModels().then(() => {
    res.send(true);
  }).catch((err) => {
    res.send(err);
  });
});

expressApp.get('/api/get-data-path', (req, res) => {
  res.send({ dataPath: dataPath });
});

// Route to set data
expressApp.post('/api/set-data', (req, res) => {
  const { key, value } = req.body;
  store.set(key, value);
  res.send({ status: 'success' });
});

// Route to get data
expressApp.get('/api/get-data/:key', (req, res) => {
  const value = store.get(req.params.key);
  res.send({ value: value });
});

// Route to save a background
expressApp.post('/api/save-background', (req, res) => {
  const { imageData, name, fileType } = req.body;
  const imagePath = path.join(backgroundsPath, `${name}.${fileType}`);
  const data = Buffer.from(imageData, 'base64');
  fs.writeFileSync(imagePath, data);
  res.send({ fileName: `${name}.${fileType}` });
});

// Route to get backgrounds
expressApp.get('/api/get-backgrounds', (req, res) => {
  fs.readdir(backgroundsPath, (err, files) => {
    if (err) {
      res.send({ files: [] });
      return;
    }
    res.send({ files: files });
  });
});

// Route to delete a background
expressApp.delete('/api/delete-background/:name', (req, res) => {
  fs.unlink(path.join(backgroundsPath, req.params.name), (err) => {
    if (err) {
      res.send({ success: false });
      return;
    }
    res.send({ success: true });
  });
});

// Route to get default characters
expressApp.get('/api/get-default-characters', (req, res) => {
  const characters: any[] = [];
  
  try {
    fs.readdirSync(charactersPath).forEach((file) => {
      if (file.endsWith(".png")) {
        characters.push(file);
      }
    });
    res.send({ characters: characters });
  } catch (err) {
    res.status(500).send({ error: 'Failed to read the characters directory.' });
  }
});

expressApp.post('/api/images/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File uploaded: ${req.file.originalname}`);
});

ipcMain.on('open-external-url', (event, url: string) => {
  shell.openExternal(url);
});