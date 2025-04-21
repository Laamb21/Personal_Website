import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 

function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/" className="logo">Liam Slade</Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;