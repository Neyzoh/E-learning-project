// import Card from 'react-bootstrap/Card';

// import ReactPlayer from 'react-player';
// import { Link } from 'react-router-dom';
import { useState } from "react";

import './style.scss';

import Modal from './modal';
import ModalDelete from './ModaleDelete';
import ContentPage from "../ContentPage";
import ProfileImage from "./avatar";



export default function Profile({
  formData
}) {
  console.log('SETFORMDATA-PROFILE', formData);
  const [modalOpen, setModalOpen] = useState(false);
  const favoriteCourses= formData.courses;
  const admin = formData.role === 2;

  const posters = [
    {"poster": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {"poster": "https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"},
    {"poster": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {"poster": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {"poster": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},
  ]

  return (
    
    <div className='profile-container'>
      <div className='profile'>
          <section className='profile-header'>

          </section>
      </div>

      <div className='pictureTest'>
        <ProfileImage profileImage={formData.avatar} />
      </div>


      <div className='informations'>
        <h2 className='informations-title'><strong>{formData.pseudo}</strong></h2>
        <section className='informations-email'>
          <p className='list-item'>e-mail : {formData.email}</p>
        </section>
      </div> 

      {!admin && (
      <>
      <section className='profile-courses'>
        <h1 className='courses-title'><strong>Bibliothèque :</strong></h1>
        <div className='courses'>

        {favoriteCourses.map((course) => {
          return (<ContentPage  key={course.id} {...course} {...posters[course.id-1]}/>)
        })}

        </div>
      </section>
      <div className="div-btn">
        <button className='profile-edit'>Modifier son profil</button>
        <button className='profile-delete' onClick={() => setModalOpen (true) }>Supprimer son compte</button>
      </div>
        
         {modalOpen && <ModalDelete formData={formData} closeModal={setModalOpen} />}
      </>
      )}

      {admin && (
        <>
        <button className='profile-edit' onClick={() => setModalOpen(true)}>Ajouter un cours</button>
        {modalOpen && <Modal closeModal={setModalOpen} />}
       </> 
      )}
      
    </div>

  );
}