import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios'

import './style.scss'

function OneContent({ formData }) {
  //console.log('FORM DATA CONTENT', formData)
  const {courseId} = useParams();
  const[datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2000/api/courses/${courseId}`)
    .then(response => {

      const data = response.data.result;
      
      setDatas(data);
      console.log('SETDATA',setDatas);
    })
    .catch(error => {
      console.log(error);
    })
  }, [courseId]);


  const handleDownloadClick = async () => {
    try {
      // let url = new Blob([datas.PDF], {type: 'application/pdf'})
      const link = document.createElement('a')
      link.target = "_blank"
      link.href = datas.PDF
      link.setAttribute('download', `${datas.label}.pdf`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      console.log(error);
    }
  }

  const handleFav = () => {

    axios.get(`http://localhost:2000/api/users/${formData.id}/add-favorite/${courseId}`)
    .then(response => {
      console.log('RETOUR ADD',response.data);
    })
    .catch(error => {
      console.log(error);
    })
  };
  
  return (
    <div className='container-fluid px-0 mb-5'>
      <div className='row m-0'>
        {/* Header */}
        <div className='background-layer w-100 bg-dark bg-gradient d-none d-xl-block'></div>
          <div className='interface-video d-flex flex-column flex-xxl-row align-items-xl-center col-12 mt-5'>
            {/* Section */}
            <video className='col-12 col-xl-10 col-xxl-7 mb-3'
            controls
            src={datas.video}>
            </video>
            <div className='video-content text-center text-xl-start col-12 col-xl-10 col-xxl-5 mt-auto px-3'>
              <h3>Thème : {datas.label}</h3>
              <p>Descriptions : {datas.course_description}</p>
              {/* Additional content (Hard coding) */}
              <p className='mt-4 mb-0'>Comment tirer le meilleur parti du cours :</p>
              <ul className='py-2 ps-0 ps-xxl-3'>
                <li>Ne pas hésitez à regarder plusieurs fois la vidéo explicative.</li>
                <li>Mettez en pratique les concepts et idées reçu dans cette vidéo.</li>
                <li>Poser vos questions, mais sachez que vous apprendrez encore plus si vous ne vous contentez pas de demander, mais si vous répondez.</li>
              </ul>
              <div className='d-flex justify-content-center justify-content-xl-start justify-content-xxl-end'>
                <button className='btn btn-warning text-white me-3' onClick={handleFav}>
                    Ajoutez au favoris
                </button>
                <button className='btn btn-primary' onClick={handleDownloadClick} >
                  Afficher le cours PDF
                </button>
                {/* <button className='btn btn-primary' disabled>
                    Achetez ce cours
                </button> */}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default OneContent;
