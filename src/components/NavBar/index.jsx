import "./NavBar.css";
import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <CartWidget />  
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Impresoras</a>
                        <a className="nav-link active" aria-current="page" href="#">Filamentos</a>
                        <a className="nav-link active" aria-current="page" href="#">
                            <CartWidget />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default NavBar;  