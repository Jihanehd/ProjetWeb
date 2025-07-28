import React, { useState, useEffect } from 'react';
import './Actualite1.css';
import axios from 'axios';

function Actualite1() {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/actualites")
      .then(response => {
        setActualites(response.data);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des actualités :", error);
      });
  }, []);

  return (
    <div className="actualites-page">
      <h1>Actualités</h1>
      <p className="intro">
        Restez informé(e) des dernières nouvelles de notre hôpital, de nos événements et de la médecine en général.
      </p>

      <div className="actualites-grid">
        {actualites.length > 0 ? (
          actualites.map((actualite) => (
            <div className="actualite-card" key={actualite.id}>
              {actualite.image && (
                <img
                  src={`http://127.0.0.1:8000/storage/${actualite.image}`}
                  alt={actualite.titre}
                />
              )}
              <div className="actu-content">
                <span className="actu-category">{actualite.categorie}</span>
                <h3>{actualite.titre}</h3>
                <p className="actu-date">
                  {new Date(actualite.date).toLocaleDateString()}
                </p>
                <p className="actu-text">{actualite.contenu}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune actualité trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default Actualite1;
