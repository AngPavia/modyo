import { useState } from "react";
import { DButton, DInput, DAlert } from "@dynamic-framework/ui-react";

export default function Login() {
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Reiniciar errores

    if (!numeroCuenta || !password) {
      setError("Por favor ingresa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numeroCuenta, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Inicio de sesión exitoso");
      } else {
        setError(data.message || "Credenciales incorrectas.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h2 className="fw-bold mb-4">Inicio de Sesión</h2>

      {error && <DAlert theme="danger" className="mb-3">{error}</DAlert>}

      <DInput
        label="Número de Cuenta"
        placeholder="Ingrese su número de cuenta"
        value={numeroCuenta}
        onChange={(value) => setNumeroCuenta(value)} // <- CORREGIDO
        className="mb-3"
      />

      <DInput
        label="Contraseña"
        type="password"
        placeholder="Ingrese su contraseña"
        value={password}
        onChange={(value) => setPassword(value)} // <- CORREGIDO
        className="mb-3"
      />

      <DButton text="Iniciar Sesión" onClick={handleLogin} size="lg" className="btn-primary" />
    </div>
  );
}
