import React, { useState } from 'react';
import './ProfileModal.scss';
import FileBase from 'react-file-base64';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { profileModalOff } from '../../context/stateSlice';
import { postApi } from '../../api';
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { FaRegCalendarDays } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { createPost } from '../../context/postSlice';
import { createProfile,deleteProfile,updateProfile } from '../../context/profileSlice';


const ProfileModal = () => {
    const { profile } = useSelector((state) => state.profileSlice)
    const { user } = useSelector((state) => state.userSlice)

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
            // dispatch(deleteProfile(profile.authorSub))
            // dispatch(createProfile(data))
            console.log('update')
            console.log(data)
            dispatch(updateProfile({ authorSub: profile.authorSub, data }))
        }




    };
    return (
        <div className='profileModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <form action="">
                        <input type="text" placeholder='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        <div className="profileImg">

                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setData({ ...data, selectedFile: base64 })
                                }
                            />
                        </div>

                        <input type="text" placeholder='position' value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />
                        <button className='close icon__button' onClick={() => dispatch(profileModalOff())}><IoMdClose /></button>
                        <button className="post__btn" onClick={handleSubmit} >submit</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default ProfileModal