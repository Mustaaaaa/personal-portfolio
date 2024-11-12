import React from 'react'
import TypewriterComponent from 'typewriter-effect';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import { useGSAP } from '@gsap/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


import imgPersonal from '../../Assets/aboutMe/personalImage.png';
import cv from '../../Assets/aboutMe/moustafa.ibrahim.121.pdf';

import Stats from './Components/Stats';
import AirplaneFlyButton from './Components/AirplaneFlyButton';
import TechnologiesBar from './Components/TechnologiesBar';

const HomeSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (window.innerWidth >= 1024) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.clip-path-23',
                    pin: true,
                    start: 'top top',
                    end: '+=' + window.innerHeight * 1.3,
                    scrub: 0.6,
                }
            });

            tl.to('.clip-path-23', {
                rotation: -360,
                xPercent: -111,
                yPercent: 25,
                backgroundColor: 'transparent',
                clipPath: 'circle(50% at 50% 50%)',
            });

            tl.to('.clip-path-23', {
                yPercent: 7,
            });
            if (window.innerHeight >= 1081) {

                tl.to('.clip-path-23', {
                    yPercent: 20,
                });
            }
        }
    });

    return (
        <div id='home' className="flex w-full justify-center flex-col items-center">

            <div className="md:h-[calc(90vh)] h-[calc(80vh - 64px)] md:pt-0 pt-16 lg:max-w-[calc(1920px)] w-full z-10  flex lg:flex-row flex-col-reverse items-center justify-center">
                <div className="lg:w-3/6 w-full flex flex-col items-center lg:items-start lg:pl-[calc(15%)]">
                    <p data-aos="fade-down-right" className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Moustafa</p>
                    <p data-aos="fade-up-left" className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:pl-64 lg:pl-44">Ibrahim</p>
                    <div className="text-sm flex sm:text-xl lg:text-2xl xl:text-3xl text-black " data-aos="fade-up">
                        Junior&nbsp;
                        <span className='text-orange'>
                            <TypewriterComponent
                                options={{
                                    strings: [' Full-stack Web Developer', ' Front-end Web Developer', ' Back-end Web Developer'],
                                    delay: 80,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <div className='mt-10 flex flex-nowrap justify-center items-center' data-aos="fade-up">
                        <div>
                            <a href={cv} download="moustafa_ibrahim_cv.pdf" className='text-lg lg:h-14 lg:w-44 w-36 h-12 border-2 flex justify-center items-center gap-2 rounded-full border-orange-500 text-orange-500  hover:bg-orange-500 hover:text-white transition duration-500 mr-6'><FontAwesomeIcon icon={faDownload} /> Scarica CV</a>
                        </div>
                        <div className='group'>
                            <span className="absolute top-full left-[calc(59%)]  text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-500">Github</span>
                            <a href='https://github.com/Mustaaaaa' className='text-2xl border-2 h-12 w-12 flex justify-center items-center rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-500 mr-4'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <div className='group'>
                            <span className="absolute top-full left-[calc(78%)]  text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-500">Linkedin</span>
                            <a href='https://www.linkedin.com/in/moustafa-ibrahim-975962314/' className='text-2xl border-2 h-12 w-12 flex justify-center items-center rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-500 mr-4'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-3/6 flex justify-center rounded-full h-60 w-60  items-center clip-path-23 bg-orange-500 bg-no-repeat lg:h-full top-0 right-0">
                    <img src={imgPersonal} alt='imgDashboard' className='rounded-full w-5/6 lg:w-3/6 xl:w-2/6' />
                </div>
            </div>

            <Stats />
            <AirplaneFlyButton />
            <TechnologiesBar />
        </div>
    )
}

export default HomeSection
