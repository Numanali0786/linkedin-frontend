import React, { useEffect } from 'react';
import './Home.scss';
import { GoFileMedia } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import Posts from '../components/Posts/Posts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { postModalOn } from '../context/stateSlice.js';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Aside from '../components/aside/Aside.jsx';
import { fetchProfile } from '../context/profileSlice.js';

const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.userSlice)
  const { profile } = useSelector((state) => state.profileSlice)


  return (
    <div className="home__container">
      {/* left sidebar */}
      <Sidebar/>      
      <section className='home__mid__section'>
        <div className='home__mid__top'>
          <div className="home__mid__top__head">
            {/* <img src={profile?.[0]?.selectedFile || user.picture} alt="" />. */}
            <img src={( profile?.selectedFile) || user?.picture} alt="" />

            <input type="text" placeholder='Start a post' onClick={() => dispatch(postModalOn())} />
          </div>
          <ul className="home__mid__top__links">
            <li onClick={() => dispatch(postModalOn())}>
              <GoFileMedia />
              <span>Media</span>
            </li>
            <li>
              <FaCalendarDays />
              <span>Event</span>
            </li>
            <li>
              <GrArticle size={23}/>
              <span>Write article</span>
            </li>
          </ul>
        </div>

        <Posts />

      </section>

      {/* right sidebar */}
      <Aside/>

    </div>
  )
}

export default Home