import React, { useState } from 'react';
import LeftNav from '../LeftNav';
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfile = () => {
    const [bio, setBio] = useState ('');
    const [updateForm, setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.userReducer);

    const handleUpdate = ()=> {
        
    }


    return (
        <div className='profile-container'>
            <LeftNav />
            <h1> Profile page of {userData.pseudo}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Profile photo</h3>
                    <img src={userData.picture} alt="user-pic" />
                    <UploadImg />
                </div>
                <div className='right-part'>
                    <div className='bio-update'>
                        <h3>Bio</h3>
                        {updateForm == false && (
                            <>
                                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}<p/>
                                <button onClick={() => setUpdateForm(!updateForm)}>Modify bio</button>
                            </>
                        )}
                        {updateForm && (
                            <>
                            <textarea
                            type="text" 
                            defaultValue={userData.bio} 
                            onChange={(e) => setBio(e.target.value)}
                            ></textarea>
                            <button onClick= {handleUpdate}>Validate modifications</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;