
import Banner from './Banner/Banner';
//import Doctors from './Doctor/Doctor';
//import Partners from './Partners/Partners';
import NosServices from './NosServices/NosServices';
import Presentation from './Presentation/Presentation';


function Accueil(){



    return(
        <>
         
         <Banner/>
         <div className='zero-gap'> 
         <NosServices /> 
         <Presentation/> 
         </div>

        </> 
    )
}

export default Accueil;