import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import '../../App.css';

import Lottie from "lottie-react";

import animation100 from '../../Assets/lottieflieasAnimation/100animation.json';
import wavesAnimationOrange from '../../Assets/lottieflieasAnimation/waves.json';
import wavesAnimationBlue from '../../Assets/lottieflieasAnimation/wavesBlue.json';
import workAnimation from '../../Assets/lottieflieasAnimation/workAnimation.json';
import personalDiploma from '../../Assets/aboutMe/diplomaa.jpg';
import masterBoolean from '../../Assets/aboutMe/masterboolean.png';



const BiographySection = () => {
    const biographySectionRef = useRef(null);
    const biographySectionMobileVersionRef = useRef(null);
    useEffect(() => {
        if (window.innerWidth >= 1024) {

            gsap.registerPlugin(ScrollTrigger);

            const colors = ["#F97316", "#8b684c", "#ad863b", "#b8b5b5", "#2858a3"];
            const biographySection = biographySectionRef.current.querySelectorAll('.photo-animation');

            biographySection.forEach((item, index) => {
                item.style.zIndex = biographySection.length - index;
            });

            gsap.set(biographySection, { clipPath: 'inset(0px 0px 0px 0px)' });
            const animation = gsap.to('.photo-animation:not(:last-child)', {
                clipPath: 'inset(0px 0px 100% 0px)',
                stagger: 0.5,
                ease: 'none',
            });

            ScrollTrigger.create({
                trigger: biographySectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                snap: 1 / (biographySection.length - 1),
                animation: animation,
                scrub: true,
                onUpdate: self => {
                    const index = Math.min(Math.floor(self.progress * (biographySection.length - 1)), colors.length - 1);
                    const bgColor = colors[index];
                    gsap.to(".gallery", { backgroundColor: bgColor });
                }
            });

        }
    }, []);


    return (
        <div className='w-full'>

            <div className='rotate-[180deg] -[calc(100vh)] -mb-1'>
                <Lottie
                    animationData={wavesAnimationOrange}
                />
            </div>
            <div ref={biographySectionRef} id="biography" className="hidden lg:flex justify-center bg-orange-500 w-full gallery">
                <div className='flex lg:max-w-[calc(1920px)]'>

                    <div className='w-[calc(46%)] h-auto'>
                        <div className='flex flex-col justify-center sticky w-full h-screen top-0'>
                            <div className='w-[calc(80%)] h-[calc(80vh)] relative flex justify-center items-center'>
                                <div className='absolute w-[calc(82%)] h-[calc(92%)] max-w-[calc(482px)] max-h-[calc(742px)] photo-animation background-orange rounded-3xl'>
                                    <div className='h-full flex justify-center items-center'>
                                        <div className='w-[calc(85%)] rounded-3xl shadow-xl'>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute w-[calc(80%)] h-[calc(90%)] max-w-[calc(480px)] max-h-[calc(740px)] photo-animation background-brown rounded-3xl'>
                                    <div className='h-full flex justify-center items-center'>
                                        <img src={personalDiploma} alt='imgDashboard' className='w-[calc(80%)] rounded-3xl shadow-xl' />
                                    </div>
                                </div>

                                <div className='absolute w-[calc(80%)] h-[calc(90%)] max-w-[calc(480px)] max-h-[calc(740px)] photo-animation background-beige rounded-3xl'>
                                    <div className='h-full flex justify-center items-center'>
                                        <Lottie
                                            animationData={workAnimation}
                                            className='w-[calc(80%)] rounded-3xl shadow-xl'
                                        />
                                    </div>
                                </div>

                                <div className='absolute w-[calc(80%)] h-[calc(90%)] max-w-[calc(480px)] max-h-[calc(740px)] photo-animation background-gray rounded-3xl'>
                                    <div className='h-full flex justify-center items-center'>
                                        <Lottie
                                            animationData={animation100}
                                            className='w-[calc(80%)] rounded-3xl shadow-xl'
                                        />
                                    </div>
                                </div>

                                <div className='absolute w-[calc(80%)] h-[calc(90%)] max-w-[calc(480px)] max-h-[calc(740px)] photo-animation background-blue rounded-3xl'>
                                    <div className='h-full flex justify-center items-center'>
                                        <img src={masterBoolean} alt='imgDashboard' className='w-[calc(80%)] rounded-3xl shadow-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[calc(54%)] top-0'>
                        <div className='ml w-[calc(100%)]'>
                            <div className='h-screen flex flex-col justify-center lg:items-center xl:items-start'>
                                <div className='w-2/3'>
                                    <span className='text-3xl text-center flex justify-center pb-5'>Moustafa : Da Turismo a Web Developer</span>
                                    <span className='text-md'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                        sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</span>
                                </div>
                            </div>
                            <div className='h-screen flex flex-col justify-center lg:items-center xl:items-start'>
                                <div className='w-2/3'>
                                    <span className='text-3xl text-center flex justify-center pb-5'>Le mie radici e il percorso formativo</span>
                                    <span className='text-md'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                                        il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                                        ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</span>
                                </div>
                            </div>
                            <div className='h-screen flex flex-col justify-center lg:items-center xl:items-start'>
                                <div className='w-2/3'>
                                    <span className=' text-3xl text-center flex justify-center pb-5'>Le prime esperienze lavorative</span>
                                    <span className='text-md'>Il settore turistico, nonostante la mia formazione, non risuonava con le mie aspirazioni. Così, ho iniziato a esplorare diverse opportunità:
                                        <br />
                                        <strong>1) L'azienda edile di famiglia</strong>: Un'esperienza che mi ha insegnato il valore del lavoro duro, ma che ho dovuto abbandonare a causa di allergie.
                                        <br />
                                        <strong>2) Magazziniere</strong>: Un ruolo che mi ha permesso di crescere rapidamente, diventando capoturno in soli 12 mesi. Eppure, sentivo che mancava qualcosa...</span>
                                </div>
                            </div>
                            <div className='h-screen flex flex-col justify-center lg:items-center xl:items-start'>
                                <div className='w-2/3'>
                                    <span className=' text-3xl text-center flex justify-center pb-5'>La scintilla che ha dato inizio al mio percorso</span>
                                    <span className='text-md'>Fu durante una riflessione sul mio percorso che un ricordo venne a galla. Mi tornò in mente un progetto scolastico in cui mi ero impegnato molto in <strong>HTML</strong> e <strong>CSS </strong>
                                        che mi aveva fatto guadagnare l'unico 10 in cinque anni di superiori. Quella scintilla di entusiasmo che avevo provato allora si riaccese, indicandomi la strada da seguire.</span>
                                </div>
                            </div>
                            <div className='h-screen flex flex-col justify-center lg:items-center xl:items-start'>
                                <div className='w-2/3'>
                                    <span className=' text-3xl text-center flex justify-center pb-5'>Il salto nel mondo dello sviluppo web</span>
                                    <span className='text-md z-40'>Così ho deciso di seguire questa nuova direzione, mi sono iscritto al corso di Boolean. È stato qui che ho realizzato che lo sviluppo web non era solo una nuova carriera,
                                        ma la realizzazione di un sogno che avevo da ragazzino, anche se solo ora ne ero pienamente consapevole.</span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div ref={biographySectionMobileVersionRef} id="biographyMobileVersion" className="lg:hidden flex justify-center bg-orange-500 w-full gallery">
                <div className=''>

                    <div className='w-full h-auto'>
                        <div className=''>
                            <div className=''>
                                <div className='h-screen flex justify-center items-center'>
                                    <div className='max-w-[calc(380px)] rounded-3xl shadow-xl'>
                                    </div>
                                    <div className='p-10'>
                                        <span className='text-3xl text-center flex justify-center pb-5'>Moustafa : Da Turismo a Web Developer</span>
                                        <span className='text-md'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                            sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</span>
                                    </div>
                                </div>

                                <div className='h-screen flex flex-col justify-center items-center'>
                                    <div className='flex justify-center '>
                                        <img src={personalDiploma} alt='imgDashboard' className='w-1/2 sm:w-1/3 rounded-xl shadow-xl' />
                                    </div>
                                    <div className='p-10'>
                                        <span className='text-3xl text-center flex justify-center pb-5'>Le mie radici e il percorso formativo</span>
                                        <span className='text-md'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                                            il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                                            ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</span>
                                    </div>
                                </div>

                                <div className='h-screen flex flex-col justify-center items-center'>
                                    <div className='flex justify-center '>
                                        <Lottie
                                            animationData={workAnimation}
                                            className='w-1/2 sm:w-2/3 rounded-xl'
                                        />
                                    </div>
                                    <div className='p-10'>
                                        <span className=' text-3xl text-center flex justify-center pb-5'>Le prime esperienze lavorative</span>
                                        <span className='text-md'>Il settore turistico, nonostante la mia formazione, non risuonava con le mie aspirazioni. Così, ho iniziato a esplorare diverse opportunità:
                                            <br />
                                            <strong>1) L'azienda edile di famiglia</strong>: Un'esperienza che mi ha insegnato il valore del lavoro duro, ma che ho dovuto abbandonare a causa di allergie.
                                            <br />
                                            <strong>2) Magazziniere</strong>: Un ruolo che mi ha permesso di crescere rapidamente, diventando capoturno in soli 12 mesi. Eppure, sentivo che mancava qualcosa...</span>
                                    </div>
                                </div>

                                <div className='h-screen flex flex-col justify-center items-center'>
                                    <div className='flex justify-center '>
                                        <Lottie
                                            animationData={animation100}
                                            className='w-1/2 sm:w-2/3 rounded-xl'
                                        />
                                    </div>
                                    <div className='p-10'>
                                        <span className=' text-3xl text-center flex justify-center pb-5'>La scintilla che ha dato inizio al mio percorso</span>
                                        <span className='text-md'>Fu durante una riflessione sul mio percorso che un ricordo venne a galla. Mi tornò in mente un progetto scolastico in cui mi ero impegnato molto in <strong>HTML</strong> e <strong>CSS </strong>
                                            che mi aveva fatto guadagnare l'unico 10 in cinque anni di superiori. Quella scintilla di entusiasmo che avevo provato allora si riaccese, indicandomi la strada da seguire.</span>
                                    </div>
                                </div>

                                <div className='h-screen flex flex-col justify-center items-center'>
                                    <div className='flex justify-center '>
                                        <img src={masterBoolean} alt='imgDashboard' className='w-1/2 sm:w-1/3 rounded-xl shadow-xl' />
                                    </div>
                                    <div className='p-10'>
                                        <span className=' text-3xl text-center flex justify-center pb-5'>Il salto nel mondo dello sviluppo web</span>
                                        <span className='text-md z-40'>Così ho deciso di seguire questa nuova direzione, mi sono iscritto al corso di Boolean. È stato qui che ho realizzato che lo sviluppo web non era solo una nuova carriera,
                                            ma la realizzazione di un sogno che avevo da ragazzino, anche se solo ora ne ero pienamente consapevole.</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <Lottie
                    animationData={wavesAnimationBlue}
                    className='rotate-[180deg] -mt-1 hidden lg:block'
                />
                <Lottie
                    animationData={wavesAnimationOrange}
                    className='rotate-[360deg] -mt-1 lg:hidden bg-brown'
                />
            </div>
        </div>
    );
}


export default BiographySection;
