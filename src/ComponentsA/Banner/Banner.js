import { Link } from "react-router-dom";
import "./Banner.css";
//import ellipse from "../../assets/images/ellipse.png";
//import doctor from "../../assets/images/banner-doctor.png";
//import Navbar from "../Navbar/Navbar";
import '../Navbar/Navbar.css';



import React from 'react';
const Banner = () => {  

   

  return (
      <div className="banner-wrapper">
         <div className="banner-row">
          <div className="banner-content">
          <h2>Toute bonne chose commence par une bonne santé</h2>    
            <p>Nous sommes là pour servir les gens avec des soins centrés sur le patient afin de fournir des soins de santé exceptionnels pour une vie meilleure.</p>
            
          </div>
          <div className="banner-buttons">
          <button className="banner-appointment-button"> <Link to="/RendezVous">Demande rendez-vous </Link> </button>
          
          </div> 
    
      
        </div>
        

       {/* <div className="banner-graphic">
                <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" />
        </div>
          */}
        </div>
    

    
   
    
  )
}

export default Banner;
