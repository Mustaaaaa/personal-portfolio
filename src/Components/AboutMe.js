import ScrollFunction from './Assets/scrollFunction.js';
import ScrollFunctionMobile from './Assets/scrollFunctionMobile.js';
import ScrollTop from './Assets/ScrollTop.js';
import React, { useRef, useEffect } from 'react';
import '../App.css';
import imgPersonal from '../Assets/abotMe/personalImage.png';
import { useScroll } from './Assets/ScrollDisable.js';
function AboutMe() {
    const section1Ref = useRef(null);
    const sectionDescriptionRef = useRef(null);
    const sectionExperienceRef = useRef(null);
    const sectionImgRef = useRef(null);
    const sectionStartFutureRef = useRef(null);
    const sectionWebDeveloperRef = useRef(null);


    const handleClick = (sectionRef) => {
        ScrollFunction(sectionRef);
    };

    const handleClickMobile = (sectionRef) => {
        ScrollFunctionMobile(sectionRef);
    };
    const { setScrollDisabled } = useScroll();

    useEffect(() => {
        setScrollDisabled(true);

        return () => {
            setScrollDisabled(false);
        };
    }, [setScrollDisabled]);
    return (
        <div className="flex justify-center flex-col">
            <div className="container min-h-[calc(100vh-56px)] d:min-h-0 mx-auto relative flex items-center justify-center lg:pt-20 md:pt-5">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClickMobile(section1Ref)} className='hidden md:block border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129123;
                    </button>
                </div>

                <div className='flex flex-col lg:flex-row lg:flex-grow lg:flex-wrap items-center justify-center w-full'>

                    <div ref={sectionImgRef} className='container lg:w-2/6 flex justify-center items-center h-[calc(100vh-64px)] md:h-auto relative'>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <button onClick={() => handleClickMobile(sectionDescriptionRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                                &#129123;
                            </button>
                        </div>
                        <div>
                            <img src={imgPersonal} className="bg-orange-500 rounded-3xl" alt='imgPersonal' />
                        </div>
                    </div>

                    <div ref={sectionDescriptionRef} className='container w-full lg:w-2/6 flex flex-col justify-center p-5 h-screen md:h-auto relative'>
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                            <button onClick={ScrollTop} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                                &#129121;
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <button onClick={() => handleClick(sectionExperienceRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                                &#129123;
                            </button>
                        </div>
                        <div className='md:hidden'>
                            <div>
                                <p className='text-3xl'>Moustafa : Da Turismo a Web Developer - Un Viaggio di Scoperta</p>
                                <p className='text-md py-5'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                    sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</p>
                            </div>
                            <div className='w-100'>
                                <p className='text-3xl'>Le mie radici e il percorso formativo</p>
                                <p className='text-md py-5'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                                    il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                                    ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</p>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <p className='text-3xl'>Moustafa : Da Turismo a Web Developer - Un Viaggio di Scoperta</p>
                            <p className='text-md py-5'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</p>
                        </div>
                    </div>
                    <div className='hidden md:block p-5 lg:mt-32 lg:w-4/6'>
                        <p className='text-3xl'>Le mie radici e il percorso formativo</p>
                        <p className='text-md py-5'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                            il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                            ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</p>
                    </div>

                </div>
            </div>



            <div ref={section1Ref} className='container min-h-screen mx-auto md:relative flex flex-col items-center justify-center lg:pt-20 md:pt-5'>
                <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2">
                    <button onClick={ScrollTop} className='border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129121;
                    </button>
                </div>
                <div ref={sectionExperienceRef} className='container w-full lg:w-4/6 flex flex-col justify-center p-5 h-screen md:h-auto relative'>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <button onClick={() => handleClickMobile(sectionDescriptionRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                            &#129121;
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <button onClick={() => handleClick(sectionStartFutureRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                            &#129123;
                        </button>
                    </div>
                    <p className='text-3xl'>Le prime esperienze lavorative</p>
                    <p className='text-md py-5'>
                        Il settore turistico, nonostante la mia formazione, non risuonava con le mie aspirazioni. Così, ho iniziato a esplorare diverse opportunità:
                        <br />
                        <strong>1) L'azienda edile di famiglia</strong>: Un'esperienza che mi ha insegnato il valore del lavoro duro, ma che ho dovuto abbandonare a causa di allergie.
                        <br />
                        <strong>2) Magazziniere</strong>: Un ruolo che mi ha permesso di crescere rapidamente, diventando capoturno in soli 12 mesi. Eppure, sentivo che mancava qualcosa...
                    </p>
                </div>

                <div ref={sectionStartFutureRef} className='container w-full lg:w-4/6 flex flex-col justify-center p-5 h-screen md:h-auto relative'>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <button onClick={() => handleClick(sectionExperienceRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                            &#129121;
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <button onClick={() => handleClick(sectionWebDeveloperRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                            &#129123;
                        </button>
                    </div>
                    <p className='text-3xl'>La scintilla che ha dato inizio al mio percorso</p>
                    <p className='text-md py-5'>
                        Fu durante una riflessione sul mio percorso che un ricordo venne a galla. Mi tornò in mente un progetto scolastico in cui mi ero impegnato molto in <strong>HTML</strong> e <strong>CSS</strong>
                        che mi aveva fatto guadagnare l'unico 10 in cinque anni di superiori. Quella scintilla di entusiasmo che avevo provato allora si riaccese, indicandomi la strada da seguire.
                    </p>
                </div>

                <div ref={sectionWebDeveloperRef} className='container w-full lg:w-4/6 flex flex-col justify-center p-5 h-screen md:h-auto relative'>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <button onClick={() => handleClick(sectionStartFutureRef)} className='md:hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                            &#129121;
                        </button>
                    </div>

                    <p className='text-3xl'>Il salto nel mondo dello sviluppo web</p>
                    <p className='text-md py-5'>
                        Così ho deciso di seguire questa nuova direzione, mi sono iscritto al corso di Boolean. È stato qui che ho realizzato che lo sviluppo web non era solo una nuova carriera,
                        ma la realizzazione di un sogno che avevo da ragazzino, anche se solo ora ne ero pienamente consapevole.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;