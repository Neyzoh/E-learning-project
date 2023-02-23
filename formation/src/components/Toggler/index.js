import './style.scss';

import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { accountService } from '../Services';


function Toggler() {
  let { isLogged, logout } = accountService;
  const [showLinks, setShowLinks] = useState(false);
 
  const handleShowLinks = () => {
    console.log(useState)
    setShowLinks(!showLinks)
  }

  const handleLogOut = () => {
     logout();
  }

  return (
    
      <div className={`toggler ${showLinks ? "show-content" : "hide-content"}`}>
        

        <ul className='navbarlinks'>
          <li className='navbaritem slideInDown-2'>
            <Link to="/" className="navbarlink" >
              Accueil
            </Link>
          </li>
          <li className='navbaritem slideInDown-1'>
            <Link to="/catalogue" className="navbarlink" >
              Nos formations
            </Link>
          </li>
        {!isLogged() && (
          <>
          <li className='navbaritem slideInDown-3'>
            <Link to="/connexion" className='navbarlink navbar-sign' >
              Connexion
            </Link>
          </li><li className='navbaritem slideInDown-4'>
              <Link to="/inscription" className='navbarlink navbar-sign' >
                Inscription
              </Link>
            </li>
          </>
        )}
        {isLogged() && (
          <>
          <li className='navbaritem slideInDown-2'>
            <Link to="/profile" className="navbarlink" >
              Profil
            </Link>
          </li>

          <li className='navbaritem slideInDown-4'>
            <Link to="/" className='navbarlink navbar-sign' onClick={handleLogOut}>
               Deconnexion
            </Link>
          </li>
          </>
        )}
        </ul>

        <Hamburger
          direction="right"
          size={30} duration={0.2}
          distance="lg"
          easing="ease-in"
          onToggle={handleShowLinks}
        />
      </div>
    
  );
}


export default Toggler;



