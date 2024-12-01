import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dropdownRef = useRef(null); // Referencia al contenedor del dropdown y los formularios

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleLoginForm = () => {
        setIsLoginFormOpen(!isLoginFormOpen);
        setIsDropdownOpen(false);
        setIsRegisterFormOpen(false);
    };

    const toggleRegisterForm = () => {
        setIsRegisterFormOpen(!isRegisterFormOpen);
        setIsLoginFormOpen(false);
        setIsDropdownOpen(false);
    };

    // Cierra todos los desplegables y formularios al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setIsLoginFormOpen(false);
                setIsRegisterFormOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Iniciar sesión con:', email, password);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Registrar con:', email, password);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src="/images/logoSample.png" alt="Logo" />
                </a>
            </div>

            

            <div className="navbar-links" ref={dropdownRef}>
                <button className="btn-dropdown" onClick={toggleDropdown}>
                    Iniciar sesión &#9662;
                </button>

                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li onClick={toggleLoginForm}>Iniciar sesión</li>
                        </ul>

                        <ul>
                            <li><a href="/behost">Ser anfitrión</a></li>
                        </ul>

                        <ul>
                            <li><a href="/help">Centro de ayuda</a></li>
                        </ul>
                    </div>
                )}

                {(isLoginFormOpen || isRegisterFormOpen) && (
                    <div className="login-popup">
                        {isLoginFormOpen && (
                            <form onSubmit={handleLoginSubmit}>
                                <h2>Iniciar Sesión</h2>
                                <div className="input-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-login">Iniciar Sesión</button>
                                <div className="input-group">
                                    <p>
                                        ¿Aún no tienes cuenta?{' '}
                                        <span className="link" onClick={toggleRegisterForm}>Regístrate</span>
                                    </p>
                                </div>
                            </form>
                        )}
                        {isRegisterFormOpen && (
                            <form onSubmit={handleRegisterSubmit}>
                                <h2>Registrarse</h2>
                                <div className="input-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-register">Registrarse</button>
                                <div className="input-group">
                                    <p>
                                        ¿Ya tienes cuenta?{' '}
                                        <span className="link" onClick={toggleLoginForm}>Inicia sesión</span>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
