import logo from '../Assets/aboutMe/MoustafaLogo.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const handleNoScroll = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        if (window.innerWidth >= 768) {

            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    useEffect(() => {
        const handleScrollProgress = () => {
            const sections = [
                document.getElementById('home'),
                document.getElementById('biography'),
                document.getElementById('projects')
            ].filter(section => section !== null);

            if (sections.length === 0) return;

            const maxWidth = 411;
            const totalSections = sections.length;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            let currentSectionIndex = 0;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (scrollTop >= section.offsetTop - window.innerHeight / 2) {
                    currentSectionIndex = i;
                }
            }

            const currentSection = sections[currentSectionIndex];
            const nextSection = sections[currentSectionIndex + 1] || document.documentElement;

            const sectionStart = currentSection.offsetTop;
            const sectionEnd = nextSection.offsetTop || document.documentElement.scrollHeight;
            const sectionScrollPercent = Math.min((scrollTop - sectionStart) / (sectionEnd - sectionStart) * 100, 100);

            const sectionWidth = maxWidth / totalSections;
            const newWidth = (currentSectionIndex * sectionWidth) + (sectionScrollPercent / 100) * sectionWidth;

            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                progressBar.style.width = `${newWidth}px`;
            }
        };

        window.addEventListener('scroll', handleScrollProgress);
        return () => window.removeEventListener('scroll', handleScrollProgress);
    }, []);


    return (

        <nav className={`fixed z-50 w-screen ${isScrolled ? 'flex items-center justify-center' : 'bg-white'}`} data-aos="fade-down" onWheel={handleNoScroll}>
            <div className={`relative flex flex-row justify-between items-center h-16 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-white shadow-lg rounded-full mt-3 pb-1 w-full scale-95' : 'bg-white scale-60'}`}>
                <a href="/" className='mt-1'>
                    <img className={`min-w-40 max-w-40 lg:ml-20 transition-all duration-500  ${isScrolled ? 'max-w-32' : 'max-w-40'}`} src={logo} alt='logo' />
                </a>

                <div className="md:hidden flex items-center mr-5">
                    <button onClick={handleToggle} className="text-3xl focus:outline-none">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <div className='relative flex-row items-center justify-center hidden md:flex'>
                    <div id="progress-bar" className="rounded-md absolute top-[calc(58px)] left-0 h-[calc(5px)] background-orange "></div>
                    <Link to="home" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:scale-125 transition-all duration-500 hover:cursor-pointer">
                        Home
                    </Link>
                    <Link to="biography" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:scale-125 transition-all duration-500 hover:cursor-pointer">
                        Biografia
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center hover:text-orange-500 hover:scale-125 transition-all duration-500 hover:cursor-pointer">
                        Progetti
                    </Link>
                </div>
                <div className='group transition mt-1 hidden md:block'>
                    <Link to='contactMe' smooth={true} duration={1000}>
                        <a href="https://moustafa-dev.com/contact-us"
                            className='h-8 bg-orange-500 rounded-2xl px-6 flex justify-center items-center 
                        mr-10 hover:bg-gray-950 group-hover:text-white duration-500 animate-pulse lg:mr-20'>
                            Contattami
                        </a>
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-white w-full py-4">
                    <Link to="home" smooth={true} duration={500} className="py-2 text-lg text-gray-800 hover:text-orange-500 hover:cursor-pointer" onClick={handleToggle}>
                        Home
                    </Link>
                    <Link to="biography" smooth={true} duration={500} className="py-2 text-lg text-gray-800 hover:text-orange-500 hover:cursor-pointer" onClick={handleToggle}>
                        Biografia
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="py-2 text-lg text-gray-800 hover:text-orange-500 hover:cursor-pointer" onClick={handleToggle}>
                        Progetti
                    </Link>
                    <Link to="contactMe" smooth={true} duration={500} className="py-2 text-lg text-gray-800 hover:text-orange-500 hover:cursor-pointer" onClick={handleToggle}>
                        Contattami
                    </Link>
                </div>
            )}
        </nav>

    );
}

export default Navbar;
