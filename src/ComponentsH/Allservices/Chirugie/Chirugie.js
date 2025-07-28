import React from 'react';
import  { useState } from 'react';
import axios from 'axios';
import ListMedecins from '../../Medecins/ListMedecins';
import './AllSpecialites.css';

const ChirurgieGenerale = () => {
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
    specialite: "Chirurgie générale",
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


  const doctors = ListMedecins.filter(doc => doc.speciality === "Chirurgie générale");

  const services = [
    "Chirurgie digestive",
    "Chirurgie endocrinienne",
    "Chirurgie des hernies",
    "Chirurgie bariatrique",
    "Chirurgie d'urgence",
    "Chirurgie mammaire"
  ];

  return (
    <div className="specialite-page-Chirugie">
      {/* Titre */}
      <h1 className="main-title-Chirugie">Chirurgie Générale</h1>
      <p className="description-Chirugie">
        La chirurgie générale couvre un large éventail d'interventions chirurgicales sur de nombreux organes.
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
        <h2 className="subtitle">Nos chirurgiens</h2>

        <div className="card-row-Chirugie">
          {doctors.slice(0, 4).map((doc) => (
            <div key={doc.id} className="doctor-card">
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
            </div>
          ))}
        </div>

        <div className="card-row-Chirugie">
          {doctors.slice(4, 8).map((doc) => (
            <div key={doc.id} className="doctor-card">
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
                <td>Mardi - Jeudi</td>
                <td>{doc.name}</td>
                <td>08:00 - 14:00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Formulaire à la fin */}
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

export default ChirurgieGenerale;
