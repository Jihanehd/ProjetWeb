import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminSidebar = () => {
   const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer les infos du localStorage (ou sessionStorage)
    localStorage.removeItem("admin"); // ou "medecin" selon le cas
    // Rediriger vers la page de connexion
    navigate("/login");
  };
  return (
    <div className="bg-primary text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link text-white">🏠 Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/doctors" className="nav-link text-white">👨‍⚕️ Médecins</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/actualites" className="nav-link text-white">Actualités</Link>
        </li>
        
      </ul>
      <div>
        <button
        className="btn btn mt-3"
        onClick={handleLogout}
      >
        🚪 Déconnexion
      </button>

      </div>
    </div>
  );
};

export default AdminSidebar;