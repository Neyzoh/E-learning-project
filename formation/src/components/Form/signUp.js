import './style.scss';
import React, { useState, useRef } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function SignUp() {
  // Declare a state for the form fields 
  // Je declare l'état du formulaire initial à l'aide de string vide pour pouvoir permettre de le changer à l'aide de ma function handleChange 
  const [formData, setFormdata] = useState({
    pseudo: '',
    email: '',
    password: '',
  });
// Function to update the status when a user enters data

// Ici je crée une fonction qui me permettra d'avoir un changement lorsque je rentrerais une nouvelle valeur dans les input, je target l'input 
// et à l'aide de setFormData je permet de mettre a jour l'état du formulaire en ajoutant ou en modifiant la valeur du champ
//le ...formData permet de crée un nouvel objet qui contient toutes les propriétés de l'objet formData
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    //console.log(`${name} ${value}`); // afficher la value des inputs
  };
 
  const ref = useRef(null);

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    if (ref.current.checked) {
      setIsChecked(true)
      console.log('✅ Checkbox is checked');
    } else {
      setIsChecked(false)
      console.log('⛔️ Checkbox is NOT checked');
    }
  };

  // Function to send the form data to the database
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked){
    axios({
      method: 'POST',
      url: 'http://localhost:2000/api/users/signup',
      data: {
        pseudo: formData.pseudo,
        email: formData.email,
        password: formData.password 
      }
    })
      .then( response => {
        console.log(response)
        if(response.status===200){
          alert("Votre compte a bien été créé ! Allez vite vous connecter ! :D")
        }
      }).catch(err => {
        console.log(err)
      })
    }
    else {
      alert("Veuillez accepter les conditions d'utilisation")
    }
    // console.log(`Le formulaire à bien été envoyé ! ${JSON.stringify(formData)}`) 
    // le JSON.stringify est une méthode pour convertir du js en valeur json
  };
  return (
    <div className='sign-page-background'>
      <div className='sign-page'>
        <h1 className='sign-page-title'> Inscription</h1>
        <form onSubmit={handleSubmit} className="form-sign">
          <input type="text" placeholder="Votre pseudo" name='pseudo' value={formData.pseudo} onChange={handleChange} className='form-sign-input'/>
          <input type="email" placeholder="Votre email" name='email' value={formData.email} onChange={handleChange} className='form-sign-input'/>
          <input type="password" placeholder="Votre mot de passe" name='password' value={formData.password} onChange={handleChange} className='form-sign-input'/>
          {/* <input type="text" placeholder="Confirmer votre mot de passe" className='form-sign-input'/> */}
          <label htmlFor='agreed' className='form-sign-label'>
          <input ref={ref} onClick={handleClick} type="checkbox" id='agreed' name='agreed' className='form-sign-checkbox'/>
            <span>J'accepte les conditions d'utilisations</span>
          </label>
          <button type="submit" className='form-sign-button'> S'inscrire</button>
        </form>
        <div className='sign-page-redirect'>
        <p>Vous avez déjà un compte ? </p>
        <Link to="/connexion"> Se connecter </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;