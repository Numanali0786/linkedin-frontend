import React, { useState } from 'react';
import './PrefrencesModal.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { prefrencesModalOff } from '../../context/stateSlice';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from 'react-icons/io';
// import { profileImageModalOff, profileModalOff } from '../../context/stateSlice';
// import { IoMdClose } from "react-icons/io";
// import { createProfile, updateProfile } from '../../context/profileSlice';
// import { useNavigate } from 'react-router-dom'
// import { setProfile } from '../../context/userSlice';



const PrefrencesModal = () => {

    // const { profileImageModal } = useSelector((state) => state.stateSlice)
    // const [data,setData] = useState('')
    // const { profile } = useSelector((state) => state.userSlice)
    const dispatch = useDispatch()

    // const handleSave=(e)=>{
    //     e.preventDefault();
    //     dispatch(updateProfile({ authorSub: profile?.authorSub, data}))

    //     dispatch(profileImageModalOff())

    // }



    return (
        <div className='preferencesModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <h2>Preferences</h2>
                    {/* <img src={data?.selectedFile || profile?.selectedFile} alt="" onClick={() => nav('/profile')} /> */}
                    <form action="">
                        <ul>
                            <li>
                                <div>
                                    <p>Open to work</p>
                                    <span>job preferences visible to all Linkedin members</span>
                                </div>
                                <FaArrowRightLong />
                            </li>
                            <li>
                                <div>
                                    <p>Job alerts</p>
                                    <span>react developers and others</span>
                                </div>
                                <FaArrowRightLong />
                            </li>
                            <li>
                                <div>
                                    <p>Pay</p>
                                    <span>Privately indicate desired pay</span>
                                </div>
                                <FaArrowRightLong />
                            </li>
                        </ul>
                        <button type='button' className='close icon__button' onClick={() => dispatch(prefrencesModalOff())}><IoMdClose size={22} /></button>
                        {/* <button type='submit' className="post__btn" onClick={handleSave} >Save</button> */}
                    </form>

                </div>
            </section>
        </div>
    )
}

export default PrefrencesModal