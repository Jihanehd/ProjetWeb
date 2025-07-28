import './App.css'; 

import {  Route,  Routes } from 'react-router-dom';

import Accueil from './ComponentsA/Accueil';
import LoginSignup from './ComponentsH/Seconnecter/LoginSignup';
import Cardiologie from './ComponentsH/Allservices/Cardiologie/Cardiologie';
import Dermatologie  from './ComponentsH/Allservices/Dermatologie/Dermatologie';
import Neurologie from './ComponentsH/Allservices/Neurologie/Neurologie';
import MedecineGenerale from './ComponentsH/Allservices/MedGenerale/MedGenerale';
import MedecineInterne from './ComponentsH/Allservices/MedInterne/MedInterne';
import ORL from './ComponentsH/Allservices/ORL/ORL';
import Orthopedie from './ComponentsH/Allservices/Ortopedie/Ortopedie';
import ChirurgieGenerale from './ComponentsH/Allservices/Chirugie/Chirugie';
import SystemeUrinaire from './ComponentsH/Allservices/SysUrinaire/SysUrinaire';
import Pediatrie from './ComponentsH/Allservices/Pediatrie/Pediatrie';
import Gynecologie from './ComponentsH/Allservices/Gynecologie/Gynecologie';
import Medecins from './ComponentsH/Medecins/Medecins';
import FormMedecin from './ComponentsH/Medecins/FormMedecin';
import Actualite1 from './ComponentsH/Actualite/Actualite1';
import Form from './ComponentsH/RendezVous/Form'; 
//admin
import AdminLayout from './Admin/AdminLayout';
import Dashboard from './Admin/Pages/DashboardAdmin';
import GererActualites from './Admin/Pages/GererActualites';
//doctor
import DoctorLayout from './Doctor/DoctorLayout';
import DashboardDoctor from './Doctor/pages/DashboardDoctor';
import Appointments from './Doctor/pages/Appointments';
import Notes from './Doctor/pages/Notes';
import GererMedecins from './Admin/Pages/GererMedecins';
import ClientLayout from './ClientLayout';
import ConditionsUtilisation from './ComponentsA/Footer/ConditionsUtilisation';
import PrivateRoute from './PrivateRoute';



function App() {
  return (
    <>
    
       
      <Routes>
        
        <Route path='/' element={<ClientLayout/>} >
        <Route path="/"      element={<Accueil    />} />
        
        <Route path='/Cardiologie' element={<Cardiologie/>}/>
        <Route path='/Dermatologie' element={<Dermatologie/>} />
        <Route path='/Gynecologie'  element={<Gynecologie/>}/> 
        <Route path='/Neurologie' element={<Neurologie/>}/>
        <Route path='/ORL' element={<ORL/>}/>
        <Route path='/Ortopedie' element={<Orthopedie/>}/>
        <Route path='/SysUrinaire' element={<SystemeUrinaire/>}/>
        <Route path='/MedGenerale' element={<MedecineGenerale/>}/>
        <Route path='/MedInterne' element={<MedecineInterne/>}/>
        <Route path='/Chirugie' element={<ChirurgieGenerale/>}/>
        <Route path='/conditions-utilisation' element={< ConditionsUtilisation />} /> 
        <Route path='/Pediatrie' element={<Pediatrie/>}/>
       
 
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/Medecins" element={<Medecins/>} /> 
        <Route path='/Actualite1' element={<Actualite1/>} />
        <Route path="/rendez-vous" element={<FormMedecin />} />
        <Route path='/RendezVous' element={<Form/>} />

        </Route>

            {/* Partie Admin */}
        <Route path="/admin" element={ <PrivateRoute role="admin" > <AdminLayout/> </PrivateRoute> } >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='doctors' element={<GererMedecins/>} /> 
          <Route path='actualites' element={<GererActualites/>} /> 
          
        </Route>

            {/* Partie Doctor */}
        <Route path="/doctor" element={ <PrivateRoute role="medecin" > <DoctorLayout/> </PrivateRoute> }>
          <Route path="dashboard" element={<DashboardDoctor />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="notes" element={<Notes />} />
        </Route>

        



      </Routes>    
      
    </>
    
  );
}

export default App;
