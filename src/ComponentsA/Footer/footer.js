import React from 'react';
import './footer.css';
import logo from '../../assets/images/logol.png';

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="container">
        <div className="row">
          {/* Bloc gauche */}
          <div className="col-md-3 footer-col">
            <h2 className="title-footer">Centre Medicale</h2>
            <img src={logo} alt='logo' className="footer-logo" />
          </div>

          {/* Navigation */}
          <div className="col-md-2 offset-md-1 footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="list-link">
              <li><a href="/">Home</a></li>
              <li><a href="/Medecins">Médecins</a></li>
              <li><a href="/Actualite1">Actualités</a></li>
              <li><a href="/RendezVous">Rendez-vous</a></li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-md-2 footer-col">
            <h4 className="footer-heading">Information</h4>
            <ul className="list-link">
              <li>+212693165533</li>
              <li>PulsationCentre@hopital.com</li>
              <li>Boulevard Mohammed V</li>
              <li>Oued Zem</li>
            </ul>
          </div>

          {/* Heures */}
          <div className="col-md-3 footer-col">
            <h4 className="footer-heading">Opening Hours</h4>
            <ul className="list-link">
              <li>7/7</li>
              <li>24/24</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <p className="copyright">
              &copy;2024 All rights reserved | Pulsation Medicale by <strong>JIHANE HADDOUDI</strong>
            </p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="wrap-social-media">
          <a href="A"><i className="fab fa-instagram"></i></a>
          <a href="A"><i className="fab fa-facebook"></i></a>
          <a href="A"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
