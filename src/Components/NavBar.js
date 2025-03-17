import React from "react";
import { Link } from "react-router-dom";
import '../Scss/_navBar.scss';



function NavBar() {
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
                        <Link className="link" to="/AboutMe">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Art">
                            Art
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );

}

export default NavBar;
