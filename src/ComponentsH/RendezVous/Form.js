import React, { useState, useEffect } from 'react';
import './Formm.css';
import axios from 'axios';

const RendezVous = () => {
  const [speciality, setSpeciality] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  // Charger tous les médecins depuis l'API Laravel
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors")
      .then(response => setDoctors(response.data))
      .catch(error => console.error("Erreur chargement médecins:", error));
  }, []);

  // Extraire spécialités uniques depuis la liste des médecins
  const specialities = [...new Set(doctors.map(doc => doc.name_s))];

  // Liste des médecins filtrés par spécialité choisie
  const filteredDoctors = doctors.filter(doc => doc.name_s === speciality);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDoctor = doctors.find(doc => doc.id_m == doctorId);

    

    const appointmentData = {
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      specialite: speciality,
      name_m: selectedDoctor.name_m,
      id_m: selectedDoctor.id_m,
      date_r: formData.date,
      statut: "En attente"
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/appointments', appointmentData);
      alert("Rendez-vous enregistré avec succès !");
      // Reset du formulaire
      setFormData({ name: '', email: '', phone: '', date: '' });
      setSpeciality('');
      setDoctorId('');
    } catch (error) {
      console.error("Erreur enregistrement rendez-vous:", error);
      alert("Erreur lors de la prise de rendez-vous.");
    }
  };

  return (
    <div className="formulaire-glass-background">
      <div className='formulaire-glass'>
        <h1>Prendre un Rendez-vous</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />

          <select value={speciality} onChange={(e) => setSpeciality(e.target.value)} required>
            <option value="">Choisir une spécialité</option>
            {specialities.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </select>

          {speciality && (
            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required>
              <option value="">Choisir un médecin</option>
              {filteredDoctors.map(doc => (
                <option key={doc.id_m} value={doc.id_m}>{doc.name_m}</option>
              ))}
            </select>
          )}

          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default RendezVous;
