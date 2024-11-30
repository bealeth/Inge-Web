import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img  
                        alt="Logo de Earthbnb" 
                    />
                </a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/host">Conviértete en anfitrión</a></li>
                </ul>
            </div>
            <div className="navbar-auth">
                <button className="btn-dropdown" onClick={toggleDropdown}>
                    Cuenta &#9662; {/* Icono de flecha hacia abajo */}
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li><a href="/login">Iniciar sesión</a></li>
                            <li><a href="/signup">Regístrate</a></li>
                            <li><a href="/help">Centro de ayuda</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
