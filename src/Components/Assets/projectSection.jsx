import '../../App.css';

import React, { useEffect } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/src/all';
import Lenis from '@studio-freight/lenis';


import imgDashboardFooder from '../../Assets/fooder/fooder-dashboard-buisness.png';
import imgDashboardFooderFrontend from '../../Assets/fooder/fooder-dashboard-frontend.png';
import imgHomeGameCreator from '../../Assets/gamecreator/home-gamecreator.png';
import imgItemsGameCreator from '../../Assets/gamecreator/items-gamecreator.png';
import imgProjectsLaravelAuth from '../../Assets/laravel-auth/Projects.png';
import imgTechnologiesLaravelAuth from '../../Assets/laravel-auth/technologies.png';
import imgMainPageProjectChess from '../../Assets/chessacademy/mainpage.png';
import imgLearnMorePageProjectChess from '../../Assets/chessacademy/learnmore.png';
import imgDcComics from '../../Assets/dccomics&boolflix/dccomics.png';
import imgBoolflix from '../../Assets/dccomics&boolflix/boolflix.png';
function ProjectSection() {
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


    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            const sections = gsap.utils.toArray(".panel");

            const horizontalScroll = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".mwrap",
                    pin: true,
                    scrub: 1,
                    snap: false,
                    end: () => "+=" + document.querySelector(".mwrap").offsetWidth
                }
            });
            let sectionsSecond = gsap.utils.toArray(".panel1");

            const horizontalScrollSecond = gsap.to(sectionsSecond, {
                xPercent: -100 * (sectionsSecond.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".mwrap1",
                    pin: true,
                    scrub: 1,
                    snap: false,
                    end: () => "+=" + document.querySelector(".mwrap1").offsetWidth
                }
            });
            document.querySelectorAll(".sec").forEach(el => {
                gsap.to(el.querySelector('.description'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScroll,
                        trigger: el.querySelector('.description'),
                        start: 'top bottom',
                        end: '+=40%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.title'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScroll,
                        trigger: el.querySelector('.title'),
                        start: 'top bottom',
                        end: '+=50%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.description-second'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScrollSecond,
                        trigger: el.querySelector('.description-second'),
                        start: 'top bottom',
                        end: '+=40%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.title-second'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScrollSecond,
                        trigger: el.querySelector('.title-second'),
                        start: 'top bottom',
                        end: '+=50%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.title-vertical'), {
                    y: 0,
                    scrollTrigger: {
                        trigger: el.querySelector('.title-vertical'),
                        start: 'top bottom',
                        end: '+=30%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.description-vertical'), {
                    y: 0,
                    scrollTrigger: {
                        trigger: el.querySelector('.description-vertical'),
                        start: 'top bottom',
                        end: '+=25%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-vertical-bottom-left'), {
                    y: 0,
                    scrollTrigger: {
                        trigger: el.querySelector('.img-vertical-bottom-left'),
                        start: 'top bottom',
                        end: '+=25%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-vertical-top-right'), {
                    y: 0,
                    scrollTrigger: {
                        trigger: el.querySelector('.img-vertical-top-right'),
                        start: 'top bottom',
                        end: '+=30%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-bottom-left'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScroll,
                        trigger: el.querySelector('.img-bottom-left'),
                        start: 'top bottom',
                        end: '+=50%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-top-right'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScroll,
                        trigger: el.querySelector('.img-top-right'),
                        start: 'top bottom',
                        end: '+=40%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-bottom-left-second'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScrollSecond,
                        trigger: el.querySelector('.img-bottom-left-second'),
                        start: 'top bottom',
                        end: '+=50%',
                        scrub: 0.5,
                    }

                });
                gsap.to(el.querySelector('.img-top-right-second'), {
                    x: 0,
                    scrollTrigger: {
                        containerAnimation: horizontalScrollSecond,
                        trigger: el.querySelector('.img-top-right-second'),
                        start: 'top bottom',
                        end: '+=40%',
                        scrub: 0.5,
                    }

                });
            })
        },
        {}
    );

    return (
        <div id="projects" className='bg-white z-40'>

            <div className='mwrap'>


                <section className='panel sec h-screen w-full flex justify-center items-center'>
                    <div className=" w-full bg-white z-10  mx-auto">
                        <div className=' flex flex-col items-center lg:flex-row'>
                            <div className=' w-full lg:w-2/6 flex flex-col px-5'>
                                <p className='text-4xl md:text-7xl break-all title-vertical py-0'>Fooder</p>
                                <p className='text-md py-5 text-pretty description-vertical'>Fooder è una web app per ordinare cibo a domicilio, sviluppata come progetto finale in team presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Il frontend è realizzato con Vue.js per un'interfaccia utente dinamica, mentre il backend utilizza Laravel per una gestione affidabile e sicura.
                                    Questo progetto full-stack dimostra le competenze tecniche e pratiche acquisite durante lo svolgimento del corso.</p>
                            </div>
                            <div className=''>
                                <img src={imgDashboardFooder} className="img-vertical-bottom-left rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgDashboardFooderFrontend} className="img-vertical-top-right rounded-3xl shadow-2xl" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto pt-20 lg:pt-0">
                        <div className="flex flex-col  items-center lg:flex-row">
                            <div className=" w-full lg:w-2/6 flex flex-col px-5">
                                <p className='text-4xl md:text-7xl break-all text-pretty  title'>GameCreator</p>
                                <p className='text-md py-5 text-pretty description'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per la creazione del backend.
                                    Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>
                            </div>
                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgHomeGameCreator} className="img-bottom-left rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgItemsGameCreator} className="img-top-right rounded-3xl shadow-2xl" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel  sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto  pt-20 lg:pt-0">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="w-full lg:w-2/6 flex flex-col px-5">
                                <p className="text-4xl md:text-7xl break-all text-pretty title ">Laravel-auth</p>
                                <p className="text-md py-5 text-pretty description">Laravel-Auth è una web app per la pubblicazione dei progetti di ogni tipo e il salvataggio nel database per poi essere riportati in un progetto Front-end(non ancora sviluppato),
                                    sviluppata interamente in solitario presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Utilizza Laravel per il backend e include un sistema di autenticazione degli utenti sviluppato autonomamente. Questo progetto evidenzia le competenze nel backend development acquisite durante il corso.</p>
                            </div>

                            <div>
                                <img src={imgProjectsLaravelAuth} className="img-bottom-left rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgTechnologiesLaravelAuth} className="img-top-right rounded-3xl shadow-2xl" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='mwrap1 bg-white'>

                <section className='panel1 sec h-screen w-full flex justify-center items-center'>
                    <div className=" w-full bg-white z-10  mx-auto">
                        <div className='flex flex-col items-center lg:flex-row'>
                            <div className=' w-full lg:w-2/6 flex flex-col px-5'>
                                <p className='text-4xl md:text-7xl title-vertical'>Chess Academy</p>
                                <p className='text-md py-5 text-pretty description-vertical'>Chess Academy è stato il progetto midterm presso Boolean, sviluppato interamente con Vue.js. Questa web app sfrutta le potenzialità di Vue.js per garantire un"esperienza utente fluida e reattiva. Il progetto dimostra le competenze acquisite nel front-end durante il corso.</p>
                            </div>
                            <div className='w-11/12 lg:w-4/6'>
                                <img src={imgMainPageProjectChess} className="img-vertical-bottom-left rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgLearnMorePageProjectChess} className="img-vertical-top-right rounded-3xl shadow-2xl" alt='imgDashboard' />                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel1 sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto pt-20 lg:pt-0">
                        <div className="flex flex-col  items-center lg:flex-row">
                            <div className=" w-full lg:w-2/6 flex flex-col px-5">
                                <p className='text-4xl md:text-7xl break-ll text-pretty title-second'>Dc Comics & Boolflix</p>
                                <p className='text-md py-5 text-pretty description-second'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per la creazione del backend.
                                    Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>
                            </div>
                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgDcComics} className="img-bottom-left-second rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgBoolflix} className="img-top-right-second rounded-3xl shadow-2xl" alt='imgDashboard' />                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel1 sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto  pt-20 lg:pt-0">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="w-full lg:w-2/6 flex flex-col px-5">
                                <p className="text-4xl md:text-7xl break-all text-pretty title-second">Laravel-auth</p>
                                <p className="text-md py-5 text-pretty description-second">Laravel-Auth è una web app per la pubblicazione dei progetti di ogni tipo e il salvataggio nel database per poi essere riportati in un progetto Front-end(non ancora sviluppato),
                                    sviluppata interamente in solitario presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Utilizza Laravel per il backend e include un sistema di autenticazione degli utenti sviluppato autonomamente. Questo progetto evidenzia le competenze nel backend development acquisite durante il corso.</p>
                            </div>

                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgDashboardFooder} className="img-bottom-left-second rounded-3xl shadow-2xl" alt='imgDashboard' />
                                <img src={imgDashboardFooder} className="img-top-right-second rounded-3xl shadow-2xl" alt='imgDashboard' />                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}

export default ProjectSection;