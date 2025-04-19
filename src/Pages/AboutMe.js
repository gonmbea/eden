import React from 'react';
import '../Scss/_aboutMe.scss';
import house from '../Assets/house.png';
import resume from '../Assets/Resume2025.pdf'
import { useTranslation } from "react-i18next";



function AboutMe() {
    const { t } = useTranslation("AboutMe");
    
    return(
        <div className='about-container'>
            <div className='about-left'>
                <h1 className='about-text-heading'>{t("title")}</h1>
                <p>{t("paragraph")}</p>
                <div className='about-left-buttons'>
                    <button className='contact-button'>{t("contact")}</button>

                    <a href={resume} download>
                        <button className='button'>{t("resume")}</button>
                    </a>
                </div>
                
            </div>
            <div className='about-right'>
                <img src={house} alt='House Sketch by Beatriz'/>
            </div>
        </div>

    );
}

export default AboutMe; 