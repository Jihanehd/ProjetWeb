import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DoctorSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer les infos du localStorage (ou sessionStorage)
    localStorage.removeItem("admin"); // ou "medecin" selon le cas
    // Rediriger vers la page de connexion
    navigate("/login");
  };

  return (
    <div className="bg-success text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
      {/* Titre du sidebar */}
      <h3 className="text-center mb-4">Docteur</h3>

      {/* Menu de navigation */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/doctor/dashboard" className="nav-link text-white">
            🏠 Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/doctor/appointments" className="nav-link text-white">
            📅 Mes Rendez-vous
          </Link>
        </li>
        
        <li className="nav-item mb-2">
          <Link to="/doctor/notes" className="nav-link text-white">
            📝 Bloc-Notes
          </Link>
        </li>
      </ul>
      <div>
        <button
        className="btn btn-outline mt-3"
        onClick={handleLogout}
      >
        🚪 Déconnexion
      </button>

      </div>
    </div>
  );
};

export default DoctorSidebar;
