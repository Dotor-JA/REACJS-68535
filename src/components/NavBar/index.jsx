import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Dotor</a>
                    </div>
                    <ul className="nav__list">
                        <li>
                            <a className="nav__link" href="#">Impresoras</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Filamentos</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Resinas</a>
                        </li>
                    </ul>
            </nav>
        </div>
    );

}

export default NavBar;  