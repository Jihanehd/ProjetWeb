import React from 'react';
import './NosServices.css';
import {
  FaClinicMedical,
  FaUserNurse,
  FaAmbulance,
  FaSyringe,
  FaVials,
  FaProcedures,
  FaXRay
} from 'react-icons/fa';
  
  
const services = [
  {
    title: "Plusieurs spécialités",
    description: "Un large éventail de spécialités médicales réunies dans un même centre.",
    icon: <FaClinicMedical />
  },
  {
    title: "Soins infirmiers",
    description: "Pansements, injections, suivi à domicile ou en hôpital.",
    icon: <FaUserNurse />
  },
  {
    title: "Urgence",
    description: "Prise en charge rapide 24h/24 des cas critiques.",
    icon: <FaAmbulance />
  },
  {
    title: "Vaccin",
    description: "Centre de vaccination pour adultes et enfants contre les maladies infectieuses.",
    icon: <FaSyringe />
  },
  {
    title: "Laboratoire",
    description: "Analyses médicales précises : sang, urine, biopsies, etc.",
    icon: <FaVials />
  },
  {
    title: "Centres de soins intensifs",
    description: "Surveillance continue pour patients en état critique ou post-opératoire.",
    icon: <FaProcedures />
  },
  {
    title: "Radiologie et imagerie",
    description: "IRM, scanner, échographie et radiographies avec matériel de pointe.",
    icon: <FaXRay />
  }
];
  
  

const NosServices = () => {
  return ( 
    <section className="services-section">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosServices;
