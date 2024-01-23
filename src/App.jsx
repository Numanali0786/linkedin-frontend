import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar.jsx';
import Home from './pages/Home';
import MyNetwork from './pages/MyNetwork';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import PostModal from './components/Modal/PostModal';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, getUser, setProfile } from './context/userSlice';
import Profile from './pages/Profile';
import ProfileModal from './components/Modal/ProfileModal.jsx';
import { fetchProfiles, selectConversation } from './context/profileSlice.js';
import EventModal from './components/Modal/EventModal.jsx';
import Events from './pages/Events.jsx';
import { connectSocket, socket } from './socket.js';
import { profileModalOff, profileModalOn } from './context/stateSlice.js';
import { addDirectConversation, fetchDirectConversations, updateDirectConversation } from './context/coversation.js';
import ProfileImageModal from './components/Modal/ProfileImageModal.jsx';
import InterviewQuest from './pages/InterviewQuest.jsx';
import MyJobs from './pages/MyJobs .jsx';
import PrefrencesModal from './components/Modal/PrefrencesModal.jsx';
import JobGuide from './pages/JobGuide.jsx';
import Connections from './pages/my-networks/Connections.jsx';
import Followers from './pages/my-networks/Followers.jsx';
import Contacts from './pages/my-networks/Contacts.jsx';
import Groups from './pages/my-networks/Groups.jsx';
import Pages from './pages/my-networks/Pages.jsx';
import Newsletters from './pages/my-networks/Newsletters.jsx';
import Analytics from './pages/Analytics.jsx';
import ProfileViews from './pages/ProfileViews.jsx';


const App = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.userSlice)
  const { postModal, profileModal, eventModal, profileImageModal,prefrencesModal } = useSelector((state) => state.stateSlice)

  // const { profiles } = useSelector((state) => state.profileSlice)
  // const profile = profiles && profiles.find((profile) => profile?.authorSub === user?.sub)
  // const {conversations} = useSelector((state)=>state.ConversationSlice.direct_chat)


  // console.log(profiles,profile)

  // this useffect runs once on initial render


  //  on logging due to dispatch app.jsx rerenders not main.jsx but user,profile,profiles persist in store due to earlier dispatch in usefect
  useEffect(() => {
    console.log('app useEffect1')
    // fetching user
    dispatch(getUser())
    // fetching all profiles on initial render
    dispatch(fetchProfiles())
  }, [])
  console.log('in app')




  // // this useffect runs twice as profiles change from null to value of user profiles
  // useEffect(()=>{
  //   console.log('app useEffect2')
  //   // setting this user profile to localStorage since it needed often
  //   dispatch(setProfile(profile))

  //   // profiles as dependency bcs profile depends on profiles and initially profiles in null fron redux as we only fetch profiles inuseEffect and useEffect runs fter initial render.
  // },[profiles])
  // // console.log(user,profile,profiles)
  // useEffect(()=>{
  //   // console.log(profile,)

  //   if(profile){
  //     if(!socket){
  //       console.log('pppppppppp')
  //       connectSocket(profile?._id)

  //     }
  //     // new friend request



  //     socket.on("new_friend_request",(data)=>{
  //       dispatch(fetchDirectConversations({ conversations: data }));

  //     })
  //     socket.on("request_accepted",(data)=>{
  //       // dispatch
  //     })
  //     socket.on("request_sent",(data)=>{
  //       // dispatch
  //       // alert('sent')
  //       console.log(data)

  //     })

  //     socket.on("start_chat",(data)=>{
  //       console.log(data)
  //       const existing_conversation= conversations.find((el)=>el.id===data._id)
  //       console.log(conversations)
  //       if(existing_conversation){
  //         dispatch(updateDirectConversation({conversation:data}))
  //       }
  //       else{
  //         // add direct chat
  //         dispatch(addDirectConversation({conversation:data}))


  //       }
  //       // unresolved
  //       dispatch(selectConversation({room_id:data._id}))

  //     })


  //   }

  //   return ()=>{
  //     socket?.off('new_friend_request')
  //     socket?.off('request_accepted')
  //     socket?.off('request_sent')
  //     socket?.off('start_chat')
  //   }
  // },[socket,profile])

  // 1===when user is not logged in
  // first time app rendered , user,profile,profiles all null as profiles is getting fetched in useEffect and useEffect runs after initial render/[option] user in not logged in
  // so when app rendered for first time aftr that useffect runs and fetch all profiles using dispatch which also trigger rerender
  // and then if only user is logged in then finding actual user profile.
  // null null null
  // null undefined  [{…}, {…}, {…}]


  // 2== when user is logged in and we refresh page then user percist in storage but profiles got null on refresh as on refresh redux store refreshes
  // Note- profile is also in localstore similar to user so if fetched using getProfile then it also persinst after refresh
  // but initially e]we have to fetch profile using user and profile so in this page its null initially as profiles is njull initially after refresh  

  return (
    <BrowserRouter>
      {user && <Navbar />}
      {postModal && user && <PostModal />}
      {eventModal && user && <EventModal />}
      {profileModal && user && <ProfileModal />}
      {profileImageModal && user && <ProfileImageModal />}
      {prefrencesModal && user && <PrefrencesModal />}
      <Routes>
        <Route path='/' Component={user ? Home : Login} />

        <Route path='/mynetwork' Component={user ? MyNetwork : Login} />
        <Route path='/analytics' Component={user ? Analytics : Login} />
        <Route path='/profileViews' Component={user ? ProfileViews : Login} />
        <Route path='mynetwork/Connections' Component={user ? Connections : Login} />
        <Route path='mynetwork/Followings' Component={user ? Followers : Login} />
        <Route path='mynetwork/Contacts' Component={user ? Contacts : Login} />
        <Route path='mynetwork/Groups' Component={user ? Groups : Login} />
        <Route path='mynetwork/Events' Component={user ? Events : Login} />
        <Route path='mynetwork/Pages' Component={user ? Pages : Login} />
        <Route path='mynetwork/Newsletters' Component={user ? Newsletters : Login} />


        <Route path='jobs' Component={user ? Jobs : Login}/>
        <Route path='jobs/Myjobs' Component={user ? MyJobs : Login}/>
        <Route path='jobs/Interviewprep' Component={user ? InterviewQuest : Login} />
        <Route path='jobs/Jobseekerguidance' Component={user ? JobGuide : Login} />
        <Route path='/messaging' Component={user ? Messaging : Login} />
        <Route path='/notifications' Component={user ? Notifications : Login} />
        <Route path='/profile' Component={user ? Profile : Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App