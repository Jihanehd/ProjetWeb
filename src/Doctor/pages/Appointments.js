import React, { useState, useEffect } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const doctorId = localStorage.getItem("doctorId");
    if (doctorId) {
      axios.get(`http://127.0.0.1:8000/api/appointments/${doctorId}`)
        .then((res) => setAppointments(res.data))
        .catch((err) => console.error("Erreur:", err));
    }
  }, []);

  // ✅ Appliquer le filtre avec gestion format date
  const filteredAppointments = appointments.filter((app) => {
    const appDate = app.date_r?.slice(0, 10); // "2025-05-22"
    const matchDate = selectedDate ? appDate === selectedDate : true;
    const matchStatus = selectedStatus ? app.statut === selectedStatus : true;
    return matchDate && matchStatus;
  });

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Mes Rendez-vous 📅</h2>

      {/* Filtres */}
      <div className="d-flex gap-3 mb-3 flex-wrap align-items-end">
        <div>
          <label className="form-label">Filtrer par date :</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div>
          <label className="form-label">Filtrer par statut :</label>
          <select
            className="form-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{ maxWidth: "200px" }}
          >
            <option value="">Tous les statuts</option>
            <option value="Confirmé">Confirmé</option>
            <option value="En attente">En attente</option>
            <option value="Annulé">Annulé</option>
          </select>
        </div>

        <div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setSelectedDate("");
              setSelectedStatus("");
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>

      {/* Tableau */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Date</th>
              
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{index + 1}</td>
                  <td>{appointment.patient_name}</td>
                  <td>{appointment.patient_email}</td>
                  <td>{appointment.patient_phone}</td>
                  <td>{appointment.date_r?.slice(0, 10)}</td>
                  
                  <td>
                    {appointment.statut === "Confirmé" && (
                      <span className="badge bg-success">Confirmé</span>
                    )}
                    {appointment.statut === "En attente" && (
                      <span className="badge bg-warning text-dark">En attente</span>
                    )}
                    {appointment.statut === "Annulé" && (
                      <span className="badge bg-danger">Annulé</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  Aucun rendez-vous trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
