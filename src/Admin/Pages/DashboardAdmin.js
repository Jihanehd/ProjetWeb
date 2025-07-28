import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardAdmin = () => {
  const [doctorCount, setDoctorCount] = useState(0);
  const [rendezvousCount, setRendezvousCount] = useState(0);
  const [topDoctors, setTopDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors/count")
      .then(res => setDoctorCount(res.data.count))
      .catch(err => console.error("Erreur chargement médecins:", err));

    axios.get("http://127.0.0.1:8000/api/doctors/limited")
      .then(res => setTopDoctors(res.data));

    axios.get("http://127.0.0.1:8000/api/appointments/count")
      .then(res => setRendezvousCount(res.data.count))
      .catch(err => console.error("Erreur chargement rendez-vous:", err));
  }, []);

  // ✅ Styles
  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "30px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease"
  };

  const cardHover = {
    transform: "translateY(-4px)"
  };

 



  return (
    <div className="container-fluid">
      <div className="row mb-5 d-flex justify-content-center gap-4">
        <div
          className="col-md-3"
          style={{ ...cardStyle }}
          onMouseEnter={e => e.currentTarget.style.transform = cardHover.transform}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
        >
          <h5 className="fs-4 mb-2">Médecins</h5>
          <p className="fs-1 fw-bold text-primary">{doctorCount}</p>
        </div>

        <div
          className="col-md-3"
          style={{ ...cardStyle }}
          onMouseEnter={e => e.currentTarget.style.transform = cardHover.transform}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
        >
          <h5 className="fs-4 mb-2">Rendez-vous</h5>
          <p className="fs-1 fw-bold text-success">{rendezvousCount}</p>
        </div>
      </div>

      <div className="card mb-4">
        <h5>Liste des Médecins</h5>
        
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Nom</th>
                <th>Spécialité</th>
                <th>email</th>
                <th>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {topDoctors.map((doc) => (
                <tr key={doc.id_m}>
                  <td><img
                    src={`http://127.0.0.1:8000/storage/${doc.photo_m}`}
                    alt="medecin"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  /></td>
                  <td>{doc.name_m}</td>
                  <td>{doc.name_s}</td>
                  <td>{doc.email_m}</td>
                  <td>{doc.phone_m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
