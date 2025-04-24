import React from 'react';
import '../Scss/_aboutMe.scss';
import house from '../Assets/AboutMe/house.png';
import resume from '../Assets/AboutMe/Resume2025.pdf'
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



function AboutMe() {
    const { t } = useTranslation("AboutMe");
    
    return (
        <div className="about-container">
            <div className="about-left">
                <h1 className="about-text-heading">{t("title")}</h1>
                <p>{t("paragraph")}</p>
                <div className="about-left-buttons">
                    <motion.a
                        href="/Contact"
                        whileHover={{ scale: 1.1 }}
                    >
                        <button className="button">  {t("contact")} </button>
                    </motion.a>
                    <motion.a
                        href={resume}
                        download
                        whileHover={{ scale: 1.1 }}
                    >
                        <button className="button">{t("resume")}</button>
                    </motion.a>
                </div>
            </div>
            <div className="about-right">
                <img src={house} alt="House Sketch by Beatriz" />
            </div>
        </div>
    );
}

export default AboutMe; 