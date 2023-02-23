import './modal.scss';
// import axios from 'axios';
import { useState } from 'react';

function Modal ({ closeModal }) {

    // j'initialise mes différents state en string vide ou à l'état null pour les input de type file et le set... me permettra de modifier les données à l'envoie
    const [label, setLabel] = useState('');
    const [course_description, setCourse_Description] = useState('');
    const [video, setVideo] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [language, setLanguage] = useState('Français')
    const [price, setPrice] = useState(1)
    const [teacher_id, setTeacherId] = useState(1)
    const [category_id, setCategory_Id] = useState(1)
    // const [category_title, setCategory_title] = useState('');

    // ici je traite l'envoie du formulaire pour envoyer les nouvelle données 
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('label', label);
        formData.append('course_description', course_description);
        formData.append('language', language);
        formData.append('price', price);
        formData.append('files', video);
        formData.append('files', pdf);
        formData.append('teacher_id', teacher_id);
        formData.append('category_id', category_id);

        fetch('http://localhost:2000/api/teachers/1/category/1', {
            body: formData,
            method: 'POST',
            
        }).then(() => {
            console.log('cours ajouté !');
        }).catch(error => {
            console.log(error);
        })
    }
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modalContainer-header">
                    <h1 className='modalContainer-header-title'>Ajouter du contenu au catalogue</h1>
                    <button className='modalContainer-header-btn-close' onClick={() => closeModal (false)}> X </button>
                </div>
                <div className="body">
                    <form className='body-form' onSubmit={handleSubmit}>
                        <div className='body-form-input'>
                            <label className='body-form-label'>Ajouter un titre:</label>
                            <input type="text" name='title' className='body-form-case-input' required value={label} onChange={event => setLabel(event.target.value)} />
                        </div>
                        <div className='body-form-input'>
                            <label className='body-form-label'>Ajouter une description:</label>
                            <input type="text" name='description' className='body-form-case-input' required value={course_description} onChange={event => setCourse_Description(event.target.value)}/>
                        </div>
                        <div className='body-form-input'>
                            <input className='body-form-case-input' type="text" disabled value={language} />
                        </div>
                        

                        {/* <div className='form-input'>
                           <select className='select'>
                            <option value="">Choisir une catégorie</option>
                            <option value={setCategory_title}>Leadership</option>
                            <option value={setCategory_title}>Management</option>
                            </select>
                        </div>  */}

                        <div className='body-fileForm'>
                            <div className='body-fileForm-div'>
                                <label for='body-fileForm-div-label'>Ajouter une vidéo</label>
                                <input id='body-fileForm-div-input' type="file" name='video' accept='video' />
                            </div>
                            <div className='body-fileForm-div'>
                                <label for='body-fileForm-div-label'>Ajouter un PDF</label>
                                <input id='body-fileForm-div-input' type="file" name='pdf' accept='pdf' />
                            </div>
                        </div>
                        <div className="body-form-footer">
                            <button type="submit" className='btn-valid'>Valider</button>
                            <button className='btn-cancel' onClick={() => closeModal (false)}>Annuler</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

// const formData = new FormData();
        // formData.append('label', label);
        // formData.append('description', course_description);
        // formData.append('video', video);
        // formData.append('pdf', pdf);

        // axios.post('http://localhost:3000/api/teachers/:teacherId/category/:categoryId', formData)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
        //     console.log(`bien été envoyé ! ${JSON.stringify(formData)}`) 
export default Modal;