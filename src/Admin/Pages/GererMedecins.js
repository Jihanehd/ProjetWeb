import React, { useEffect, useState } from "react";
import axios from "axios";

const GererMedecins = () => {
  const specialites = [
    "Cardiologie",
    "ORL",
    "Médecine interne",
    "Gynécologie",
    "Dermatologie",
    "Neurologie",
    "Orthopédie",
    "Pédiatrie",
    "Système urinaire",
    "Médecine générale",
    "Chirurgie générale",
    "Autre"
  ];

  const [autreSpecialite, setAutreSpecialite] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [formValues, setFormValues] = useState({
    name_m: "",
    name_s: "",
    email_m: "",
    phone_m: ""
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name_m: "",
    name_s: "",
    email_m: "",
    password_m: "123456",
    phone_m: ""
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get("http://127.0.0.1:8000/api/doctors")
      .then(response => setDoctors(response.data))
      .catch(error => console.error("Erreur de chargement des médecins:", error));
  };

  const handleDelete = (id_m) => {
    if (window.confirm("Supprimer ce médecin ?")) {
      axios.delete(`http://127.0.0.1:8000/api/doctors/${id_m}`)
        .then(() => fetchDoctors())
        .catch(error => console.error("Erreur de suppression:", error));
    }
  };

  const handleEditClick = (doctor) => {
    setEditingDoctor(doctor);
    setFormValues({
      name_m: doctor.name_m,
      name_s: doctor.name_s,
      email_m: doctor.email_m,
      phone_m: doctor.phone_m
    });
  };

  const handleUpdate = () => {
    if (!editingDoctor) return;

     const id_s = specialites.indexOf(formValues.name_s) + 1;

    axios.put(`http://127.0.0.1:8000/api/doctors/${editingDoctor.id_m}`, {
      photo_m:formValues.phone_m,
    name_m: formValues.name_m,
    name_s: formValues.name_s,
    id_s: id_s, 
    email_m: formValues.email_m,
    phone_m: formValues.phone_m,
  } )
      .then(() => {
        setEditingDoctor(null);
        fetchDoctors();
      })
      .catch(error => {
        console.error("Erreur lors de la mise à jour:", error);
        if (error.response) console.log("Détail erreur:", error.response.data);
      });
  };

  const handleAddDoctor = () => {
  const id_s = specialites.indexOf(newDoctor.name_s) + 1; // +1 car id commence à 1

  const data = {
    ...newDoctor,
    id_s: id_s,
    name_s: newDoctor.name_s === "Autre" ? autreSpecialite : newDoctor.name_s,
  };

  axios.post('http://127.0.0.1:8000/api/doctors', data)
    .then(() => {
      setShowAddModal(false);
      setNewDoctor({ name_m: "", name_s: "", email_m: "", password_m: "123456", phone_m: "" });
      fetchDoctors();
    })
    .catch(error => {
      console.error("Erreur ajout médecin :", error);
      console.log("Détail erreur :", error.response.data);
    });
};

  return (
    <div className="container-fluid">
      <h1 className="mb-4">Gérer les Médecins 👨‍⚕️👩‍⚕️</h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Photo</th>
              <th>Id</th>
              <th>Nom</th>
              <th>Spécialité</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <tr key={doctor.id_m}>
                  <td><img
                   src={`http://127.0.0.1:8000/storage/${doctor.photo_m}`}
                   alt="medecin"
                   width="50"
                   height="50"
                   style={{ borderRadius: "50%", objectFit: "cover" }}
  /></td>
                  <td>{doctor.id_m}</td>
                  <td>{doctor.name_m}</td>
                  <td>{doctor.name_s}</td>
                  <td>{doctor.email_m}</td>
                  <td>{doctor.phone_m}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(doctor)}>Modifier</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(doctor.id_m)}>Supprimer</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" className="text-center">Aucun médecin trouvé.</td></tr>
            )}
          </tbody>
        </table>

        <div className="mb-3">
          <button className="btn btn-success" onClick={() => setShowAddModal(true)}>Ajouter un Médecin</button>
        </div>
      </div>

      {/* Modal modification */}
      {editingDoctor && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier Médecin</h5>
                <button type="button" className="btn-close" onClick={() => setEditingDoctor(null)}></button>
              </div>
              <div className="modal-body">
                <input type="text" placeholder="Nom" className="form-control mb-2" value={formValues.name_m} onChange={(e) => setFormValues({ ...formValues, name_m: e.target.value })} />
                <select className="form-select mb-2" value={formValues.name_s} onChange={(e) => setFormValues({ ...formValues, name_s: e.target.value })}>
                  <option value="">Spécialité</option>
                  {specialites.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
                <input type="email" placeholder="Email" className="form-control mb-2" value={formValues.email_m} onChange={(e) => setFormValues({ ...formValues, email_m: e.target.value })} />
                <input type="text" placeholder="Téléphone" className="form-control mb-2" value={formValues.phone_m} onChange={(e) => setFormValues({ ...formValues, phone_m: e.target.value })} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setEditingDoctor(null)}>Annuler</button>
                <button className="btn btn-primary" onClick={handleUpdate}>Sauvegarder</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal ajout */}
      {showAddModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter Médecin</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" placeholder="Nom" className="form-control mb-2" value={newDoctor.name_m} onChange={(e) => setNewDoctor({ ...newDoctor, name_m: e.target.value })} />
                <select className="form-select mb-2" value={newDoctor.name_s} onChange={(e) => setNewDoctor({ ...newDoctor, name_s: e.target.value })}>
                  <option value="">Spécialité</option>
                  {specialites.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
                {newDoctor.name_s === "Autre" && (
                  <input type="text" placeholder="Nouvelle spécialité" className="form-control mb-2" value={autreSpecialite} onChange={(e) => setAutreSpecialite(e.target.value)} />
                )}
                <input type="email" placeholder="Email" className="form-control mb-2" value={newDoctor.email_m} onChange={(e) => setNewDoctor({ ...newDoctor, email_m: e.target.value })} />
                <input type="text" placeholder="Téléphone" className="form-control mb-2" value={newDoctor.phone_m} onChange={(e) => setNewDoctor({ ...newDoctor, phone_m: e.target.value })} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Annuler</button>
                <button className="btn btn-primary" onClick={handleAddDoctor}>Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GererMedecins;
