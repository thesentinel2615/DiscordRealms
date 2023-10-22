import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { HomeIcon, MessageCircle, Cog, Sparkles, Users, Bot, User, Book, File, Text, MoreHorizontalIcon, Menu, Paperclip, BrainCircuitIcon } from 'lucide-react';

const NavBar: React.FC = () => {
	const location = useLocation();

	return (
		<nav className={`sm:px-16 px-4 w-full flex items-center justify-between py-5 fixed top-0 z-20 bg-theme-root bg-opacity-50 backdrop-blur-xl border-b-theme-border-width border-b-theme-border theme-border-style`}>
			<div className="flex items-center gap-2" id='titleBar'>
				<p className="text-theme-text text-[18px] font-bold">Discord <span className="text-theme-flavor-text">Realms</span></p>
			</div>
			<div className="hidden md:flex gap-5">			
				<NavLink to="/characters" title="Characters" className={`p-1 transition-all duration-125 hover:opacity-50`}>
					<Users style={location.pathname === "/characters" ? { color: 'text-theme-italic' } : { color: 'text-theme-text' }} id='constructsPage' size={'1.5rem'}/>
				</NavLink>
				<NavLink to="/discord" title="Discord Bot" className={`p-1 transition-all duration-125 hover:opacity-50`} >
					<Bot style={location.pathname === "/discord" ? { color: 'text-theme-italic' } : { color: 'text-theme-text' }} size={'1.5rem'}/>
				</NavLink>
                <NavLink to="/lorebooks" title="Lorebooks" className={`p-1 transition-all duration-125 hover:opacity-50`}>
                    <Book style={location.pathname === "/lorebooks" ? { color: 'text-theme-italic' } : { color: 'text-theme-text' }} size={'1.5rem'}/>
                </NavLink>
                <NavLink to="/attachments" title="Attachments" className={`p-1 transition-all duration-125 hover:opacity-50`}>
                    <Paperclip style={location.pathname === "/attachments" ? { color: 'text-theme-italic' } : { color: 'text-theme-text' }} size={'1.5rem'}/>
                </NavLink>
				<NavLink to="/settings" title="Settings" className={`p-1 transition-all duration-125 hover:opacity-50`}>
					<Cog style={location.pathname === "/settings" ? { color: 'text-theme-italic' } : { color: 'text-theme-text' }} size={'1.5rem'}/>
				</NavLink>
			</div>
		</nav>
	);
};

interface DropdownProps {
	children: React.ReactNode;
	icon?: React.ReactNode;
	title?: string;
	className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, icon, title, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative flex justify-center">
			<button onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}  className='flex flex-col justify-center items-center' title={title} >
			{icon}
			</button>

			{isOpen && (
			<div className={"absolute mt-8 w-fit h-fit z-50 themed-root " + className} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
				{children}
			</div>
			)}
		</div>
	);
};


export default NavBar;