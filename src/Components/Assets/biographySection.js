

import '../../App.css';

import Lottie from "lottie-react";
import animation100 from '../../Assets/100animation.json';
import fireWorksAnimation from '../../Assets/fireworks.json';
import wavesAnimation from '../../Assets/waves.json';
import imgPersonal from '../../Assets/abotMe/personalImage.png';
import personalDiploma from '../../Assets/abotMe/diplomaa.jpg';
import masterBoolean from '../../Assets/abotMe/masterboolean.png';



function MainContent() {


    // elements
    var elements_to_watch = document.querySelectorAll('.watch');

    // callback
    var callback = function (items) {
        items.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add("in-page");
            } else {
                item.target.classList.remove("in-page");
            }
        });
    }
    // observer
    var observer = new IntersectionObserver(callback, { threshold: 0.6 });

    // apply
    elements_to_watch.forEach((element) => {
        observer.observe(element);
    });

    return (
        <div>

            <div className='rotate-[180deg] mt-[calc(100vh)] -mb-10'>
                <Lottie
                    animationData={wavesAnimation}
                />
            </div>
            <div id="biography" className='bg-orange-500 m[calc(100vh)] z-20'>
                <div className='biography-text-section watch'>
                    <p className='biography-text'>
                        <span className='flex flex-col w-[calc(50%)] items-center'>
                            <span className='text-3xl text-pretty text-center'>Moustafa : Da Turismo a Web Developer</span>
                            <span className='text-md pt-5 w-[calc(75%)]'>Ciao! Sono <strong className="font-bold">Moustafa</strong>, ho 23 anni con origini egiziane e un cuore italiano. La mia storia è un intreccio di
                                sfide e scoperte che mi hanno portato a trovare la mia vera passione: lo sviluppo web.</span>
                        </span>

                        <img src={imgPersonal} alt='imgDashboard' />
                    </p>
                </div>
                <div className='biography-text-section watch'>
                    <p className='biography-text'>
                        <img src={personalDiploma} className="w-[calc(350px)]" alt='imgDashboard' />
                        <span className='flex flex-col w-[calc(50%)] items-center'>
                            <span className='text-3xl text-pretty text-center'>Le mie radici e il percorso formativo</span>
                            <span className='text-md pt-5 w-[calc(75%)]'>Sono nato in Egitto ma cresciuto in Italia, ho vissuto un'esperienza educativa che ha abbracciato due mondi. Ho completato
                                il mio percorso scolastico qui in Italia, dalle elementari fino al diploma nel settore turistico. Tuttavia, come spesso accade nella vita,
                                ciò che studiamo non sempre riflette ciò che siamo destinati a diventare.</span>
                        </span>

                    </p>
                </div>
                <div className='biography-text-section watch'>
                    <p className='biography-text'>
                        <span className='flex flex-col w-[calc(50%)] items-center '>
                            <span className='text-3xl text-pretty text-center'>Le prime esperienze lavorative</span>
                            <span className='text-md pt-5 max-w-[calc(1050px)]'>Il settore turistico, nonostante la mia formazione, non risuonava con le mie aspirazioni. Così, ho iniziato a esplorare diverse opportunità:
                                <br />
                                <strong>1) L'azienda edile di famiglia</strong>: Un'esperienza che mi ha insegnato il valore del lavoro duro, ma che ho dovuto abbandonare a causa di allergie.
                                <br />
                                <strong>2) Magazziniere</strong>: Un ruolo che mi ha permesso di crescere rapidamente, diventando capoturno in soli 12 mesi. Eppure, sentivo che mancava qualcosa...</span>
                        </span>

                    </p>
                </div>
                <div className='biography-text-section watch'>
                    <p className='biography-text'>
                        <span className='flex flex-col w-[calc(50%)] items-center'>
                            <span className='text-3xl text-pretty text-center'>La scintilla che ha dato inizio al mio percorso</span>
                            <span className='text-md pt-5 w-[calc(75%)]'>Fu durante una riflessione sul mio percorso che un ricordo venne a galla. Mi tornò in mente un progetto scolastico in cui mi ero impegnato molto in <strong>HTML</strong> e <strong>CSS </strong>
                                che mi aveva fatto guadagnare l'unico 10 in cinque anni di superiori. Quella scintilla di entusiasmo che avevo provato allora si riaccese, indicandomi la strada da seguire.</span>
                        </span>

                        <Lottie
                            animationData={animation100}
                            className='w-[calc(350px)]'
                        />
                    </p>
                </div>
                <div className='biography-text-section watch'>
                    <p className='biography-text'>
                        <img src={masterBoolean} className="w-[calc(350px)] rounded-3xl" alt='imgDashboard' />
                        <span className='flex flex-col w-[calc(50%)] items-center z-10'>
                            <span className='text-3xl text-pretty text-center'>Il salto nel mondo dello sviluppo web</span>
                            <span className='text-md pt-5 w-[calc(75%)]'>Così ho deciso di seguire questa nuova direzione, mi sono iscritto al corso di Boolean. È stato qui che ho realizzato che lo sviluppo web non era solo una nuova carriera,
                                ma la realizzazione di un sogno che avevo da ragazzino, anche se solo ora ne ero pienamente consapevole.</span>
                        </span>

                        <Lottie
                            animationData={fireWorksAnimation}
                            className='fireworks'
                        />
                    </p>
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

export default MainContent;