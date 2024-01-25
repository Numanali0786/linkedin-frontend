import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchFriends, fetchFriendRequests, fetchProfiles, fetchSentRequests } from '../context/profileSlice';
import { socket } from '../socket';
import './MyNetwork.scss';
import { BsThreeDots } from "react-icons/bs";


import { HiMiniUserPlus } from "react-icons/hi2";
import { LuHash } from "react-icons/lu";
import { MdOutlineNewspaper } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { BsCalendar2Event } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

import {Link, useNavigate} from 'react-router-dom'
const manageNetwork = [
  {
    id: 1,
    icon: <FiUserPlus />,
    title: 'Connections',
    count: 200
  },
  {
    id: 2,
    icon: <MdContacts />,
    title: 'Contacts',
    count: 10
  },
  {
    id: 3,
    icon: <RiUserFollowFill />,
    title: 'Followings',
    count: 100
  },
  {
    id: 4,
    icon: <MdGroups2 />,
    title: 'Groups',
    count: 2
  },
  {
    id: 5,
    icon: <BsCalendar2Event />,
    title: 'Events',
    count: 1
  },
  {
    id: 6,
    icon: <RiPagesLine />,
    title: 'Pages',
    count: 3
  },
  {
    id: 7,
    icon: <MdOutlineNewspaper />,
    title: 'Newsletters',
    count: 1
  },
  {
    id: 8,
    icon: <LuHash />,
    title: 'Hashtags',
    count: 2
  },
]


const MyNetwork = () => {
  const dispatch = useDispatch()
  const { user, profile } = useSelector((state) => state.userSlice)
  const { users, friends, friendRequests, sentRequests } = useSelector((state) => state.profileSlice)
  const nav = useNavigate()
  console.log(users, friends, friendRequests, sentRequests)




  const handleRequestSent = (to) => {
    console.log()

    socket.emit('friend_request', { to, from: profile._id }, () => console.log('sentreq'))

    // }
  }
  const handleRequest = (request_id) => {


    // socket.emit('friend_request',{to,from:profile._id},()=> alert('req sent'))
    socket.emit('accept_request', { request_id }, () => alert('reqaccepted'))

    // }
  }
  const handleRejectRequest = (request_id) => {

    console.log(request_id)
    // socket.emit('friend_request',{to,from:profile._id},()=> alert('req sent'))
    socket.emit('reject_request', { request_id }, (d) => console.log(d))


    // }
  }
  const handleChat = (id) => {
    console.log(id)
    socket.emit('start_conversation', { to: id, from: profile._id })
    nav('/messaging')

  }
  useEffect(() => {
    console.log('hii')
    profile && dispatch(fetchUsers(profile?._id))
    profile && dispatch(fetchFriends(profile?._id))
    profile && dispatch(fetchFriendRequests(profile?._id))
    profile && dispatch(fetchSentRequests(profile?._id))
  }, [profile])

  console.log(friendRequests, sentRequests)
  return (
    <div className='my__networks'>

      <section className="left">
        <p className="header">Manage my network</p>
        <ul>
          {manageNetwork.map((item) => (
              <Link key={item.id} to={item.title}>
            <li key={item.id}>
              <span>{item.icon} {item.title}</span>
              <span>{item.count}</span>
            </li>
              </Link>
          ))}
        </ul>

      </section>


      <section className="right">
        <div className="friend__request__div">
          <p className='header'><span>Invitations</span><span>Manage</span></p>
          <div className="friend__requests">
            {friendRequests?.map((fr) => (
              <div key={fr._id} className="friend__request">
                <div className="request__left">
                  <img src={fr.sender.selectedFile} alt="" />
                  <p>
                    <span>{fr.sender.name}</span>
                    <span>{fr.sender.position}</span>
                  </p>
                </div>

                <div className="request__right">
                  <button onClick={() => handleRejectRequest(fr._id)}>Ignore</button>
                  <button onClick={() => handleRequest(fr._id)}>Accept</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="users__to__connect">

          <p className='header'>People you would like to connect</p>
          <div className="users">
            {users?.map((user) => (
              <div key={user._id} className="user">
                <div className="back__img">

                </div>
                <img src={user.selectedFile} alt="" />
                <p className='name'>{user.name}</p>
                <p className='position'>{user.position}</p>
                <br />
                <button onClick={() => handleRequestSent(user._id)}><HiMiniUserPlus size={18} /> {" "}Connect</button>
              </div>
            ))}
          </div>
        </div>


 




        {/* <h1>Friends</h1>
        <div className="friends">
          {friends?.map((f) => (
            <div key={f._id} className="">
              <p>{f.name} <button >chat now</button></p>
            </div>
          ))}
        </div> */}


        <div className="connections__div">
          <p className='header'>Connections</p>
          <div className="connections">
            {friends?.map((fr) => (
              <div key={fr._id} className="connection">
                <div className="connection__left">
                  <img src={fr.selectedFile} alt="" />
                  <p>
                    <span>{fr.name}</span>
                    <span>{fr.position}</span>
                  </p>
                </div>

                <div className="connection__right">
                  <button onClick={() => handleChat(fr._id)}>Message</button>
                  <button className='icon__button'><BsThreeDots size={21}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <h1>sent req</h1>
        <div className="users">
          {sentRequests?.map((user) => (
            <div key={user._id} className="">
              <p>{user.recipient?.name} </p>
            </div>
          ))}
        </div> */}

    </div>
  )
}

export default MyNetwork