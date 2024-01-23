import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { IoHomeSharp } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setProfile } from '../../context/userSlice';
import { connectSocket, socket } from '../../socket';
import { addDirectConversation, addDirectMessage, fetchDirectConversations, updateDirectConversation } from '../../context/coversation';
import { fetchFriendRequests, fetchFriends, fetchSentRequests, selectConversation } from '../../context/profileSlice';

console.log('in nav')



const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [selectedTab, setselectedTab] = useState(1)
  const [suggest, setSuggest] = useState([])
  const [query, setQuery] = useState('')
  const { user } = useSelector((state) => state.userSlice)


  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }


  



  const { profiles,friendRequests } = useSelector((state) => state.profileSlice)
  const profile = profiles && profiles.find((profile) => profile?.authorSub === user?.sub)
  const { conversations } = useSelector((state) => state.ConversationSlice.direct_chat)
// console.log(profiles.profile)
  

const tabs = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: <IoHomeSharp />,
    notif: 0
  },
  {
    id: 2,
    title: 'My Network',
    link: '/mynetwork',
    icon: <FaNetworkWired />,
    notif: friendRequests?.length
  },
  {
    id: 3,
    title: 'Jobs',
    link: '/jobs',
    icon: <MdWork />,
    notif: 0
  },
  {
    id: 4,
    title: 'Messaging',
    link: '/messaging',
    icon: <AiFillMessage />,
    notif: 0
  },
  {
    id: 5,
    title: 'Notifications',
    link: '/notifications',
    icon: <IoMdNotifications size={25} />,
    notif: 10
  },
]

  // *******************************************
  // *******************************************
  // *******************************************
  // *******************************************
  // this useffect runs twice as profiles change from null to value of user profiles
  useEffect(() => {
    // console.log('app useEffect2',socket)
    // socket?.emit('get_direct_conversations', { user_id: profile?._id }, (data) => {
    //   // data=> list of conversations
    //   console.log(data)

    //   dispatch(fetchDirectConversations({ conversations: data }));


    // //   // -===============
    // })
    // setting this user profile to localStorage since it needed often
    console.log('pppppp',profile)
    dispatch(setProfile(profile))
    // profiles as dependency bcs profile depends on profiles and initially profiles in null fron redux as we only fetch profiles inuseEffect and useEffect runs fter initial render.
  }, [profiles])
  // console.log(user,profile,profiles)




  useEffect(() => {
    // console.log(profile)

    if (profile) {
      if (!socket?.connected) {
        console.log('connecting socket')
        connectSocket(profile._id)
        // console.log("socket off",socket,profile?._id)
      }
      else {
        // console.log("socket on", socket)
      }
      // new friend request



      socket.on("new_friend_request", (data) => {
        console.log(data)
        dispatch(fetchFriendRequests(profile._id))
        dispatch(fetchSentRequests(profile._id))
        // dispatch(fetchDirectConversations({ conversations: data }));

      })
      socket.on("request_accepted", (data) => {
        // dispatch
        // console.log(data)
        dispatch(fetchFriendRequests(profile._id))
        dispatch(fetchSentRequests(profile._id))
        dispatch(fetchFriends(profile._id))
      })
      socket.on("request_rejected", (data) => {
        // dispatch
        // console.log(data)
        dispatch(fetchFriendRequests(profile._id))
        dispatch(fetchSentRequests(profile._id))
      })
      socket.on("request_sent", (data) => {
        // dispatch
        // alert('sent')
        console.log('sent')
        dispatch(fetchFriendRequests(profile._id))
        dispatch(fetchSentRequests(profile._id))

      })

      

      socket.on("start_chat", (data) => {
        // console.log(data)
        const existing_conversation = conversations.find((el) => el.id === data._id)
        // console.log(conversations)
        if (existing_conversation) {
          dispatch(updateDirectConversation({ conversation: data }))
        }
        else {
          // add direct chat
          dispatch(addDirectConversation({ conversation: data }))


        }
        // unresolved
        dispatch(selectConversation({ room_id: data._id }))

      })


      // socket?.emit('get_direct_conversations', { user_id:profile?._id }, (data) => {
      //   // data=> list of conversations
      //   console.log(data)
  
      //   dispatch(fetchDirectConversations({ conversations: data }));
  
  
      //   // -===============
      // })


     


    }

    return () => {
      socket?.off('new_friend_request')
      socket?.off('request_accepted')
      socket?.off('request_sent')
      socket?.off('start_chat')
    }
  }, [socket, profile,profiles])

  // *******************************************
  // *******************************************
  // *******************************************
  // *******************************************
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      const filteredUsers = users.filter((user) => (
        query && user.name.toLowerCase().toString().includes(query.toLowerCase())
      )
      )
      setSuggest(filteredUsers)
    }
    fetchUsers()
  }, [query])


  useEffect(()=>{
    profile && dispatch(fetchFriendRequests(profile?._id))
    profile && dispatch(fetchSentRequests(profile?._id))
    profile && dispatch(fetchFriends(profile?._id))
    profile &&  socket?.emit('get_direct_conversations', { user_id: profile?._id }, (data) => {
      console.log(data)
  
      dispatch(fetchDirectConversations({ conversations: data }));
  
  
    //   // -===============
    })
  },[profile])

  // useEffect(()=>{
  // },[])


  return (
    <nav className='nav__container'>
      <div className="nav__center">
        <Link to='/' onClick={() => setselectedTab(1)} className={`${selectedTab == 1 ? "selected__tab nav__logo" : "nav__logo"}`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYkQ84aYDqpNA-fIv74FP3Nb7d0tGDQxC9Q&usqp=CAU" alt="" />
        </Link>

        <div className={`${showSearch ? "search show__large__search" : "search"}`}>
          <IoSearch size={25} />
          <input type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
          <div className="suggest__cont">
            {suggest.map((sug) => (
              <div key={sug.id} className="suggest">
                {sug.name}
              </div>
            ))}
          </div>
          <button className='close__btn' onClick={() => setShowSearch(false)}><IoMdClose size={20} /></button>
        </div>

        <div onClick={() => setShowSearch(!showSearch)} className={`${showSearch ? "search__small hide__small__search" : "search__small"}`}>
          <IoSearch />
          <span>Search</span>
        </div>
        <ul className={`${showSearch ? "nav__links hide__nav__links" : "nav__links"}`}>
          {
            tabs.map((tab) => (
              <Link key={tab.id} to={tab.link} onClick={() => setselectedTab(tab.id)} className={`${selectedTab === tab.id ? "selected__tab" : ""}`}>

                <div className="icon__div">
                  {tab.icon}
                  {tab.notif !== 0 && <p>{tab.notif}</p>}
                </div>
                <span>{tab.title}</span>
              </Link>
            ))
          }

          <li className='img__li'>
            <img src={user?.picture} alt="" />
            <span>Me</span>
          </li>
          <li className='dots'>
            <TbGridDots />
            <HiDotsHorizontal />
            <span>For Business</span>
          </li>
          {user && <li className='logout'>
            <button onClick={handleLogout}>logout</button>
          </li>}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar