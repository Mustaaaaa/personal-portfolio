import '../../App.css';

import React from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/src/all';


import imgDashboardFooder from '../../Assets/fooder/fooder-dashboard-buisness.png';
import imgHomeGameCreator from '../../Assets/gamecreator/home-gamecreator.png';
import imgProjectsLaravelAuth from '../../Assets/laravel-auth/Projects.png';
import imgMainPageProjectChess from '../../Assets/chessacademy/mainpage.png';
function ProjectSection() {

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            let sections = gsap.utils.toArray(".panel");

            let scrollTween = gsap.to(sections, {
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
            let sections1 = gsap.utils.toArray(".panel1");

            gsap.to(sections1, {
                xPercent: -100 * (sections1.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".mwrap1",
                    pin: true,
                    scrub: 1,
                    snap: false,
                    end: () => "+=" + document.querySelector(".mwrap1").offsetWidth
                }
            });

        },
        {}
    );

    return (
        <div id="projects" className='bg-white'>

            <div className='mwrap'>

                <section className='panel sec h-screen w-full flex justify-center items-center'>
                    <div className=" w-full bg-white z-10  mx-auto">
                        <div className='max-w-[calc(1536px)] flex flex-col items-center lg:flex-row flex-grow'>
                            <div className=' w-full lg:w-2/6 flex flex-col px-5'>
                                <p className='text-4xl md:text-7xl break-all title'>Fooder</p>
                                <p className='text-md py-5 text-pretty description'>Fooder è una web app per ordinare cibo a domicilio, sviluppata come progetto finale in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Il frontend è realizzato con Vue.js per un'interfaccia utente dinamica, mentre il backend utilizza Laravel per una gestione affidabile e sicura.
                                    Questo progetto full-stack dimostra le competenze tecniche e pratiche acquisite durante lo svolgimento del corso.</p>
                            </div>
                            <div className='w-11/12 lg:w-4/6'>
                                <img src={imgDashboardFooder} className="max-w-full px-5 rounded-3xl shadow-2xl" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto pt-20 lg:pt-0">
                        <div className="flex flex-col  items-center lg:flex-row">
                            <div className=" w-full lg:w-2/6 flex flex-col px-5">
                                <p className='text-4xl md:text-7xl break-all text-pretty title'>GameCreator</p>
                                <p className='text-md py-5 text-pretty description'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per la creazione del backend.
                                    Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>
                            </div>
                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgHomeGameCreator} className="max-w-full" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel  sec h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto  pt-20 lg:pt-0">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="w-full lg:w-2/6 flex flex-col px-5">
                                <p className="text-4xl md:text-7xl break-all text-pretty title">Laravel-auth</p>
                                <p className="text-md py-5 text-pretty description">Laravel-Auth è una web app per la pubblicazione dei progetti di ogni tipo e il salvataggio nel database per poi essere riportati in un progetto Front-end(non ancora sviluppato),
                                    sviluppata interamente in solitario presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Utilizza Laravel per il backend e include un sistema di autenticazione degli utenti sviluppato autonomamente. Questo progetto evidenzia le competenze nel backend development acquisite durante il corso.</p>
                            </div>

                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgProjectsLaravelAuth} className="max-w-full" alt="imgDashboard" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div>
                <div className='panel1 h-screen w-full flex justify-center items-center'>
                    <div className=" w-full bg-white z-10  mx-auto">
                        <div className='max-w-[calc(1536px)] flex flex-col items-center lg:flex-row flex-grow'>
                            <div className=' w-full lg:w-2/6 flex flex-col px-5'>
                                <p data-scroll data-scroll-direction="horizontal" data-scroll-delay="13" className='text-4xl md:text-7xl break-all'>Fooder</p>
                                <p className='text-md py-5 text-pretty'>Fooder è una web app per ordinare cibo a domicilio, sviluppata come progetto finale in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Il frontend è realizzato con Vue.js per un'interfaccia utente dinamica, mentre il backend utilizza Laravel per una gestione affidabile e sicura.
                                    Questo progetto full-stack dimostra le competenze tecniche e pratiche acquisite durante lo svolgimento del corso.</p>
                            </div>
                            <div className='w-11/12 lg:w-4/6'>
                                <img src={imgDashboardFooder} className="max-w-full px-5" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mwrap1 bg-white'>

                <section className='panel1 h-screen w-full flex justify-center items-center'>
                    <div className=" w-full bg-white z-10  mx-auto">
                        <div className='max-w-[calc(1536px)] flex flex-col items-center lg:flex-row flex-grow'>
                            <div className=' w-full lg:w-2/6 flex flex-col px-5'>
                                <p data-scroll data-scroll-direction="horizontal" data-scroll-delay="13" className='text-4xl md:text-7xl break-all'>Fooder</p>
                                <p className='text-md py-5 text-pretty'>Fooder è una web app per ordinare cibo a domicilio, sviluppata come progetto finale in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Il frontend è realizzato con Vue.js per un'interfaccia utente dinamica, mentre il backend utilizza Laravel per una gestione affidabile e sicura.
                                    Questo progetto full-stack dimostra le competenze tecniche e pratiche acquisite durante lo svolgimento del corso.</p>
                            </div>
                            <div className='w-11/12 lg:w-4/6'>
                                <img src={imgDashboardFooder} className="max-w-full px-5" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel1 h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto pt-20 lg:pt-0">
                        <div className="flex flex-col  items-center lg:flex-row">
                            <div className=" w-full lg:w-2/6 flex flex-col px-5">
                                <p className='text-4xl md:text-7xl break-all text-pretty'>GameCreator</p>
                                <p className='text-md py-5 text-pretty'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso
                                    <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per la creazione del backend.
                                    Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>
                            </div>
                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgHomeGameCreator} className="max-w-full" alt='imgDashboard' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='panel1 h-screen w-full flex justify-center items-center'>
                    <div className=" mx-auto  pt-20 lg:pt-0">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="w-full lg:w-2/6 flex flex-col px-5">
                                <p className="text-4xl md:text-7xl break-all text-pretty">Laravel-auth</p>
                                <p className="text-md py-5 text-pretty">Laravel-Auth è una web app per la pubblicazione dei progetti di ogni tipo e il salvataggio nel database per poi essere riportati in un progetto Front-end(non ancora sviluppato),
                                    sviluppata interamente in solitario presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>.
                                    Utilizza Laravel per il backend e include un sistema di autenticazione degli utenti sviluppato autonomamente. Questo progetto evidenzia le competenze nel backend development acquisite durante il corso.</p>
                            </div>

                            <div className="w-11/12 lg:w-4/6">
                                <img src={imgProjectsLaravelAuth} className="max-w-full" alt="imgDashboard" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}

export default ProjectSection;