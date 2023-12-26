import React, { useEffect } from 'react';
import './Sidebar.scss';
import { FaBookmark } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// import {  fetchProfile } from '../../context/profileSlice';
import { MdDelete } from "react-icons/md";
import { profileModalOn } from '../../context/stateSlice';
import { fetchProfiles } from '../../context/profileSlice';

const Sidebar = () => {
    const nav =  useNavigate()
    const dispatch= useDispatch()
    const { user } = useSelector((state) => state.userSlice)
    const {profiles}  = useSelector((state)=> state.profileSlice)
    const profile = profiles.find((profile)=> profile?.authorSub === user?.sub)
    console.log('in sidebar')
    useEffect(()=>{
        dispatch(fetchProfiles())
        
    },[])
   
    const editProfile = ()=>{
        dispatch(profileModalOn())
        
    }

    
    return (
        <section className='home__left__section'>
                <div className="home__prifile">
                    {/* <img className='img1' src="https://media.licdn.com/dms/image/D4D16AQGVj6QcjNUH8w/profile-displaybackgroundimage-shrink_350_1400/0/1683480035763?e=1705536000&v=beta&t=zZIHmXCo4-LPNXAFT-BsqcyFqRScQyyNrDBTt7WAlbA" alt="" /> */}
                        <img className='img2' src={profile?.selectedFile} alt="" />
                        
                    <h4 onClick={editProfile} >{profile?.name} {" "} <FiEdit size={13}/></h4>
                    {/* <p style={{'textAlign':'center'}} onClick={deleteProf} > <MdDelete size={15}/></p> */}

                    <p>{profile?.position}</p>
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