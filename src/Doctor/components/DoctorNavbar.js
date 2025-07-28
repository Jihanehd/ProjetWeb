import React from "react";

const DoctorNavbar = () => {
    const doctorName = localStorage.getItem("doctorName");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Titre à gauche */}
        <h5 className="mb-0">Tableau de Bord Docteur 👨‍⚕️</h5>

        {/* Profil utilisateur à droite */}
        <div className="d-flex align-items-center">
          <span className="me-2">{doctorName}</span>
          
        </div>
        
      </div>
    </nav>
  );
};

export default DoctorNavbar;
