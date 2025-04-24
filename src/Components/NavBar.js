import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../Scss/_navBar.scss';
import { useTranslation } from "react-i18next";
import { HashLink as AnchorLink } from 'react-router-hash-link';
import edenLogo from '../Assets/edenLogo.png';
import i18n from '../i18n';

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const { t } = useTranslation("NavBar");

    // Used for Logo Display
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    // Functions for changing language display
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "pt" : "en";
        i18n.changeLanguage(newLang);
    };

    // Used for responsive nav bar
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="navbar">
            {/* Logo which will be hidden in the home page */}
            <div
                className="navbar-logo"
                style={{
                    visibility: isHomePage ? "hidden" : "visible",
                    // maintains width even when hidden
                    width: isHomePage ? "50px" : "auto",
                    marginLeft: "1rem",
                }}
            >
                <Link to="/">
                    <img src={edenLogo} alt="Eden Logo" />
                </Link>
            </div>

            {/* Responsive Nav Bar Button */}
            <div className="navbar-responsive" onClick={toggleMenu}>
                <AnimatePresence mode="wait">
                    {menuOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>

            {menuOpen && (<div className="navbar-background" onClick={toggleMenu}></div>)}

            {/* Nav Bar Links */}
            <div>
                {/* Desktop View */}
                <ul className="navbar-links desktop-view">
                    <li>
                        <Link className="link" to="/">
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <AnchorLink className="link" to="/#aboutMe">
                            {t("aboutMe")}
                        </AnchorLink>
                    </li>
                    <li>
                        <Link className="link" to="/Wip">
                            {t("projects")}
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Art">
                            {t("art")}
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Contact">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>

                {/* Mobile View (with motion animations) */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            className="navbar-links mobile-view"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <li>
                                <Link
                                    className="link"
                                    to="/"
                                    onClick={toggleMenu}
                                >
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <AnchorLink
                                    className="link"
                                    to="/#aboutMe"
                                    onClick={toggleMenu}
                                >
                                    {t("aboutMe")}
                                </AnchorLink>
                            </li>
                            <li>
                                <Link
                                    className="link"
                                    to="/Wip"
                                    onClick={toggleMenu}
                                >
                                    {t("projects")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="link"
                                    to="/Art"
                                    onClick={toggleMenu}
                                >
                                    {t("art")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="link"
                                    to="/Contact"
                                    onClick={toggleMenu}
                                >
                                    {t("contact")}
                                </Link>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* Button that switches languages */}
            <div className="navbar-lang">
                <button onClick={toggleLanguage} className="navbar-lang-button">
                    {i18n.language === "en" ? "PT" : "EN"}
                </button>
            </div>
        </div>
    );
}

export default NavBar;