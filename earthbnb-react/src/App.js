import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import { useUser } from './context/UserContext'; // Aplicable a las vistas
import AdminView from './views/AdminView'; // Vista del administrador
import GuestView from './views/GuestView'; // Vista del huésped
import HostView from './views/HostView'; // Vista del anfitrión
import Login from './components/Login'; // Formulario de login

function App() {
  const { user } = useUser(); // Obtener el usuario desde el contexto

  return (
    <div className="App">
      <Navbar />
      {/* Mostrar el formulario de inicio de sesión si no hay usuario */}
      {!user ? (
        <div className="login-container">
          <h1>Por favor, inicia sesión o regístrate</h1>
          <Login />
        </div>
      ) : (
        // Mostrar la vista correspondiente según el rol
        <div className="user-view">
          {user.role === 'admin' && <AdminView />}
          {user.role === 'guest' && <GuestView />}
          {user.role === 'host' && <HostView />}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
