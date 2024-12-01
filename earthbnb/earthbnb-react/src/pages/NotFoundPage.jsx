import React from 'react';
import './NotFoundPage.css';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <div className="not">
                <h2>404</h2>
                <h2>Página no encontrada</h2>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
