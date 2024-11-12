import '../../App.css';

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/src/all';

import imgDashboardFooderFrontend from '../../Assets/fooder/sito front end.png';
import vidFooderFrontend from '../../Assets/fooder/fooder.mp4';
import imgDashboardFooderBuisness from '../../Assets/fooder/fooder-dashboard-buisness.png';
import imgStatsFooderBuisness from '../../Assets/fooder/statistics back end.png';

import imgDashboardBoolflix from '../../Assets/dccomics&boolflix/boolflix.png';
import vidBoolflix from '../../Assets/dccomics&boolflix/boolflix.mp4';

import imgGameCreatorHome from '../../Assets/gamecreator/home-gamecreator.png';
import imgGameCreatorCharacter from '../../Assets/gamecreator/character-gamecreator.png';
import imgGameCreatorItems from '../../Assets/gamecreator/items-gamecreator.png';

import Lottie from "lottie-react";
import scrollAnimation from '../../Assets/lottieflieasAnimation/scrollAnimation.json';


function ProjectSection() {
    const sectionsRef = useRef([]);

    const handleWheel = (e) => {
        e.stopPropagation();
        const scrollContainer = e.currentTarget.querySelector('.overflow-y-scroll');
        if (scrollContainer) {
            scrollContainer.scrollBy({
                top: e.deltaY * 4,
                behavior: 'smooth',
            });
        }
    };

    const handleNoScroll = (e) => {
        if (window.innerWidth >= 1024) {
            alert('Chiudi la sezione con il pulsante in alto a destra per continuare a scrollare gli altri progetti!');
            e.stopPropagation();
        }
    };

    useEffect(() => {
        const sections = sectionsRef.current;

        const resetAll = () => {
            sectionsRef.current.forEach(section => {
                section.classList.remove('transition');
            });
        };

        sections.forEach(section => {
            const button = section.querySelector('button');
            const close = section.querySelector('.close');
            const images = section.querySelectorAll('.images-transition');
            const scrollHoverPanel = section.querySelector('.scroll-hover-panel');

            if (window.innerWidth >= 1024) {
                button.addEventListener('click', () => {
                    document.body.style.overflow = 'hidden';
                    section.classList.add('transition', 'animate');

                    setTimeout(() => {
                        scrollHoverPanel.classList.remove('hidden');
                        setTimeout(() => {
                            scrollHoverPanel.classList.add('hidden');
                        }, 3000);
                    }, 1000);
                    images.forEach(img => {
                        img.classList.add('transition');
                        img.style.width = '50%';
                    });
                    setTimeout(() => {
                        section.classList.add('animate-completed');
                    }, 1000);
                });

            }
            if (window.innerWidth < 1024) {
                button.addEventListener('click', () => {
                    section.classList.add('transition-mobile', 'animate-mobile');

                    setTimeout(() => {
                        scrollHoverPanel.classList.remove('hidden');
                        setTimeout(() => {
                            scrollHoverPanel.classList.add('hidden');
                        }, 3000);
                    }, 1000);
                    setTimeout(() => {
                        section.classList.add('animate-completed');
                    }, 1000);
                });

            }
            close.addEventListener('click', () => {
                section.classList.remove('animate-completed');
                scrollHoverPanel.classList.add('hidden');

                images.forEach(img => {
                    img.classList.remove('transition', 'transition-mobile');
                    img.style.width = '';
                });
                setTimeout(() => {
                    section.classList.remove('animate', 'animate-mobile');
                    setTimeout(() => {
                        resetAll();
                    }, 1000);
                }, 100);
            });
        });

    }, []);




    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            if (window.innerWidth >= 1024) {

                gsap.registerPlugin(ScrollTrigger);

                let sections = gsap.utils.toArray(".project");

                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".horizontal-container",
                        pin: true,
                        scrub: true,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
                    }
                });
            }
        },
        {}
    );

    return (
        <div id="projects" className='bg-white -mt-1'>

            <div className='horizontal-container lg:w-[calc(300%)] h-full flex flex-wrap lg:flex-nowrap'>
                <section ref={el => sectionsRef.current[0] = el} className='project fooder'>
                    <div className="cover cover-mobile cover-tablet overflow-hidden absolute top-0 left-0 w-full h-full bg-cover bg-center p-28 z-30">
                        <div className=" w-[calc(600px)] lg:flex flex-row lg:mb-0 px-5 flex-wrap z-50 hidden">
                            <a href="https://html.spec.whatwg.org/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">HTML</span>
                                <svg data-aos="fade-right" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                                </svg>
                            </a>
                            <a href="https://www.w3.org/TR/CSS/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">CSS</span>
                                <svg data-aos="fade-down" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                                </svg>
                            </a>
                            <a href="https://getbootstrap.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">BOOTSTRAP</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-4xl text-purple-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                                </svg>
                            </a>
                            <a href="https://vuejs.org/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">VUE.JS</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-4xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path>
                                </svg>
                            </a>
                            <a href="https://vitejs.dev/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">VITEJS</span>
                                <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 410 404" fill="none">
                                    <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)" />
                                    <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#41D1FF" />
                                            <stop offset="1" stopColor="#BD34FE" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FFEA83" />
                                            <stop offset="0.0833333" stopColor="#FFDD35" />
                                            <stop offset="1" stopColor="#FFA800" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">JAVASCRIPT</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-yellow-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
                                </svg>
                            </a>
                            <a href="https://laravel.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">LARAVEL</span>
                                <svg data-aos="fade-down" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"></path>
                                </svg>
                            </a>
                            <a href="https://www.php.net/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">PHP</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-4xl text-sky-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path>
                                </svg>
                            </a>
                            <a href="https://www.mysql.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">MYSQL</span>
                                <svg data-aos="fade-left" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-4xl text-sky-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                                </svg>
                            </a>
                        </div>

                        <button className='border-2 text-white px-8 py-2 rounded-full font-bold absolute bottom-28 left-1/2
                        transform -translate-x-1/2 transition-all duration-500 ease-in-out hover:bg-white hover:text-black'>About Fooder</button>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' h-screen' onWheel={handleWheel}>
                            <div className="overflow-y-scroll lg:h-full h-1/2 w-full pb-28">
                                <img src={imgDashboardFooderFrontend} className='images-transition pt-28 bg-yellow' alt="" />
                                <h1 className='lg:text-3xl text-xl pl-5 py-10 bg-yellow'>Scopri come funziona Fooder guardando questo video!</h1>
                                <video src={vidFooderFrontend} autoPlay loop className='images-transition'></video>
                                <h1 className='text-6xl pl-5 pb-10 pt-28 '>Fooder Buisness</h1>
                                <img src={imgDashboardFooderBuisness} className='images-transition' alt="" />
                                <img src={imgStatsFooderBuisness} className='images-transition' alt="" />
                            </div>

                            <div className='scroll-hover-panel lg:w-1/2 w-full absolute bg-opacity-50 top-0 left-0 bg-black z-10 lg:h-screen h-1/2 flex justify-center items-start  hidden lg:items-end'>
                                <p className=' text-white opacity-100'>
                                    <Lottie
                                        animationData={scrollAnimation}
                                        className='lg:w-28 w-10'
                                    /></p>
                            </div>

                        </div>
                        <div className="text-animation absolute top-full left-0 lg:left-full lg:top-0 lg:w-1/2 lg:h-full w-full h-1/2 z-0 flex items-center bg-white" onWheel={handleNoScroll}>
                            <div className="p-10 max-w-[calc(1000px)]">
                                <h1 className='lg:text-6xl text-4xl pb-10'>Fooder</h1>
                                <p className='lg:text-xl text-md'>Fooder è una web app per ordinare cibo a domicilio, sviluppata come progetto finale in team presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Il frontend è realizzato con Vue.js per un'interfaccia utente dinamica, mentre il backend utilizza Laravel per una gestione affidabile e sicura.
                                    Questo progetto full-stack dimostra le competenze tecniche e pratiche acquisite durante lo svolgimento del corso.
                                </p>

                                <span className="close absolute lg:top-28 lg:right-28 top-10 right-10 z-20">
                                    <button className='border-2 border-black rounded-full w-12 h-12 text-3xl
                                 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out'>X
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={el => sectionsRef.current[1] = el} className='project boolflix'>
                    <div className="cover cover-mobile cover-tablet overflow-hidden absolute top-0 left-0 w-full h-full bg-cover bg-center p-28 z-30">
                        <div className=" w-[calc(460px)] lg:flex flex-row lg:mb-0 px-5 flex-wrap z-50 hidden">
                            <a href="https://html.spec.whatwg.org/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">HTML</span>
                                <svg data-aos="fade-right" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                                </svg>
                            </a>
                            <a href="https://www.w3.org/TR/CSS/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">CSS</span>
                                <svg data-aos="fade-down" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                                </svg>
                            </a>
                            <a href="https://getbootstrap.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">BOOTSTRAP</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-4xl text-purple-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                                </svg>
                            </a>
                            <a href="https://vuejs.org/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">VUE.JS</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-4xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path>
                                </svg>
                            </a>
                            <a href="https://vitejs.dev/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">VITEJS</span>
                                <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 410 404" fill="none">
                                    <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)" />
                                    <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#41D1FF" />
                                            <stop offset="1" stopColor="#BD34FE" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FFEA83" />
                                            <stop offset="0.0833333" stopColor="#FFDD35" />
                                            <stop offset="1" stopColor="#FFA800" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">JAVASCRIPT</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-yellow-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
                                </svg>
                            </a>
                        </div>

                        <button className='border-2 text-white px-8 py-2 rounded-full font-bold absolute bottom-28 left-1/2
                        transform -translate-x-1/2 transition-all duration-500 ease-in-out hover:bg-white hover:text-black'>About Boolflix</button>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' h-screen' onWheel={handleWheel}>
                            <div className="overflow-y-scroll lg:h-full h-1/2 w-full bg-black pb-28">
                                <img src={imgDashboardBoolflix} className='images-transition pt-28 bg-black' alt="" />
                                <h1 className='lg:text-3xl text-xl pl-5 py-10 bg-black text-white'>Scopri come funziona Boolflix guardando questo video!</h1>
                                <video src={vidBoolflix} autoPlay loop className='images-transition'></video>
                            </div>
                            <div className='scroll-hover-panel lg:w-1/2 w-full absolute bg-opacity-50 top-0 left-0 bg-black z-10 lg:h-screen h-1/2 flex justify-center items-start  hidden lg:items-end'>
                                <p className=' text-white opacity-100'>
                                    <Lottie
                                        animationData={scrollAnimation}
                                        className='lg:w-28 w-10'
                                    /></p>
                            </div>
                        </div>
                        <div className="text-animation absolute top-full left-0 lg:left-full lg:top-0 lg:w-1/2 lg:h-full w-full h-1/2 z-0 flex items-center bg-white" onWheel={handleNoScroll}>
                            <div className="p-10 max-w-[calc(1000px)]">
                                <h1 className='lg:text-6xl text-4xl pb-10'>Boolflix</h1>
                                <p className='text-md lg:text-xl'>Boolflix è una web app simil Netflix per guardare film e serie tv creata con Vue.js, con una home dove sono presenti gli aggiunti di recente, una pagina per i film e una per le serie tv con anche la possibilità di cercare il titolo che si vuole.</p>

                                <span className="close absolute lg:top-28 lg:right-28 top-10 right-10 z-20">
                                    <button className='border-2 border-black rounded-full w-12 h-12 text-3xl
                         hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out'>X</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={el => sectionsRef.current[2] = el} className='project gamecreator'>
                    <div className="cover cover-mobile cover-tablet overflow-hidden absolute top-0 left-0 w-full h-full bg-cover bg-center p-28 z-30">
                        <div className=" w-[calc(460px)] lg:flex flex-row lg:mb-0 px-5 flex-wrap z-50 hidden">
                            <a href="https://html.spec.whatwg.org/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">HTML</span>
                                <svg data-aos="fade-right" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                                </svg>
                            </a>
                            <a href="https://www.w3.org/TR/CSS/"
                                className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">CSS</span>
                                <svg data-aos="fade-down" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                                </svg>
                            </a>
                            <a href="https://getbootstrap.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">BOOTSTRAP</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-4xl text-purple-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                                </svg>
                            </a>
                            <a href="https://laravel.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">LARAVEL</span>
                                <svg data-aos="fade-down" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"></path>
                                </svg>
                            </a>
                            <a href="https://www.php.net/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">PHP</span>
                                <svg data-aos="fade-up" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-4xl text-sky-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path>
                                </svg>
                            </a>
                            <a href="https://www.mysql.com/" className="p-3 border-800 hover:scale-150 duration-300 group">
                                <span className="absolute top-full left-1/2 -translate-x-1/2 text-white bg-black rounded-md p-2 text-xs opacity-0 group-hover:opacity-100 duration-300">MYSQL</span>
                                <svg data-aos="fade-left" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-4xl text-sky-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                                </svg>
                            </a>
                        </div>

                        <button className='border-2 text-black px-8 py-2 rounded-full font-bold absolute bottom-28 left-1/2
                        transform -translate-x-1/2 transition-all duration-500 ease-in-out hover:bg-black hover:text-white'>About GameCreator</button>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' h-screen' onWheel={handleWheel}>
                            <div className="overflow-y-scroll lg:h-full h-1/2 w-full pb-28">
                                <img src={imgGameCreatorHome} className='images-transition pt-28 bg-white' alt="" />
                                <img src={imgGameCreatorCharacter} className='images-transition' alt="" />
                                <img src={imgGameCreatorItems} className='images-transition' alt="" />
                            </div>
                            <div className='scroll-hover-panel lg:w-1/2 w-full absolute bg-opacity-50 top-0 left-0 bg-black z-10 lg:h-screen h-1/2 flex justify-center items-start  hidden lg:items-end'>
                                <p className=' text-white opacity-100'>
                                    <Lottie
                                        animationData={scrollAnimation}
                                        className='lg:w-28 w-10'
                                    /></p>
                            </div>
                        </div>
                        <div className="text-animation absolute top-full left-0 lg:left-full lg:top-0 lg:w-1/2 lg:h-full w-full h-1/2 z-0 flex items-center bg-white" onWheel={handleNoScroll}>
                            <div className="p-10 max-w-[calc(1000px)]">
                                <h1 className='lg:text-6xl text-4xl pb-10'>GameCreator</h1>
                                <p className='lg:text-xl text-md'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean utilizzando Laravel</a>.
                                    Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>

                                <span className="close absolute lg:top-28 lg:right-28 top-10 right-10 z-20">
                                    <button className='border-2 border-black rounded-full w-12 h-12 text-3xl
                         hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out'>X</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default ProjectSection;