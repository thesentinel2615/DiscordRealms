import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import MenuThemeLoader from './components/menu-theme-loader';
import SettingsPage from './pages/settings';

export const url = 'http://localhost:3003';
export const socket = io('http://localhost:3003');

function App() {
	const [needsReload, setNeedsReload] = useState(false);
	
	return (
		<div id='App'>
			<Router>
				<MenuThemeLoader needsReload setNeedsReload={setNeedsReload}/>
				<div className='main-content'>
					<Routes>
						<Route path='/*' element={<Navigate to='/settings'/>}/>
						<Route path='/settings' element={<SettingsPage/>} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App