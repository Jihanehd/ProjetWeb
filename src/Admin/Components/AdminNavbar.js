import React from "react";
import doctorm from '../../assets/images/doctorm.png';
const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-bold">Dashboard - Administration de l'Hôpital</h5>
        <div className="d-flex align-items-center">
          <span className="me-2">Admin</span>
          <img
          style={{width:'120px'}} 
            src={doctorm}
            className="rounded-circle"
            alt="Profil Admin"
          />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;