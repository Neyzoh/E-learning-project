import './style.scss'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className='home'>
        <section className='home-container'>
          <div className='home-top'>
            <div className='frosted'>
              <h1 className='home-title'>Votre apprentissage commence ici</h1>
              <p className='home-low-title'>
              <br/>Prenez votre carrière en main.<br/>
              <br/> Les compétences en management et en leadership sont cruciales pour réussir dans la plupart des carrières, quel que soit le domaine d'activité.
              {/* Nos cours sont conçus par des experts dans leur domaine, avec des années d'expérience pratique et pédagogique.  */}
              </p>
              </div>
            <div className='home-btn'>
            <Link to="/catalogue" className='btn-home'>Accéder à nos formations</Link>
            </div>
          </div>
        </section>
    </div>

  );
}

export default Home;
