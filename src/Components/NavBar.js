import React, { useState } from "react";
import { Link, useLocation} from "react-router-dom";
import '../Scss/_navBar.scss';
import { useTranslation } from "react-i18next";
import { HashLink as AnchorLink } from 'react-router-hash-link';
import edenLogo from '../Assets/edenLogo.png';
import i18n from '../i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


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
    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => setMenuOpen(false);


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
            <div className="navbar-responsive" onClick={openMenu}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            {/* Nav Bar Links */}
            <div>
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link className="link" to="/" onClick={closeMenu}>
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <AnchorLink className="link" to="/#aboutMe" onClick={closeMenu}>
                            {t("aboutMe")}
                        </AnchorLink>
                    </li>
                    <li>
                        <Link className="link" to="/Wip" onClick={closeMenu}>
                            {t("projects")}
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Art" onClick={closeMenu}>
                            {t("art")}
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Wip" onClick={closeMenu}>
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Button that switches langueages */}
            <div className="navbar-lang">
                <button onClick={toggleLanguage} className="navbar-lang-button">
                    {i18n.language === "en" ? "PT" : "EN"}
                </button>
            </div>
        </div>
    );

}

export default NavBar;
