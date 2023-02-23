import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { accountService } from '../Services';
import './modal.scss';


function ModalDelete ({closeModal, formData}) {
    const { logout }= accountService;
    console.log('DELETE',formData);
    const handleDelete = (e) => {
        
        axios.delete(`http://localhost:2000/api/users/deleteAccount/${formData.id}`)
        .then(function (response) {
            console.log(response.data);
            
            closeModal(false);
            
            
        })
        .catch(function (error) {
            console.log(error)
        });
        logout();
    }
    useEffect(()=>{

    },[formData])
    return(
        <div className="modalBackground">
            <div className="modalContainer-delete">
                
                <div className="modalContainer-header">
                    {/* <h1 className='modalContainer-header-title'>Vous allez supprimer votre compte.</h1> */}
                    {/* <button className='modalContainer-header-btn-close' onClick={() => closeModal (false)}>X</button> */}
                </div>
                <div className="body">
                    <p className='modalContainer-delete-para'>Attention vous êtes sur le point de supprimer votre compte.</p>
                </div>
                <div className="body-form-footer-delete">
                    <Link to='/' type="submit" className='btn-valid' onClick={handleDelete} >Confirmer</Link>
                    <button type="submit" className='btn-cancel' onClick={() => closeModal (false)} >Annuler</button>
                </div>
                  
            </div>
        </div>
    )
}
export default ModalDelete;