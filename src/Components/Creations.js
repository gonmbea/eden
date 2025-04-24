import React from 'react';
import '../Scss/_creations.scss';
import figo from '../Assets/Creations/figo.png';
import roma from '../Assets/Creations/roma.png';
import maracuja from '../Assets/Creations/maracuja.png';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";



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
                    <Link to="/Art" >
                        <motion.img src={roma} alt='Roma by Beatriz' whileHover={{scale:1.1}} />
                    </Link>
                    <Link to="/Art" className='link'>
                        <p>{t("sketches")}</p>
                    </Link>

                </div>
                <div className='creations-fruits'>
                    <Link to="/Wip">
                        <motion.img src={figo} alt='Figo by Beatriz' whileHover={{scale:1.1}}/>
                    </Link>
                    <Link to="/Wip" className='link'>
                        <p>{t("projects")}</p>
                    </Link>
                </div>
                <div className='creations-fruits'>
                    <Link to="/Wip" >
                        <motion.img src={maracuja} alt='Maracuja by Beatriz' whileHover={{scale:1.1}}/>
                    </Link>
                    <Link to="/Wip" className='link'>
                        <p>{t("crafts")}</p>
                    </Link>
                    
                </div>

            </div>

        </div>

    );
}

export default Creations;