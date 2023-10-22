import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import MenuThemeLoader from './components/menu-theme-loader';
import SettingsPage from './pages/settings';
import { ipcRenderer } from 'electron';
import DiscordPage from './pages/discord';
import LorebooksPage from './pages/lorebooks';
import NavBar from './components/nav/top-nav';
import AttachmentsPage from './pages/attachments';

export const url = 'http://localhost:3003';
export const socket = io('http://localhost:3003');

export const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
	e.preventDefault();
	ipcRenderer.send('open-external-url', url);
};

function App() {
	const [needsReload, setNeedsReload] = useState(false);
	
	return (
		<div id='App'>
			<Router>
				<NavBar/>
				<MenuThemeLoader needsReload setNeedsReload={setNeedsReload}/>
				<div className='main-content'>
					<Routes>
						<Route path='/*' element={<Navigate to='/settings'/>}/>
						<Route path='/settings' element={<SettingsPage/>} />
						<Route path='/discord' element={<DiscordPage/>} />
						<Route path='/lorebooks' element={<LorebooksPage/>} />
						<Route path='/attachments' element={<AttachmentsPage/>} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App