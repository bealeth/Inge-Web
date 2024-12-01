import React, { useState } from "react";
import GuestsManagement from "./GuestsManagement";
import HostsManagement from "./HostsManagement";
import Reservations from "./Reservations";
import HelpCenter from "./HelpCenter";
import Reports from "./Reports";

const AdminDashboard = () => {
  const [selectedView, setSelectedView] = useState("guests");

  const renderView = () => {
    switch (selectedView) {
      case "guests":
        return <GuestsManagement />;
      case "hosts":
        return <HostsManagement />;
      case "reservations":
        return <Reservations />;
      case "helpCenter":
        return <HelpCenter />;
      case "reports":
        return <Reports />;
      default:
        return <div>Selecciona una vista</div>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "20%", padding: "1rem", backgroundColor: "#f4f4f4" }}>
        <ul>
          <li onClick={() => setSelectedView("guests")}>Gestión de Huéspedes</li>
          <li onClick={() => setSelectedView("hosts")}>Gestión de Anfitriones</li>
          <li onClick={() => setSelectedView("reservations")}>Reservas</li>
          <li onClick={() => setSelectedView("helpCenter")}>Centro de Ayuda</li>
          <li onClick={() => setSelectedView("reports")}>Reportes</li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: "1rem" }}>{renderView()}</main>
    </div>
  );
};

export default AdminDashboard;
