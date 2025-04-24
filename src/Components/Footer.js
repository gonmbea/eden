import React from 'react';
import '../Scss/_footer.scss';
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Footer() {
    const { t } = useTranslation("Footer");

    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <motion.a
                    href="https://www.instagram.com/meloboutique.b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/gonmbea/"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                >
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </motion.a>

                <motion.a
                    href="mailto:beatrizgonmoura@gmail.com?body=Write me something here :)"
                    whileHover={{ scale: 1.2 }}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </motion.a>
            </div>

            <div className="footer-copyright">
                <p>&copy; {t("copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;