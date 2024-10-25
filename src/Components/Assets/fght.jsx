import '../../App.css';

import React, { useEffect } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/src/all';
import Lenis from '@studio-freight/lenis';
import HorizontalScroll from 'react-scroll-horizontal'

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




    return (
        <div id="projects" className='bg-white'>

            <div className='mwrap'>


                <section id="section" className='panel sec h-screen w-full flex justify-center items-center'>
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

                <section id="section" className='panel sec h-screen w-full flex justify-center items-center'>
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

                <section id="section" className='panel  sec h-screen w-full flex justify-center items-center'>
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

                <section id="section" className='panel1 sec h-screen w-full flex justify-center items-center'>
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

                <section id="section" className='panel1 sec h-screen w-full flex justify-center items-center'>
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

                <section id="section" className='panel1 sec h-screen w-full flex justify-center items-center'>
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