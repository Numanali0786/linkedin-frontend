import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar.jsx';
import Home from './pages/Home';
import MyNetwork from './pages/MyNetwork';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import PostModal from './components/Modal/PostModal';
import Login from './pages/Login';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from './context/userSlice';
import Profile from './pages/Profile';
import ProfileModal from './components/Modal/ProfileModal.jsx';

const App = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.userSlice)
  const {postModal,profileModal} = useSelector((state)=> state.stateSlice)
  console.log('in app')
  
  useEffect(()=>{
    dispatch(getUser())
    
  },[])
  return (
    <BrowserRouter>
    <Navbar/>
    {postModal && user && <PostModal/>}
    {profileModal && user && <ProfileModal/>}
    <Routes>
      <Route path='/' Component={user ? Home:Login} />
      <Route path='/mynetwork' Component={MyNetwork} />
      <Route path='/jobs' Component={Jobs} />
      <Route path='/messaging' Component={Messaging} />
      <Route path='/notifications' Component={Notifications} />
      <Route path='/profile' Component={Profile} />
    </Routes>      
    </BrowserRouter>
  )
}

export default App