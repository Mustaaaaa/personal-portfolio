import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const AirplaneFlyButton = () => {
    const [showButton, setShowButton] = useState(false);

    const [isFlying, setIsFlying] = useState(false);
    const handleFlyAway = () => {
        setIsFlying(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setIsFlying(false);
            }
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setShowButton(true);
            } else {
                setTimeout(() => {
                    setShowButton(false);
                }, 1000);
            }

        };

        window.addEventListener('scroll', handleScroll);


    }, []);

    return (
        <div className='lg:flex justify-center z-50 hidden'>
            {showButton && (

                <div className="fixed bottom-0 -right-20 transform -translate-x-1/2  group  hover:scale-110 duration-500"
                >
                    <button
                        onClick={handleFlyAway}
                        className="relative bg-opacity-20 bg-orange-500 rounded-tl-full w-40 h-20  text-2xl hover:bg-opacity-100 duration-500 flex justify-center items-center"
                        data-aos="fade-up"
                    >
                        <div className='flex flex-col'>
                            <div>
                                <FontAwesomeIcon
                                    className={`rotate-[270deg] opacity-100 transform transition-all ease-in-out ${isFlying ? '-translate-y-[200vh] opacity-0' : 'translate-y-0'
                                        } duration-[2s]`}
                                    icon={faPlane}
                                />
                            </div>
                            <div className='text-sm'>
                                Scroll to top
                            </div>
                        </div>


                    </button>
                </div>
            )}
        </div>

    )
}

export default AirplaneFlyButton
