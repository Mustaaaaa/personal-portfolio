import React, { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
    const [isScrollDisabled, setScrollDisabled] = useState(false);

    useEffect(() => {
        const disableScroll = (event) => {
            if (isScrollDisabled) {
                event.preventDefault();
                alert("Lo scroll è disabilitato per questa altezza, Clicca il pulsante in fondo alla pagina per andare avanti.");
            }
        };

        const handleResize = () => {
            console.log("Resize detected:", window.innerWidth, window.innerHeight);

            if (window.innerWidth <= 0 || window.innerHeight < 960) {
                setScrollDisabled(false);
            } else {
                setScrollDisabled(true);
            }
        };

        window.addEventListener('wheel', disableScroll, { passive: false });
        window.addEventListener('touchmove', disableScroll, { passive: false });
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('wheel', disableScroll);
            window.removeEventListener('touchmove', disableScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isScrollDisabled]);

    return (
        <ScrollContext.Provider value={{ setScrollDisabled }}>
            {children}
        </ScrollContext.Provider>
    );
}

export const useScroll = () => {
    return useContext(ScrollContext);
}