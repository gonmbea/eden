import React from 'react';
import '../Scss/_creations.scss';
import figo from '../Assets/Creations/figo.png';
import roma from '../Assets/Creations/roma.png';
import maracuja from '../Assets/Creations/maracuja.png';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';



function Creations() {
    const { t } = useTranslation("Creations");
    
    return(
        <div className='creations-container'>
            <div className='creations-top'>
                <h1 className='creations-title'>
                    {t("title")}
                </h1>
            </div>
            <div className='creations-bottom'>
                <div className='creations-fruits'>
                    <Link to="/Art">
                        <img src={roma} alt='Roma by Beatriz'/>
                    </Link>
                    <Link to="/Art">
                        <p>{t("sketches")}</p>
                    </Link>

                </div>
                <div className='creations-fruits'>
                    <img src={figo} alt='Figo by Beatriz'/>
                    <p>{t("projects")}</p>
                </div>
                <div className='creations-fruits'>
                    <img src={maracuja} alt='Maracuja by Beatriz'/>
                    <p>{t("crafts")}</p>
                </div>

            </div>

        </div>

    );
}

export default Creations; 