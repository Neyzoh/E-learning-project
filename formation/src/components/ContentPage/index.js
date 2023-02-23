import { Link } from 'react-router-dom';

import './style.scss';

function ContentPage (course){
    let  previewTimeout = null;

    const startPreview = (event) => {
        event.target.src = course.video;
        event.target.muted = true;
        event.target.currentTime = 12;
        event.target.playbackRate = 0.5;
        event.target.play();
        previewTimeout = setTimeout(stopPreview, 4000);
    };

    const stopPreview = (event) => {
        clearTimeout(previewTimeout);
        previewTimeout = null;
        event.target.currentTime = 0;
        event.target.playbackRate = 1;
        event.target.pause();
        event.target.src = "";
        event.target.removeAttribute("src");
    };

    return(
        <Link to={`/catalogue/${course.id}/${course.label}`} className="col-12 col-md-5 mx-md-3 col-lg-3 col-xxl-2">
        <div className='course'>
            <video className="w-100 h-100"
            onMouseOver={startPreview}
            onMouseLeave={stopPreview}
            poster={course.poster}>
            </video>
            <h4 className="mt-2 mb-0">{course.label}</h4>
            <div className="author-and-price d-flex justify-content-between align-items-center">
                <p className="text-secondary mb-0">{course.author}</p>
                {/* <span>{course.price}€</span> */}
            </div>
        </div>
        </Link>
    );
};

export default ContentPage;
