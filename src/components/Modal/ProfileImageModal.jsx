import React, { useState } from 'react';
import './ProfileImageModal.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { profileImageModalOff, profileModalOff } from '../../context/stateSlice';
import { IoMdClose } from "react-icons/io";
import { createProfile, updateProfile } from '../../context/profileSlice';
import { useNavigate } from 'react-router-dom'
import { setProfile } from '../../context/userSlice';



const ProfileImageModal = () => {

    const { profileImageModal } = useSelector((state) => state.stateSlice)
    const [data,setData] = useState('')
    const { profile } = useSelector((state) => state.userSlice)
    const dispatch = useDispatch()
    
    const handleSave=(e)=>{
        e.preventDefault();
        dispatch(updateProfile({ authorSub: profile?.authorSub, data}))

        dispatch(profileImageModalOff())

    }
   


    return (
        <div className='profileImageModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <h2>Edit intro</h2>
                                <img src={data?.selectedFile || profile?.selectedFile} alt="" onClick={() => nav('/profile')} />
                    <form action="">
                        <label htmlFor='pic'>
                            <div className="profileImg" id="pic">
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        // dispatch(updateProfile({ authorSub: profile?.authorSub, data: { selectedFile: base64 } }))
                                        
                                        setData({selectedFile: base64 })
                                        
                                    }
                                />
                            </div>
                        </label>
                        <button type='button' className='close icon__button' onClick={() => profile && dispatch(profileImageModalOff())}><IoMdClose size={22} /></button>
                        <button type='submit' className="post__btn" onClick={handleSave} >Save</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default ProfileImageModal