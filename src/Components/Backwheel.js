import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Backwheel = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'rotate(360deg)' }
        ],
        timing: {
            duration: 10000,
            iterations: Infinity
        },
    });

    useEffect(() => {
        document.addEventListener("click", (e) => {
            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate *= 1.1);
        });
    }, [getAnimation]); 
    return (
        <div className="wheel">
            <img src={process.env.PUBLIC_URL + "/images/wheel.png"} alt="" className="back-wheel" ref={ref} />
        </div>
    )
}
