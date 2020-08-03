import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Wheel = () => {

    const { ref: frontWheel, getAnimation: fwGetAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'rotate(360deg)' }
        ],
        timing: {
            duration: 10000,
            iterations: Infinity
        },
    });

    const { ref: backWheel, getAnimation: bwGetAnimation } = useWebAnimations({
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
            const animation1 = fwGetAnimation();
            animation1.updatePlaybackRate(animation1.playbackRate *= 1.1);
            const animation2 = bwGetAnimation();
            animation2.updatePlaybackRate(animation2.playbackRate *= 1.1);

        });
    }, [fwGetAnimation, bwGetAnimation]);


    return (
        <>
            <div className="wheel">
                <img src={process.env.PUBLIC_URL + "/images/wheel.png"} alt="" className="front-wheel" ref={frontWheel} />
            </div>
            <div className="wheel">
                <img src={process.env.PUBLIC_URL + "/images/wheel.png"} alt="" className="back-wheel" ref={backWheel} />
            </div>
        </>
    )
}
