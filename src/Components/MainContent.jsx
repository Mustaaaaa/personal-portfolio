import React, { useEffect } from 'react';

import '../App.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import Lenis from '@studio-freight/lenis';

import ProjectSection from './Assets/projectSection';
import BiographySection from './Assets/biographySection';
import HomeSection from './Assets/HomeSection';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContent = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
    });
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