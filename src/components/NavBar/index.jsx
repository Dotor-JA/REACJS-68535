import React from "react";
import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <nav className="is-primary navbar">
            <Link to="/" >
                <p className="title navbar-brand">Dotor3D</p>
            </Link>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to={`/category/impresoras3D`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Impresoras 3D</NavLink>
                    <NavLink to={`/category/filamento`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Filamento</NavLink>
                    <NavLink to={`/category/resina`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Resina</NavLink>
                    <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                </div>
            </div>
            <CardWidget />
        </nav>

    )

}

export default NavBar;  