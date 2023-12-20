import React, { useEffect } from 'react';
import './Sidebar.scss';
import { FaBookmark } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile,deleteProfile } from '../../context/profileSlice';

const Sidebar = () => {
    const nav =  useNavigate()
    const dispatch= useDispatch()
    const {profile}  = useSelector((state)=> state.profileSlice)
    console.log(profile)
    const editProfile = ()=>{
        nav('profile')
        
    }
    const deleteProf = ()=>{
        dispatch(deleteProfile(profile[0]._id))
        
    }
    
    
    useEffect(()=>{
        dispatch(fetchProfile())
        
    },[])
    return (
        <section className='home__left__section'>
                <div className="home__prifile">
                    {/* <img className='img1' src="https://media.licdn.com/dms/image/D4D16AQGVj6QcjNUH8w/profile-displaybackgroundimage-shrink_350_1400/0/1683480035763?e=1705536000&v=beta&t=zZIHmXCo4-LPNXAFT-BsqcyFqRScQyyNrDBTt7WAlbA" alt="" /> */}
                        <img className='img2' src={profile?.[0]?.selectedFile} alt="" />
                        
                    <h4 onClick={editProfile} >{profile?.[0]?.name} {" "} <FiEdit/></h4>
                    <h4 onClick={deleteProf} > delete</h4>

                    <p>MERN Stack Developer || React/Redux ||
                        JavaScript ||<br /> Node/Express || Nextjs ||
                        <br /> Working as Software Developer <br />Trainee at Numetry Technology.</p>
                    <hr />
                    <span>Profile viewers</span>
                    <span>View all anylitics</span>

                    <hr />

                    <div className="save">
                        <FaBookmark /> My items
                    </div>

                </div>
                <ul className="home__discover">
                    <li>Recent</li>
                    <li>Groups</li>
                    <li>Events</li>
                    <li>Followed Hashtags</li>
                    <br />
                    <hr />
                    
                    <span>Discover more</span>
                </ul>
        </section>
    )
}

export default Sidebar