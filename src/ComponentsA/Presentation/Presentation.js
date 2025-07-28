import React from 'react';
import './Presentation.css';
import { FaCheckCircle, FaHospitalUser, FaUserMd, FaStethoscope } from 'react-icons/fa';

const Presentation = () => {
  return (
    <div className="presentation-page">
      <div className="intro-section">
        <h1>À propos de notre hôpital</h1>
        <p>Un lieu de soins, d’écoute et d’innovation au service de votre santé.</p>
      </div>

      <div className="who-we-are">
        <div className="text">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Notre hôpital est un établissement de santé multidisciplinaire, engagé à offrir des soins de qualité,
            accessibles à tous. Depuis sa fondation, nous avons toujours placé le patient au cœur de notre mission,
            alliant excellence médicale, accueil humain et innovation technologique.
          </p>
        </div>
        
      </div>

      <div className="why-us">
        <h2>Pourquoi nous choisir ?</h2>
        <ul>
          <li><FaCheckCircle /> Une équipe médicale expérimentée</li>
          <li><FaStethoscope /> Un plateau technique moderne</li>
          <li><FaHospitalUser /> Un accueil humain et personnalisé</li>
          <li><FaUserMd /> Des spécialités variées sous un même toit</li>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
