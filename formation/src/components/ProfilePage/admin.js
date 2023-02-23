import './style.scss'
// import { MDBCardImage } from 'mdb-react-ui-kit';
// import ppadmin from '../../assets/pdp.jpeg'
import Modal from './modal';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ProfileImage from './avatar';


export default function Admin() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='profile-container'>
      <div className='profile'>
          <section className='profile-header'>
          </section>
      </div>
      <div className='pictureTest'>
        <ProfileImage />
      </div>
      <div className='informations'>
        <h2 className='informations-title'><strong>Username</strong></h2>
        <section className='informations-email'>
          <p className='list-item'>Email : emily.n@hotmail.com</p>
        </section>
        </div> 


        <section className='profile-courses'>
            <h1 className='courses-title'><strong>Bibliothèque :</strong></h1>
            <div className='courses'>
            <Card style={{margin: '.5em' , width: '18rem' }}> 
              <ReactPlayer url='https://www.youtube.com/watch?v=ge3GT8_un6s' 
                controls
                width="100%"
                height="50%"
                className="player-video"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="description">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  
                </Card.Text>
                <Link to="/content" className='btn-catalog' variant="primary">Découvrir ce cours</Link>
              </Card.Body>
            </Card>

            <Card style={{margin: '.5em' , width: '18rem' }}>
              <ReactPlayer url='https://www.youtube.com/watch?v=ge3GT8_un6s' 
                controls
                width="100%"
                height="50%"
                className="player-video"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Link to="/content" className='btn-catalog' variant="primary">Découvrir ce cours</Link>
              </Card.Body>
            </Card>
            </div>
    </section>
    <button className='profile-edit'>
          Modifier son profil
    </button>



        {/* <div className='btn-container'> */}
          <button className='openModalBtn' onClick={() => setModalOpen(true)}>Ajouter un cours</button>
          {modalOpen && <Modal closeModal={setModalOpen} />}
        {/* </div> */}
    </div>
  );
}