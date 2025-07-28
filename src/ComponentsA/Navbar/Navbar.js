import React, { useState } from 'react';
import "./Navbar.css"; // nouveau fichier CSS
import logo from "../../assets/images/logol.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import SearchOverlay from '../../ComponentsH/Recherches/SearchOverlay';

function Navbar() {


  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const [modeSearch, setModeSearch] = useState(false);

if (modeSearch) {
  return <SearchOverlay onClose={() => setModeSearch(false)} />;
}

  return (
    <div className="glass-navbar-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className='close-icon'  /> : <FaBars />}
      </div>

      <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Accueil</Link></li>

        <li className="dropdown">
          <div
            className="dropdown-toggle"
            
          >
            <Link to="#" onClick={(e) => e.preventDefault()}>Spécialités  </Link>
            
              <ul className="dropdown-menu"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}>
                <li><Link to="/Cardiologie" onClick={handleLinkClick}>Cardiologie</Link></li>
                <li><Link to="/ORL" onClick={handleLinkClick}>ORL</Link></li>
                <li><Link to="/Gynecologie" onClick={handleLinkClick}>Gynécologie-Obstétrique</Link></li>
                <li><Link to="/Neurologie" onClick={handleLinkClick}>Neurologie</Link></li>
                <li><Link to="/Dermatologie" onClick={handleLinkClick}>Dermatologie</Link></li>
                <li><Link to="/Pediatrie" onClick={handleLinkClick}>Pédiatrie</Link></li>
                <li><Link to="/Ortopedie" onClick={handleLinkClick}>Orthopédie</Link></li>
                <li><Link to="/SysUrinaire" onClick={handleLinkClick}>Système urinaire</Link></li>
                <li><Link to="/MedGenerale" onClick={handleLinkClick}>Médecine générale</Link></li>
                <li><Link to="/Chirugie" onClick={handleLinkClick}>Chirurgie générale</Link></li>
                <li><Link to="/MedInterne" onClick={handleLinkClick}>Médecine interne</Link></li>
              </ul>
            
          </div>
        </li>

        <li><Link to="/Medecins" onClick={handleLinkClick}>Médecins</Link></li>
        <li><Link to="/Actualite1" onClick={handleLinkClick}>Actualités</Link></li>
        <li><Link to="/RendezVous" onClick={handleLinkClick}>Rendez-vous</Link></li>
      </ul>

      <div className="side-nav-items">
        <div onClick={() => setModeSearch(true)} className="search-icon" >
          <FaSearch />
        </div>
        <Link to="/login"><IoMdLogIn /></Link>
      </div>

      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
    </div>
  );
}

export default Navbar;
