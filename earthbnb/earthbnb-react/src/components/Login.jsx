import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para errores

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar recargar la página

    try {
      // Enviar datos al backend
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Guardar el token y rol en localStorage
      localStorage.setItem("token", response.data.token);

      // Redirigir según el rol
      const role = response.data.role;
      if (role === "admin") {
        window.location.href = "/admin";
      } else if (role === "host") {
        window.location.href = "/host";
      } else if (role === "guest") {
        window.location.href = "/guest";
      }
    } catch (err) {
      // Mostrar mensaje de error
      setError("Credenciales incorrectas o error en el servidor");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Iniciar Sesión
        </button>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
