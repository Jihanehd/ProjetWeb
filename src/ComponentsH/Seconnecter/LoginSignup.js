import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoTrans.png";
import axios from "axios";
import './LoginSignup.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      if (response.data.type === "medecin") {
        localStorage.setItem("medecin", "true");
        localStorage.setItem("doctorName", response.data.name_m);
        localStorage.setItem("doctorId", response.data.id_m);
        navigate("/doctor/dashboard");
      } else if (response.data.type === "admin") {
        localStorage.setItem("admin", "true");
        localStorage.setItem("adminName", response.data.name_a);
        localStorage.setItem("adminId", response.data.id_a);
        navigate("/admin/dashboard");
      } else {
        setError("Rôle inconnu. Contactez l'administrateur.");
      }
    } catch (err) {
      setError("Email ou mot de passe invalide.");
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="welcome-section">
        <div className="logo"><img src={logo} alt="logo hôpital" /></div>
        <h1>BIENVENUE</h1>
        <p>
          Cette page est strictement réservée aux docteurs et administrateurs de l'hôpital.<br />
          Si vous êtes un patient, veuillez utiliser l'espace dédié aux rendez-vous ou contacter notre accueil.
        </p>
      </div>

      <div className="login-box">
        <h2>Se connecter</h2>
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
          />

          <label htmlFor="password">Mot de Passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
          />

          <button type="submit" className="submit-btn">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
