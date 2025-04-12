import React from 'react';
import '../Scss/_aboutMe.scss';
import aboutMeIMG from '../Assets/IMG_3449.png';
import heroIMG from '../Assets/heroBGM.jpg';


function AboutMe() {
    return(
        <div className='about-container'>
            <div className='about-right'>
                <h1 className='about-text-heading'>MEET BEATRIZ</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button className='contact-button'>Contact Me</button>
                <button className='button'>Resume</button>
            </div>
            <div className='about-left'>
                <img src={heroIMG}/>
            </div>
        </div>

    );
}

export default AboutMe; 