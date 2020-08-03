import React from 'react';
import {Highway} from './Components/Highway';
import {Clouds} from './Components/Clouds';
import {City} from './Components/City';
import {Car} from './Components/Car';
import { Wheel } from './Components/Wheel'
import './App.css';

export const App = () => {

    return (

    <div className="main">
      <Highway/>
      <Clouds/>
      <City/>
      <Car/>
      <Wheel/>
    </div>
  )
}
