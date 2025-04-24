import React from 'react';
import '../Scss/_contact.scss';

import { useTranslation } from 'react-i18next';
import {motion} from "framer-motion";

import mailbox from '../Assets/Contact/mailbox.png';

function Contact() {

    const { t } = useTranslation("Contact");

    return(
        <div className='contact-container'>
            <div>
                <h1>{t("title")}</h1>
            </div>
            <div>
                <img src={mailbox} />
            </div>
            <div>
                <p>{t("text")}</p>
            </div>
        </div>


    );

}

export default Contact; 