import logo from '../Assets/MoustafaLogo.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

        <nav className={`fixed z-50 w-full ${isScrolled ? 'flex items-center justify-center' : 'bg-white'}`} data-aos="fade-down">
            <div className={`relative flex flex-row justify-between items-center h-16 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-white shadow-lg rounded-full mt-3 pb-1 w-full scale-95' : 'bg-white scale-60'}`}>
                <a href="/" className='mt-1'>
                    <img className={`min-w-40 max-w-40 lg:ml-20 transition-all duration-500  ${isScrolled ? 'max-w-32' : 'max-w-40'}`} src={logo} alt='logo' />
                </a>
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
                <div className='group transition mt-1'>
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
