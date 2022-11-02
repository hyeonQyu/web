import { useRef } from 'react';

const useFullscreen = (callback) => {
    const element = useRef();

    const triggerFullscreen = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }

            callback && callback(true);
        }
    };

    const exitFullscreen = () => {
        document.exitFullscreen();
        callback && callback(false);
    };

    return {
        element,
        triggerFullscreen,
        exitFullscreen,
    };
};

export default useFullscreen;
