import React from 'react';
import '../Scss/_contact.scss';

import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import mailbox from '../Assets/Contact/mailbox.png';

function Contact() {

    const { t } = useTranslation("Contact");

    return (
        <div className="contact-container">
            <div className="contact-left">
                <div className='contact-text'>
                    <h1>{t("title")}</h1>
                    <p>{t("text")}</p>
                </div>
                <div className="contact-clickables">
                    <motion.a
                        href="https://www.linkedin.com/in/gonmbea/"
                        target="_blank"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    </motion.a>
                    <p>|</p>
                    <motion.a
                        href="mailto:beatrizgonmoura@gmail.com?body=Write me something here :)"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </motion.a>
                    <a href="mailto:beatrizgonmoura@gmail.com?body=Write me something here :)">{t("email")}</a>
                </div>
            </div>
            <div className="contact-right">
                <img src={mailbox} />
            </div>
        </div>
    );

}

export default Contact; 