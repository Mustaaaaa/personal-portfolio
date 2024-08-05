import logo from '../Assets/MoustafaLogo.png'
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';


function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.dropdown')) {
                return;
            }
            closeDropdown();
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <nav>
            <div className='flex flex-row justify-between items-center h-16'>
                <a href="https://moustafa-dev.com/"><img className='min-w-40 max-w-40  lg:ml-20' src={logo} alt='logo' /></a>
                <div className='flex flex-row items-center justify-center hidden md:flex '>
                    <Link to="/" className="relative group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:bg-gray-100 transition-all duration-300">
                        Home
                        <span className={`absolute bottom-0 w-full h-1 bg-orange-500 transition-transform duration-300 ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                    <Link to="/AboutMe" className="relative group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:bg-gray-100 transition-all duration-300">
                        Biografia
                        <span className={`absolute bottom-0 w-full h-1 bg-orange-500 transition-transform duration-300 ${location.pathname === '/AboutMe' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                    <Link to="/MyProjects" className="relative group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:bg-gray-100 transition-all duration-300">
                        Progetti
                        <span className={`absolute bottom-0 w-full h-1 bg-orange-500 transition-transform duration-300 ${location.pathname === '/MyProjects' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                </div>


                <div className="relative dropdown md:hidden sm:block mr-5">
                    <div>
                        <button
                            onClick={toggleDropdown}
                        >
                            <svg data-v-c55a0252="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-2 w-10 h-10 hover:stroke-orange-500"><path data-v-c55a0252="" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 z-10 w-40 rounded-sm shadow-xl bg-white border">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                <Link className="block px-5 py-2 hover:bg-gray-100 transition-all duration-300 hover:text-orange-500" role="menuitem" onClick={closeDropdown} to="/">Home</Link>
                                <Link className="block px-5 py-2 hover:bg-gray-100 transition-all duration-300 hover:text-orange-500" role="menuitem" onClick={closeDropdown} to="AboutMe">Biografia</Link>
                                <Link className="block px-5 py-2 hover:bg-gray-100 transition-all duration-300 hover:text-orange-500" role="menuitem" onClick={closeDropdown} to="MyProjects">Progetti</Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className='group transition hidden md:block'>
                    <a href="https://moustafa-dev.com/contact-us"
                        className='h-8 bg-orange-500 rounded-2xl px-6 flex justify-center items-center 
                    mr-10 hover:bg-gray-950 group-hover:text-white duration-500 animate-pulse'>
                        Contattami
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;