import React from 'react';
import './HomePage.css';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';  // Importar el Footer

const HomePage = () => {
    return (
        <div className="homepage">
            <SearchBar />
            {/* Sección de lugares populares */}
            <section className="popular-destinations">
                <h2>Destinos populares</h2>
                <div className="destinations-grid">
                    <div className="destination-card">
                        <img src="/images/paris.jpg" alt="París" />
                        <h3>Nombre de alojamiento</h3>
                        <p>Lugar</p>
                        <p>Precio por noche</p>
                    </div>
                    <div className="destination-card">
                        <img src="/images/newyork.jpg" alt="Nueva York" />
                        <h3>Nombre de alojamiento</h3>
                        <p>Lugar</p>
                        <p>Precio por noche</p>
                    </div>
                    <div className="destination-card">
                        <img src="/images/tokyo.jpg" alt="Tokio" />
                        <h3>Nombre de alojamiento</h3>
                        <p>Lugar</p>
                        <p>Precio por noche</p>
                    </div>
                    <div className="destination-card">
                        <img src="/images/barcelona.jpg" alt="Barcelona" />
                        <h3>Nombre de alojamiento</h3>
                        <p>Lugar</p>
                        <p>Precio por noche</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
