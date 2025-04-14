import React from 'react';
import '../Scss/_hero.scss';
import edenLogo from '../Assets/edenLogo.png';
// import { useTranslation } from "react-i18next";



function Hero() {
  // const { t } = useTranslation();
  
  return(
  <div className='hero-container'>

    <div className='hero-container-logo'>
        <img src={edenLogo}/>
    </div>
    <div className='hero-container-text'>
        <h1>WELCOME</h1>
        <h3>to my Eden</h3>
    </div>

  </div>
  );
}

export default Hero;