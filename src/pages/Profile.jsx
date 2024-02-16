import React, { useState } from 'react';
import './Profile.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, updateProfile } from '../context/profileSlice';
import { profileImageModalOn, profileModalOn } from '../context/stateSlice';

import { MdOutlineEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { PageStyle, BoxStyle } from '../components/PageStyle';
import RightAid from '../components/RightAid';

const Profile = () => {
    const profile= JSON.parse(localStorage.getItem('profile'))
    const { user } = useSelector((state) => state.userSlice)
    const { profileImageModal } = useSelector((state) => state.stateSlice)

    // console.log((profile?.education.from).split(' '))
    // console.log((profile?.education.to).split(' '))
    console.log(profile)


    
    const dispatch = useDispatch()
    const editProfile = () => {
        dispatch(profileModalOn())

    }

    const from = (profile?.job.from).split(' ')[1] + " " + (profile?.job.from).split(' ')[3]
    let to = (profile?.job.to).split(' ')[1] + " " + (profile?.job.to).split(' ')[3]
    to = from == to ? "present" : to


    return (
        <PageStyle>
            <div className='user__profile__div'>
                <BoxStyle>
                    <div className="profile__left">

                        <div className="poster">
                            <div className="camera">

                                <FaCamera />
                            </div>
                        </div>
                        <div className="profile__img">
                            <img src={profile?.selectedFile} alt="" onClick={() => dispatch(profileImageModalOn())} />
                        </div>
                        <button className='edit__btn' onClick={editProfile} > <LuPencil /></button>
                        <div className="content">
                            <div className="left">
                                <p className='name'>{profile?.name}</p>
                                <p className='position'>{profile?.position}</p>
                                <p className="location">{profile?.city}, {profile?.country}</p>
                                <p className='connections'>200 connections</p>
                                <div className="btns">
                                    <button>Open to</button>
                                    <button>Add profile section</button>
                                    <button>More</button>
                                </div>
                            </div>

                            <div className="right">
                                <p>{profile?.job.company}
                                    <br />
                                    {profile?.job.location}
                                </p>
                                <br />
                                <br /> <p>{profile?.education.university}
                                    <br />
                                    {profile?.education.location}
                                </p>
                            </div>
                        </div>

                    </div>
                </BoxStyle>

                
                    <div className="profile__right">
            <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />

                    </div>
                
                <div className="profile__sections">
                    <BoxStyle>
                        <div className="">
                            <h5>About</h5>
                            <p>{profile?.headline}</p>
                        </div>
                    </BoxStyle>
                    <BoxStyle>
                        <div className="">
                            <h5>Expirence</h5>
                            <p>{profile?.job.company}</p>
                            <p>{profile?.job.role}</p>
                            <p>{profile?.job.from + " to " + profile?.job.to}</p>
                            <p>{profile?.job.location}</p>
                        </div>
                    </BoxStyle>
                    <BoxStyle>
                        <div className="">
                            <h5>Education</h5>
                            <p>{profile?.education.university}</p>
                            <p>{profile?.education.stream}</p>
                            <p>{profile?.education.from + " to " + profile?.education.to}</p>
                            <p>{profile?.education.location}</p>
                        </div>
                    </BoxStyle>


                </div>
            </div>

        </PageStyle>
    )
}

export default Profile