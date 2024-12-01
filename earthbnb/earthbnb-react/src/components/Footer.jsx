import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Earthbnb</p>
                <nav>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacidad</a></li>
                        <li>°</li>
                        <li><a href="/terms">Términos</a></li>
                        <li>°</li>
                        <li><a href="/about-us">Acerca de nosotros</a></li>
                        <li>°</li>
                        <li><a href="/help">Centro de ayuda</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
