import React from "react";
import { Link, useLocation} from "react-router-dom";
import '../Scss/_navBar.scss';
import { useTranslation } from "react-i18next";
import { HashLink as AnchorLink } from 'react-router-hash-link';
import edenLogo from '../Assets/edenLogo.png';
import i18n from '../i18n';


function NavBar() {
    const { t } = useTranslation("NavBar");

    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "pt" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="navbar">

            {/* Logo which will be hidden in the home page */}
                <div className="navbar-logo" 
                style={{ 
                    visibility: isHomePage ? 'hidden' : 'visible',
                    // Optional: maintain width even when hidden
                    width: isHomePage ? '50px' : 'auto',
                    marginLeft: '1rem'
                }}
                >
                    <Link to="/">
                        <img src={edenLogo} alt="Eden Logo"/>
                    </Link>
                </div>

            <div>
            <ul className="navbar-links">
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
                        <Link className="link" to="/Projects">
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
