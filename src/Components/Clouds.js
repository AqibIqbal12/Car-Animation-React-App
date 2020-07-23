import React,{useEffect} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

export const Clouds = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'translateX(-3400px)' }
        ],
        timing: {
            duration: 50000,
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
        <div className="clouds" ref={ref}>
            <img src={process.env.PUBLIC_URL + "/images/cloud.png"} alt="" className="cloud1" />
            <img src={process.env.PUBLIC_URL + "/images/cloud.png"} alt="" className="cloud2" />
            <img src={process.env.PUBLIC_URL + "/images/cloud.png"} alt="" className="cloud3" />
        </div>
    )
}
