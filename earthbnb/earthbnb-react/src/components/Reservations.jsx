import React, { useEffect, useState } from "react";
import { getReservations } from "../services/api";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations().then(setReservations);
  }, []);

  return (
    <div>
      <h2>Reservas</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.guestName} - {reservation.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
