import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Car = () => {
    const  {ref} = useWebAnimations({
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

    return (
        <div className="car" ref={ref}>
        <img src={process.env.PUBLIC_URL + "/images/car.png"} alt="" />
      </div>
    )
}
