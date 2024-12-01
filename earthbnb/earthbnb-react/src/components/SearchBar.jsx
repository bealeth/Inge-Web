import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSearch = () => {
        alert(`Buscando en ${destination} del ${checkIn} al ${checkOut} para ${guests} huésped(es).`);
    };

    return (
        <div className="search-bar">
            <div className="search-field">
                <label htmlFor="destination">Destino</label>
                <input
                    type="text"
                    id="destination"
                    placeholder="¿A dónde vas?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div className="search-field">
                <label htmlFor="checkIn">Entrada</label>
                <input
                    type="date"
                    id="checkIn"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                />
            </div>
            <div className="search-field">
                <label htmlFor="checkOut">Salida</label>
                <input
                    type="date"
                    id="checkOut"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                />
            </div>
            <div className="search-field">
                <label htmlFor="guests">Huéspedes</label>
                <input
                    type="number"
                    id="guests"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <button className="btn-search" onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
};

export default SearchBar;
