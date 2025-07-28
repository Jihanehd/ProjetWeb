import React from "react";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./components/DoctorSidebar";
import DoctorNavbar from "./components/DoctorNavbar";

const DoctorLayout = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Zone principale */}
      <div className="flex-grow-1 d-flex flex-column">
        
        {/* Navbar */}
        <DoctorNavbar />

        {/* Contenu de la page */}
        <main className="flex-grow-1 overflow-auto p-4 bg-light">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DoctorLayout;
