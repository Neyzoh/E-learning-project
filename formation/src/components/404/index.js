
import { Link } from 'react-router-dom';
import './style.scss'

function Page404() {
    return(
       <div className='body-404'>
        <div className='body-404-paragraph'>
            <h1 className='body-404-title'>Oops, cette page n'existe pas !</h1>
            <p className='body-404-p'>Retournez à la <Link to="/">page d'accueil</Link>.</p> 
        </div>
       </div>
    )
}

export default Page404;