import Toggler from '../Toggler';
import { Link } from 'react-router-dom';
import './style.scss';


function Header() {
  return (
    <section className='header'>
   
      <Link Link to='/' className='header-logo'>

      </Link>
 

     <Toggler/>

    </section>
  );
}

export default Header;
