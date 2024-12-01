import React, { useState, useEffect } from "react";
import { getGuests, deleteGuest } from "../services/api";

const GuestsManagement = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests().then(setGuests);
  }, []);

  const handleDelete = (id) => {
    deleteGuest(id).then(() => {
      setGuests(guests.filter((guest) => guest.id !== id));
    });
  };

  return (
    <div>
      <h2>Gestión de Huéspedes</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            {guest.name} ({guest.email}){" "}
            <button onClick={() => handleDelete(guest.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestsManagement;
