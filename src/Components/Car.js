import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Car = () => {
    const  {ref} = useWebAnimations({
        keyframes: [
             
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
