import PouchDB from 'pouchdb';
import { dataPath, expressApp, isDarwin } from '../';
import LeveldbAdapter from 'pouchdb-adapter-leveldb';
import { addAttachmentFromEDB, addChatFromEDB, addConstructFromEDB, addLorebookFromEDB, getAttachmentFromEDB, getAttachmentsFromEDB, getChatFromEDB, getChatsByConstructFromEDB, getChatsFromEDB, getConstructFromEDB, getConstructsFromEDB, getLorebookFromEDB, getLorebooksFromEDB, removeAttachmentFromEDB, removeChatFromEDB, removeConstructFromEDB, removeLorebookFromEDB } from './electrondb';

let constructDB: PouchDB.Database<any>;
let chatsDB: PouchDB.Database<any>;
let commandDB: PouchDB.Database<any>;
let attachmentDB: PouchDB.Database<any>;
let instructDB: PouchDB.Database<any>;
let completionDB: PouchDB.Database<any>;
let userDB: PouchDB.Database<any>;
let lorebookDB: PouchDB.Database<any>;

PouchDB.plugin(LeveldbAdapter);

export async function getAllConstructs() {
    if(isDarwin){
        return getConstructsFromEDB();
    }
    return constructDB.allDocs({include_docs: true})
    .then((result) => {
        return result.rows;
    })
    .catch((err) => {
        console.log(err);
        return null;
    });
}

