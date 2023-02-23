import './style.scss';

import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { accountService } from '../Services';
import PropTypes from 'prop-types';


function SignIn({
  setFormdata,
  callAPI,
  formData
 }) {
  let { isLogged }= accountService;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    // console.log(`${name} ${value}`); // afficher la value des inputs
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callAPI();

    // console.log(`Le formulaire à bien été envoyé ! ${JSON.stringify(formData)}`) 
  };

  

  return (
    
   
      <div className='sign-page-background'>
        {!isLogged() && (
          <div className='sign-page'>
          <h1 className='sign-page-title'> Connexion</h1>
          <form onSubmit={handleSubmit} className="form-sign">

            <input type="email" placeholder="Votre email" name='email' value={formData.email} onChange={handleChange} className='form-sign-input'/>
            <input type="password" placeholder="Votre mot de passe" name='password' value={formData.password} onChange={handleChange} className='form-sign-input'/>

            <a href="#Mdp" className='sign-page-redirectPassword'> Mot de passe oublié ?</a>

            <button type="submit" className='form-sign-button' > Se connecter</button>
            
          </form>
          <div className='sign-page-redirect'>
              <p>Vous n'avez pas de compte ? </p>
              <Link to="/inscription">Créer un compte </Link>
          </div>
          </div>
        )}
        {isLogged() && (
          <Navigate to="/catalogue" />
        )}
    </div>
    
  );
}


SignIn.propTypes = {
  callAPI: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    setFormdata: PropTypes.object,
  }).isRequired,
};

SignIn.defaultProps = {
  setFormdata: '',
};

export default SignIn;

