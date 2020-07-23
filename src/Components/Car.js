import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Car = () => {
    const  {ref, getAnimation} = useWebAnimations({
        keyframes: [
            { transform: 'translateY(-1px)' },
            { transform: 'translateY(1px)' },
            { transform: 'translateY(-1px)' } 
        ],
        timing: {
          duration: 1000,
          iterations: Infinity
        },
      });

      const speedUp = () => {
        const animation = getAnimation();
        animation.updatePlaybackRate(animation.playbackRate *= 1.1);
      };
    return (
        <div className="car" ref={ref} onClick={speedUp}>
        <img src={process.env.PUBLIC_URL + "/images/car.png"} alt="" />
      </div>
    )
}
