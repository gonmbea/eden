import React from 'react';
import '../Scss/_footer.scss';
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Footer() {
    const { t } = useTranslation("Footer");

    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <div>
                <a href='https://www.instagram.com/meloboutique.b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/gonmbea/' target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                    </a>
                </div>
                <div>
                    <a href="mailto:max.beatrizgonmoura@gmail.com?body=Write me something here :)">
                        <FontAwesomeIcon icon={faEnvelope}  className='icon'/>
                    </a>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; {t("copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;