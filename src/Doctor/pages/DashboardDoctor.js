import React from "react";
import Appointments from "../pages/Appointments";
//import Messages from "../pages/Messages";
import Notes from "../pages/Notes";

const DashboardDoctor = () => {
    const doctorName = localStorage.getItem("doctorName");

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4">Tableau de Bord Docteur <span>{doctorName}</span> 👨‍⚕️</h1>

      <div className="row">
        {/* Colonne gauche : Rendez-vous + Messages */}
        <div className="col-md-8">
          <Appointments />
          
        </div>

        {/* Colonne droite : Bloc-Note */}
        <div className="col-md-8">
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default DashboardDoctor;
