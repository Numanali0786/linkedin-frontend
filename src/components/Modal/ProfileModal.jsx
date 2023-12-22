import React, { useState } from 'react';
import './ProfileModal.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { profileModalOff } from '../../context/stateSlice';
import { IoMdClose } from "react-icons/io";
import { createProfile,deleteProfile,updateProfile,fetchProfile } from '../../context/profileSlice';
import {useNavigate} from 'react-router-dom'


const ProfileModal = () => {
    const { profile } = useSelector((state) => state.profileSlice)
    const { user } = useSelector((state) => state.userSlice)
    const nav = useNavigate()

    const [data, setData] = useState({
        name: "", selectedFile: '', position: '', authorSub: user.sub,
    });
    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault();
        if (profile === null) {
            console.log('create')
            dispatch(createProfile(data))
        }
        else {
            console.log('update')
            console.log(data)
            dispatch(updateProfile({ authorSub: profile.authorSub, data }))

        }
        dispatch(profileModalOff())
        nav('/')




    };
    return (
        <div className='profileModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <h2
                    >Edit intro</h2>
                    <br />
                    <hr /><br />
                    <p>* Indicates required</p>
                    <br />
                    <form action="">
                        <label htmlFor="name">Name*</label>
                        <br />
                        <input type="text" id='name' placeholder='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        <br />

                        <label htmlFor='pic'>Profile Pic*</label>
                        <br />
                        <div className="profileImg" id="pic">
                            <FileBase
                            
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setData({ ...data, selectedFile: base64 })
                                }
                            />
                        </div>
                        
                        <label htmlFor="position">Posiion*</label>
                        <br />
                        <input type="text" placeholder='position' value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />
                        <button className='close icon__button' onClick={() => dispatch(profileModalOff())}><IoMdClose size={22}/></button>
                        <button className="post__btn" onClick={handleSubmit} >submit</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default ProfileModal