import React, { useEffect } from 'react';
import './Sidebar.scss';
import { FaBookmark } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, fetchProfile } from '../../context/profileSlice';
import { MdDelete } from "react-icons/md";

const Sidebar = () => {
    const nav =  useNavigate()
    const dispatch= useDispatch()
    const { user } = useSelector((state) => state.userSlice)
    const {profile}  = useSelector((state)=> state.profileSlice)
    console.log(profile)
    useEffect(()=>{
        dispatch(fetchProfile(user.sub))
        
    },[])
    // console.log(profile?.position)
    const editProfile = ()=>{
        nav('profile')
        
    }
    const deleteProf = ()=>{

        if(!profile.length==0){
        dispatch(deleteProfile(profile[0]._id))
        }
        
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