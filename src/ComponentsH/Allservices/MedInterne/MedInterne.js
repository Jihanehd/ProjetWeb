import React from 'react';
import  { useState } from 'react';
import axios from 'axios';
import ListMedecins from '../../Medecins/ListMedecins';
import './MedInterne.css'; // Ou tu peux utiliser le CSS commun: specialite.css

const MedecineInterne = () => {
  const [formData, setFormData] = useState({
  patient_name: "",
  patient_email: "",
  patient_phone: "",
  name_m: "",
  id_m: "",
  date_r: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const selectedDoctor = doctors.find(doc => doc.name === formData.name_m);
  if (!selectedDoctor) return alert("Médecin introuvable");

  const payload = {
    ...formData,
    id_m: selectedDoctor.id,
    specialite: "Médecine interne",
    statut: "en attente",
  };

  try {
    await axios.post("http://127.0.0.1:8000/api/appointments", payload);
    alert("Rendez-vous enregistré avec succès !");
    setFormData({
      patient_name: "",
      patient_email: "",
      patient_phone: "",
      name_m: "",
      id_m: "",
      date_r: "",
    });
  } catch (error) {
    console.error(error);
    alert("Erreur lors de l’enregistrement.");
  }
};

  const doctors = ListMedecins.filter(doc => doc.speciality === "Médecine interne");

  const services = [
    "Consultations en médecine interne",
    "Suivi des maladies chroniques",
    "Diagnostic de pathologies systémiques"
  ];

  return (
    <div className="specialite-page-Chirugie">
      <h1 className="main-title-Chirugie">Médecine interne</h1>
      <p className="description-Chirugie">
        La médecine interne traite les pathologies médicales complexes touchant plusieurs organes.
      </p>

      {/* Services */}
      <section className="services-section-Chirugie">
        <h2 className="subtitle-Chirugie">Services proposés</h2>
        <div className="card-row-Chirugie">
          {services.map((service, index) => (
            <div key={index} className="service-card-Chirugie">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Médecins */}
      <section className="doctors-list-Chirugie">
        <h2 className="subtitle">Nos internistes</h2>

        <div className="card-row-Chirugie">
          {doctors.slice(0, 4).map((doc) => (
            <div key={doc.id} className="doctor-card-Chirugie">
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
            </div>
          ))}
        </div>

        <div className="card-row-Chirugie">
          {doctors.slice(4, 8).map((doc) => (
            <div key={doc.id} className="doctor-card-Chirugie">
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Emploi du temps */}
      <section className="emploi-temps-Chirugie">
        <h2 className="subtitle">Emploi du temps</h2>
        <table>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Médecin</th>
              <th>Horaire</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id}>
                <td>Lundi - Vendredi</td>
                <td>{doc.name}</td>
                <td>09:00 - 17:00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Formulaire */}
      <section className="form-section-Chirugie">
        <div className='form-container-Chirugie'>
        <h2 className="subtitle-Chirugie">Prendre rendez-vous</h2>
        <form className="rdv-form-Chirugie" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Votre nom"
    required
    value={formData.patient_name}
    onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
  />
  <input
    type="email"
    placeholder="Votre email"
    required
    value={formData.patient_email}
    onChange={(e) => setFormData({ ...formData, patient_email: e.target.value })}
  />
  <input
    type="text"
    placeholder="Votre téléphone"
    value={formData.patient_phone}
    onChange={(e) => setFormData({ ...formData, patient_phone: e.target.value })}
  />
  <select
    required
    value={formData.name_m}
    onChange={(e) => setFormData({ ...formData, name_m: e.target.value })}
  >
    <option value="">Choisir un médecin</option>
    {doctors.map((doc) => (
      <option key={doc.id} value={doc.name}>{doc.name}</option>
    ))}
  </select>
  <input
    type="date"
    required
    value={formData.date_r}
    onChange={(e) => setFormData({ ...formData, date_r: e.target.value })}
  />
  <button type="submit">Envoyer</button>
</form>

        </div>
      </section>
    </div>
  );
};

export default MedecineInterne;
