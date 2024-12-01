import React from 'react';
import './HelpPage.css';


const HelpPage = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Centro de ayuda</h1>
            <p>Bienvenido al centro de ayuda. Aquí encontrarás recursos y soporte para resolver tus dudas.</p>
            <ul>
                <li>Artículo 1: <a href="/faq">Preguntas frecuentes</a></li>
                <li>Artículo 2: <a href="/contact">Contáctanos</a></li>
            </ul>
        </div>
    );
};

export default HelpPage;
