import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Medecins.css";

const Medecins = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const handleRendezVous = (medecin) => {
    navigate("/Rendez-Vous", { state: { medecin } }); 
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors") 
      .then(response => {
        console.log(response.data);
        setDoctors(response.data);
      }) 
      .catch(error => {
        console.error("Erreur lors du chargement des médecins :", error);
      });
  }, []);

  return (
    <div className="medecins-container">
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <div key={doctor.id_m} className="doctor-container">
            <div className="doctor-image">
              <img
                src={doctor.photo_url }
                alt="Photto Médecin"
                style={{ width: "80px", height: "80px" }} 
              />
            </div>
            <div className="doctor-details">
              <h6>{doctor.name_m}</h6>
              <p>{doctor.name_s}</p>
              <button className="rendezvous-button" onClick={() => handleRendezVous(doctor)}>
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun médecin trouvé.</p>
      )}
    </div>
  );
};

export default Medecins;
