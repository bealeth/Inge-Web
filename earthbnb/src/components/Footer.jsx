import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()}Earthbnb. Todos los derechos reservados.</p>
                <nav>
                    <ul className="footer-links">
                        <li><a href="/about">Privacidad</a></li>
                        <li><a href="/contact">Términos</a></li>
                        <li><a href="/privacy">Acerca de nosotros</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