export async function getConstruct(id: string) {
    if(isDarwin){
        return getConstructFromEDB(id);
    }
    return constructDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addConstruct(construct: any) {
    if(isDarwin){
        addConstructFromEDB(construct._id, construct);
        return;
    }
    return constructDB.put(construct).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeConstruct(id: string) {
    if(isDarwin){
        removeConstructFromEDB(id);
        return;
    }
    return constructDB.get(id).then((doc) => {
        return constructDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateConstruct(construct: any) {
    if(isDarwin){
        addConstructFromEDB(construct._id, construct);
        return;
    }
    return constructDB.get(construct._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...construct};
        
        constructDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllChats() {
    if(isDarwin){
        return getChatsFromEDB();
    }
    return chatsDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getChatsByConstruct(constructId: string) {
    if(isDarwin){
        return getChatsByConstructFromEDB(constructId);
    }
    return chatsDB.find({
        selector: {
            constructs: constructId
        }
    }).then((result) => {
        return result.docs;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getChat(id: string) {
    if(isDarwin){
        return getChatFromEDB(id);
    }
    return chatsDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addChat(chat: any) {
    if(isDarwin){
        addChatFromEDB(chat._id, chat);
        return;
    }
    return chatsDB.put(chat).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeChat(id: string) {
    if(isDarwin){
        removeChatFromEDB(id);
        return;
    }
    return chatsDB.get(id).then((doc) => {
        return chatsDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateChat(chat: any) {
    if(isDarwin){
        addChatFromEDB(chat._id, chat);
        return;
    }
    return chatsDB.get(chat._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...chat};

        chatsDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllAttachments() {
    if(isDarwin){
        return getAttachmentsFromEDB();
    }
    return attachmentDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getAttachment(id: string) {
    if(isDarwin){
        return getAttachmentFromEDB(id);
    }
    return attachmentDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addAttachment(attachment: any) {
    if(isDarwin){
        addAttachmentFromEDB(attachment._id, attachment);
        return;
    }
    return attachmentDB.put(attachment).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeAttachment(id: string) {
    if(isDarwin){
        removeAttachmentFromEDB(id);
        return;
    }
    return attachmentDB.get(id).then((doc) => {
        return attachmentDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateAttachment(attachment: any) {
    if(isDarwin){
        addAttachmentFromEDB(attachment._id, attachment);
        return;
    }
    return attachmentDB.get(attachment._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...attachment};
        
        attachmentDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getLorebooks() {
    if(isDarwin){
        return getLorebooksFromEDB();
    }
    return lorebookDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getLorebook(id: string) {
    if(isDarwin){
        return getLorebookFromEDB(id);
    }
    return lorebookDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addLorebook(lorebook: any) {
    if(isDarwin){
        addLorebookFromEDB(lorebook._id, lorebook);
        return;
    }
    return lorebookDB.put(lorebook).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeLorebook(id: string) {
    if(isDarwin){
        removeLorebookFromEDB(id);
        return;
    }
    return lorebookDB.get(id).then((doc) => {
        return lorebookDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateLorebook(lorebook: any) {
    if(isDarwin){
        addLorebookFromEDB(lorebook._id, lorebook);
        return;
    }
    return lorebookDB.get(lorebook._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...lorebook};

        lorebookDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export function PouchDBRoutes(){
    constructDB = new PouchDB('constructs', {prefix: dataPath, adapter : 'leveldb'});
    chatsDB = new PouchDB('chats', {prefix: dataPath, adapter : 'leveldb'});
    attachmentDB = new PouchDB('attachments', {prefix: dataPath, adapter : 'leveldb'});
    lorebookDB = new PouchDB('lorebook', {prefix: dataPath, adapter : 'leveldb'});

    expressApp.get('/api/constructs', async (req, res) => {
        try {
            const constructs = await getAllConstructs();
            res.json(constructs);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });

    expressApp.get('/api/construct/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const construct = await getConstruct(id);
            if (construct) {
                res.json(construct);
            } else {
                res.status(404).json({ message: "Construct not found." });
            }
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });

    expressApp.post('/api/constructs/add/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const construct = req.body;
            construct._id = id;
            const result = await addConstruct(construct); // Assuming addConstruct() is a function in your backend logic
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "An error occurred while adding the construct." });
        }
    });
    
    expressApp.put('/api/update-construct/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const construct = req.body;
            construct._id = id;
            const result = await updateConstruct(construct); // Assuming updateConstruct() is a function in your backend logic
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "An error occurred while updating the construct." });
        }
    });
    
    expressApp.delete('/api/delete-construct/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await removeConstruct(id); // Assuming removeConstruct() is a function in your backend logic
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "An error occurred while deleting the construct." });
        }
    });

    expressApp.get('/api/chats', async (req, res) => {
        try {
            const chats = await getAllChats();
            res.json(chats);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });
    
    // For 'get-chats-by-construct'
    expressApp.get('/api/chats/construct/:constructId', async (req, res) => {
        try {
            const constructId = req.params.constructId;
            const chats = await getChatsByConstruct(constructId);
            res.json(chats);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });
    
    // For 'get-chat'
    expressApp.get('/api/chat/:chatId', async (req, res) => {
        try {
            const chatId = req.params.chatId;
            const chat = await getChat(chatId);
            res.json(chat);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });
    
    // For 'add-chat'
    expressApp.post('/api/chat', async (req, res) => {
        try {
            const chatData = req.body;
            const chat = await addChat(chatData);
            res.json(chat);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });
    
    // For 'update-chat'
    expressApp.put('/api/chat', async (req, res) => {
        try {
            const chatData = req.body;
            const chat = await updateChat(chatData);
            res.json(chat);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });
    
    // For 'delete-chat'
    expressApp.delete('/api/chat/:chatId', async (req, res) => {
        try {
            const chatId = req.params.chatId;
            const result = await removeChat(chatId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "An error occurred." });
        }
    });

    // Route for getting all attachments
    expressApp.get('/api/attachments', async (req, res) => {
        try {
            const result = await getAllAttachments();
            res.json(result);
        } catch (error) {
            res.status(500).send("Failed to get attachments.");
        }
    });

    // Route for getting a specific attachment by ID
    expressApp.get('/api/attachment/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await getAttachment(id);
            res.json(result);
        } catch (error) {
            res.status(500).send("Failed to get attachment.");
        }
    });

    // Route for adding an attachment
    expressApp.post('/api/attachment', async (req, res) => {
        try {
            const attachment = req.body;
            const result = await addAttachment(attachment);
            res.json(result);
        } catch (error) {
            res.status(500).send("Failed to add attachment.");
        }
    });

    // Route for updating an attachment
    expressApp.put('/api/attachment/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await updateAttachment(updatedData);
            res.json(result);
        } catch (error) {
            res.status(500).send("Failed to update attachment.");
        }
    });

    // Route for deleting an attachment by ID
    expressApp.delete('/api/attachment/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await removeAttachment(id);
            res.json(result);
        } catch (error) {
            res.status(500).send("Failed to delete attachment.");
        }
    });
    
    // GET all lorebooks
    expressApp.get('/api/lorebooks', async (req, res) => {
        try {
            const lorebooks = await getLorebooks();
            res.json(lorebooks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch lorebooks.' });
        }
    });

    // GET a specific lorebook by ID
    expressApp.get('/api/lorebook/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const lorebook = await getLorebook(id);
            res.json(lorebook);
        } catch (error) {
            res.status(500).json({ error: `Failed to fetch lorebook with ID ${id}.` });
        }
    });

    // POST a new lorebook
    expressApp.post('/api/lorebook', async (req, res) => {
        try {
            const result = await addLorebook(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add lorebook.' });
        }
    });

    // PUT (update) an existing lorebook
    expressApp.put('/api/lorebook/:id', async (req, res) => {
        try {
            const result = await updateLorebook(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: `Failed to update lorebook with ID ${req.params.id}.` });
        }
    });

    // DELETE a lorebook
    expressApp.delete('/api/lorebook/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await removeLorebook(id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: `Failed to delete lorebook with ID ${id}.` });
        }
    });

    expressApp.delete('/api/clear-data', async (req, res) => {
        try {
            await constructDB.destroy();
            await chatsDB.destroy();
            await commandDB.destroy();
            await attachmentDB.destroy();
            await instructDB.destroy();
            await completionDB.destroy();
            await userDB.destroy();
            await lorebookDB.destroy();
    
            createDBs();
    
            res.status(200).send('Data cleared successfully.');
        } catch (error) {
            console.error("Error clearing data:", error);
            res.status(500).send('Failed to clear data.');
        }
    });

    function createDBs (){
        constructDB = new PouchDB('constructs', {prefix: dataPath, adapter : 'leveldb'});
        chatsDB = new PouchDB('chats', {prefix: dataPath, adapter : 'leveldb'});
        attachmentDB = new PouchDB('attachments', {prefix: dataPath, adapter : 'leveldb'});
        lorebookDB = new PouchDB('lorebook', {prefix: dataPath, adapter : 'leveldb'});
    }
};