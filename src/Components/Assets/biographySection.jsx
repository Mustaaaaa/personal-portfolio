import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';
import '../../App.css';

import Lottie from "lottie-react";
import animation100 from '../../Assets/100animation.json';
import fireWorksAnimation from '../../Assets/fireworks.json';
import wavesAnimation from '../../Assets/waves.json';
import workAnimation from '../../Assets/workAnimation.json';
import imgPersonal from '../../Assets/abotMe/personalImage.png';
import personalDiploma from '../../Assets/abotMe/diplomaa.jpg';
import masterBoolean from '../../Assets/abotMe/masterboolean.png';




function App() {
    const biographySectionRef = useRef(null);
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

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
            animation: animation,
            scrub: 1,
        });


    }, []);

    return (
        <div className='mt-[calc(100vh)]'>

            <div className='rotate-[180deg] -[calc(100vh)] '>
                <Lottie
                    animationData={wavesAnimation}
                />
            </div>
            <div ref={biographySectionRef} id="biography" className="flex background-orange">
                <div className='relative w-[calc(54%)] top-0'>
                    <div className='ml-auto w-[calc(40vw)]'>
                        <div className='h-screen flex flex-col justify-center'>
                            <div>
                                <span className='text-3xl text-center flex justify-center pb-5'>Moustafa : Da Turismo a Web Developer</span>
                                <span className='text-md'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                    sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</span>
                            </div>
                        </div>
                        <div className='h-screen flex flex-col justify-center'>
                            <div>
                                <span className='text-3xl text-center flex justify-center pb-5'>Le mie radici e il percorso formativo</span>
                                <span className='text-md'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                                    il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                                    ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</span>
                            </div>
                        </div>
                        <div className='h-screen flex flex-col justify-center'>
                            <div>
                                <span className=' text-3xl text-center flex justify-center pb-5'>Le prime esperienze lavorative</span>
                                <span className='text-md'>Il settore turistico, nonostante la mia formazione, non risuonava con le mie aspirazioni. Così, ho iniziato a esplorare diverse opportunità:
                                    <br />
                                    <strong>1) L'azienda edile di famiglia</strong>: Un'esperienza che mi ha insegnato il valore del lavoro duro, ma che ho dovuto abbandonare a causa di allergie.
                                    <br />
                                    <strong>2) Magazziniere</strong>: Un ruolo che mi ha permesso di crescere rapidamente, diventando capoturno in soli 12 mesi. Eppure, sentivo che mancava qualcosa...</span>
                            </div>
                        </div>
                        <div className='h-screen flex flex-col justify-center'>
                            <div>
                                <span className=' text-3xl text-center flex justify-center pb-5'>La scintilla che ha dato inizio al mio percorso</span>
                                <span className='text-md'>Fu durante una riflessione sul mio percorso che un ricordo venne a galla. Mi tornò in mente un progetto scolastico in cui mi ero impegnato molto in <strong>HTML</strong> e <strong>CSS </strong>
                                    che mi aveva fatto guadagnare l'unico 10 in cinque anni di superiori. Quella scintilla di entusiasmo che avevo provato allora si riaccese, indicandomi la strada da seguire.</span>
                            </div>
                        </div>
                        <div className='h-screen flex flex-col justify-center relative'>
                            <Lottie
                                animationData={fireWorksAnimation}
                                className='fireworks'
                            />
                            <div>
                                <span className=' text-3xl text-center flex justify-center pb-5'>Il salto nel mondo dello sviluppo web</span>
                                <span className='text-md z-40'>Così ho deciso di seguire questa nuova direzione, mi sono iscritto al corso di Boolean. È stato qui che ho realizzato che lo sviluppo web non era solo una nuova carriera,
                                    ma la realizzazione di un sogno che avevo da ragazzino, anche se solo ora ne ero pienamente consapevole.</span>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[calc(46%)] h-auto'>
                    <div className='flex flex-col justify-center sticky w-[calc(100%)] h-screen top-0'>
                        <div className='w-[calc(40vw)] h-[calc(70vh)] relative'>
                            <div className='absolute w-full h-full photo-animation flex justify-center background-orange'>
                                <img src={imgPersonal} alt='imgDashboard' className='w-[calc(480px)] h-[calc(578px)] rounded-3xl' />
                            </div>
                            <div className='absolute w-full h-full photo-animation flex justify-center background-orange'>
                                <img src={personalDiploma} alt='imgDashboard' className=' w-[calc(480px)] rounded-3xl' />
                            </div>
                            <div className='absolute w-full h-full photo-animation flex justify-center background-orange'>
                                <Lottie
                                    animationData={workAnimation}
                                    className='w-[calc(480px)] rounded-3xl background-orange'
                                />
                            </div>
                            <div className='absolute w-full h-full photo-animation flex justify-center background-orange'>
                                <Lottie
                                    animationData={animation100}
                                    className='w-[calc(480px)]  background-orange'
                                />                            </div>
                            <div className='absolute w-full h-full photo-animation flex justify-center background-orange'>
                                <img src={masterBoolean} alt='imgDashboard' className='w-[calc(480px)] rounded-3xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Lottie
                    animationData={wavesAnimation}
                    className='bg-white'
                />
            </div>
        </div>
    );
}


export default App;
