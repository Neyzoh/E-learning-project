import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import Avatar from 'react-avatar-edit'
import { useState } from "react";
import { Button } from 'primereact/button';
import './edit.scss'
import axios from 'axios';

function ProfileImage({profileImage}) {
    const [avatar, setAvatar] = useState("");
    const [avatarcrop, setAvatarCrop] = useState("");
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [pview, setPview] = useState(false);

    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setPview(null);
    };

    const onCrop = (view) => {
        setPview(view);
    };

    const saveCropImage = () => {
     const formData = new FormData();
     formData.append('avatar', avatar);
     axios.put('http://localhost/api/users/update-avatar/:userId', formData)
     .then((response) => {
         console.log('ici',response);

     }).catch((error) => {
         console.log(error);
     })
        setProfile([...profile, {pview}]);
        setAvatarCrop(false);
    }

    
    return(
        <div className='profile_img text-center p-4'>
        <div className='flex flex-column justify-content-center align-items-center'>

            <img
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid blue"
            }}
            onClick={() => setAvatarCrop(true)}
            src={profileImage.length ?profileImage : avatar} alt=""/>

             <Dialog
             visible={avatarcrop}
                header={() => {
                    <p htmlFor="" className="text-2x1 font-semibold textcolor">
                        Modifier son Avatar
                    </p>
                }}
                onHide={() => setAvatarCrop(false)}
             >
                 <div className='container-edit'>
                    <Avatar
                    width={500}
                    height={500}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}
                    shadingColor={"#474649"}
                    backgroundColor={"#474649"}

                    />

                    <div className='container-edit-btn'>
                        <div className='edit-btn'>
                            <Button 
                            onClick={saveCropImage}
                            label="Save"
                            icon="pi pi-check"
                            />
                        </div>
                    </div>
                 </div>

             </Dialog>

            <InputText type="file" 
            accept='/image/*'
            style={{
                display: "none"
            }}
            onChange={(event) => {
            const file = event.target.files[0];
            if(file && file.type.substring(0.5)==="image"){
                setAvatar(file);
            }else {
                setAvatar(null)
            }
            }}
            />

        </div>
        </div>
      
    )
}

export default ProfileImage;