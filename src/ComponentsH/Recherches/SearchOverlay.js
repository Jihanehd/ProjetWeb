import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import './SearchOverlay.css';

const SearchOverlay = ({ onClose }) => {
  const navigate = useNavigate();

  const [allDoctors, setAllDoctors] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  // Chargement initial des médecins
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors")
      .then(res => setAllDoctors(res.data))
      .catch(err => console.error("Erreur API :", err));
  }, []);

  const handleSearch = () => {
    const filtered = allDoctors.filter((doctor) => {
      const matchName = searchName === '' || doctor.name_m.toLowerCase().includes(searchName.toLowerCase());
      const matchSpecialty = searchSpecialty === '' || doctor.name_s === searchSpecialty;
      return matchName && matchSpecialty;
    });

    setResults(filtered);
    setSuggestions([]);
  };

  const handleRendezVous = (medecin) => {
    localStorage.setItem("medecin", JSON.stringify(medecin));
    navigate("/Rendez-Vous", { state: { medecin } });
    onClose();
  };

  return (
    <div className="navbar-search-wrapper">
      <div className="navbar-search-mode">
        <input
          type="text"
          placeholder="Recherchez un médecin..."
          value={searchName}
          onChange={(e) => {
            const value = e.target.value;
            setSearchName(value);

            if (value.length > 0) {
              const matches = allDoctors.filter((doctor) =>
                doctor.name_m.toLowerCase().includes(value.toLowerCase())
              );
              setSuggestions(matches.slice(0, 5));
            } else {
              setSuggestions([]);
            }
          }}
        />

        <select value={searchSpecialty} onChange={(e) => setSearchSpecialty(e.target.value)}>
          <option value="">Choisir une spécialité</option>
          <option>Cardiologie</option>
          <option>ORL</option>
          <option>Gynécologie</option>
          <option>Neurologie</option>
          <option>Dermatologie</option>
          <option>Pédiatrie</option>
          <option>Orthopédie</option>
          <option>Système urinaire</option>
          <option>Médecine générale</option>
          <option>Chirurgie générale</option>
          <option>Médecine interne</option>
        </select>

        <button onClick={handleSearch}>Rechercher</button>
        <FaTimes className="close-icon" onClick={onClose} />
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-box-inline">
          {suggestions.map((doctor) => (
            <div
              key={doctor.id_m}
              className="suggestion-item-inline"
              onClick={() => {
                setSearchName(doctor.name_m);
                setSuggestions([]);
              }}
            >
              {doctor.name_m}
            </div>
          ))}
        </div>
      )}

      {results.length > 0 && (
        <div className="search-results-inline">
          {results.map((doctor) => (
            <div key={doctor.id_m} className="result-card-inline">
              <img src={doctor.photo_url} alt={doctor.name_m} />
              <div>
                <h3>Dr. {doctor.name_m}</h3>
                <p>{doctor.name_s}</p>
                <button className="rendezvous-button" onClick={() => handleRendezVous(doctor)}>
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && searchName !== '' && (
        <div className="no-results">
          Aucun médecin trouvé.
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
