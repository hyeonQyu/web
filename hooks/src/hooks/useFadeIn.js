import { useEffect, useRef } from 'react';

const useFadeIn = () => {
    const element = useRef();

    useEffect((duration = 1, delay = 0) => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    return {
        ref: element,
        style: { opacity: 0 },
    };
};

export default useFadeIn;
