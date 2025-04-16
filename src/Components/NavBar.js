import React from "react";
import { Link } from "react-router-dom";
import '../Scss/_navBar.scss';
import { useTranslation } from "react-i18next";
import { HashLink as AnchorLink } from 'react-router-hash-link';



function NavBar() {
    const { t } = useTranslation("NavBar");
    
    
    // const toggleLanguage = () => {
    //     const newLang = i18n.language === "en" ? "pr" : "en";
    //     i18n.changeLanguage(newLang);
    // };

    return (
        <div className="navbar">
            {/* <div className="navbar-logo">
                <img src="../Assets/edenLogo.png"/>
            </div> */}
            <div>
            <ul className="navbar-links">
                    <li>
                        <Link className="link" to="/">
                            Home
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
        </div>
    );

}

export default NavBar;
