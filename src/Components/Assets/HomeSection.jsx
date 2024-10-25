import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import { useGSAP } from '@gsap/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


import imgPersonal from '../../Assets/abotMe/personalImage.png';
import cv from '../../Assets/moustafa.ibrahim.121.pdf';

import Stats from './Components/Stats';
import AirplaneFlyButton from './Components/AirplaneFlyButton';
import TechnologiesBar from './Components/TechnologiesBar';

const HomeSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.bg',
                pin: true,
                start: 'top top',
                end: '+=' + window.innerHeight * 1.2,
                scrub: 0.3,
            }
        })

        tl.to('.bg', {
            rotation: -360,
            xPercent: -110,
            yPercent: 25,
            backgroundColor: 'transparent',
            clipPath: 'circle(50% at 50% 50%)',
        })

        tl.to('.bg', {
            yPercent: 10,
        })

    })
    return (
        <div className="flex w-full justify-center flex-col items-center">

            <div className=" h-[calc(90vh)] max-w-[calc(1920px)] w-full z-10  flex lg:flex-row flex-col items-center justify-center">
                <div className="w-3/6 flex flex-col items-center lg:items-start p-0 lg:pl-[calc(15%)]">
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
                    <div className='mt-10 flex flex-nowrap' data-aos="fade-up">
                        <div>
                            <a href={cv} download="moustafa_ibrahim_cv.pdf" className='py-3 px-4 border-2 rounded-full border-orange-500 text-orange-500  hover:bg-orange-500 hover:text-white transition duration-300 mr-6'><FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV</a>
                        </div>
                        <div>
                            <a href='https://github.com/Mustaaaaa' className='py-3 px-4 border-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 mr-4'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/moustafa-ibrahim-975962314/' className='py-3 px-4 border-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 mr-4'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/6 w-2/4 flex justify-center items-center bg">
                    <img src={imgPersonal} alt='imgDashboard' className='rounded-full  gradient-opacity max-h-[calc(400px)] ' />
                </div>
            </div>
            <Stats />
            <AirplaneFlyButton />
            <TechnologiesBar />
        </div>
    )
}

export default HomeSection
