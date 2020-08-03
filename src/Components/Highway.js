import React,{useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Highway = () => {

    const  {ref: ref1, getAnimation} = useWebAnimations({
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

        <div className="highway" ref={ref1}>

        </div>

    )
}
