import './Home.scss';
import React, { useEffect } from 'react';
import { GoFileMedia } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import Posts from '../components/Posts/Posts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { eventModalOn, postModalOn, profileModalOff, profileModalOn } from '../context/stateSlice.js';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Aside from '../components/aside/Aside.jsx';



const Home = () => {
  const dispatch = useDispatch()
  const { profiles } = useSelector((state) => state.profileSlice)
  const { profile } = useSelector((state) => state.userSlice)

 

  useEffect(() => {
    if ( profiles!==null && !profile) {
      dispatch(profileModalOn())
    }
    else {
      dispatch(profileModalOff())
    }

  }, [profile])

  console.log('in home')





  return (
    <div className="home__container">
      {/* left sidebar */}
      <Sidebar />
      <section className='home__mid__section'>
        <div className='home__mid__top'>
          <div className="home__mid__top__head">
            {/* <img src={profile?.[0]?.selectedFile || user.picture} alt="" />. */}
            <img src={(profile?.selectedFile)} alt="" />

            <input type="text" placeholder='Start a post' onClick={() => dispatch(postModalOn())} />
          </div>
          <ul className="home__mid__top__links">
            <li onClick={() => dispatch(postModalOn())}>
              <GoFileMedia />
              <span>Media</span>
            </li>
            <li onClick={()=> dispatch(eventModalOn())}>
              <FaCalendarDays />
              <span>Event</span>
            </li>
            <li onClick={() => dispatch(postModalOn())}>
              <GrArticle size={23} />
              <span>Write article</span>
            </li>
          </ul>
        </div>

        <Posts />

      </section>

      {/* right sidebar */}
      <Aside />

    </div>
  )
}

export default Home