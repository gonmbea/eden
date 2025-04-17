import React from 'react';
import '../Scss/_footer.scss';
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    const { t } = useTranslation("Footer");

    return(
        <footer className='footer-container'>
            <div className='footer-icons'>
                <div>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </div>
            <div className='footer-email'>
                <a href="mailto:max.beatrizgonmoura@gmail.com?body=Write me something here :)">{t("email")}</a>
            </div>
            <div className='footer-copyright'>
                <p>&copy; {t("copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;