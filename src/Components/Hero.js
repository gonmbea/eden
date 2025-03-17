import React from 'react';
import '../Scss/_hero.scss';
import edenLogo from '../Assets/edenLogo.png';
import adobeLogo from '../Assets/Adobe Express - file.png';

function Hero() {
  return(
  <div className='hero-container'>

    <div className='hero-container-logo'>
        <img src={edenLogo}/>
        {/* <img src={adobeLogo}/> */}
    </div>
    <div className='hero-container-text'>
        <h1>WELCOME</h1>
        <h3>to my Eden</h3>
    </div>

  </div>
  );
}

export default Hero;