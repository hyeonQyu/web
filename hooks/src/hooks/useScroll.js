import { useEffect, useState } from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });

    const onScroll = (e) => {
        console.log('y', window.scrollY);
        setState({
            x: window.scrollX,
            y: window.scrollY,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return state;
};

export default useScroll;
