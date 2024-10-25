import React, { useEffect } from 'react';

import '../App.css';

import ProjectSection from './Assets/ProjectSection'
import BiographySection from './Assets/BiographySection'
import HomeSection from './Assets/HomeSection';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContent = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (

        <div id="home" className="w-full">
            <HomeSection />
            <BiographySection />
            <ProjectSection />
        </div >

    );
}

export default MainContent;