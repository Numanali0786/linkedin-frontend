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
import { logout } from '../../context/userSlice';

const tabs = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: <IoHomeSharp />,
    notif:0
  },
  {
    id: 2,
    title: 'My Network',
    link: '/mynetwork',
    icon: <FaNetworkWired />,
    notif:3
  },
  {
    id: 3,
    title: 'Jobs',
    link: '/jobs',
    icon: <MdWork />,
    notif:0
  },
  {
    id: 4,
    title: 'Messaging',
    link: '/messaging',
    icon: <AiFillMessage />,
    notif:0
  },
  {
    id: 5,
    title: 'Notifications',
    link: '/notifications',
    icon: <IoMdNotifications size={25} />,
    notif:10
  },
]


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [selectedTab, setselectedTab] = useState(1)
  const [suggest,setSuggest] = useState([])
  const [query,setQuery] = useState('')
  const {user} = useSelector((state)=>state.userSlice)

  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }

  useEffect(()=>{
    const fetchUsers=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    const filteredUsers = users.filter((user)=>(
     query && user.name.toLowerCase().toString().includes(query.toLowerCase())
    )
    )
    setSuggest(filteredUsers)
    }
    fetchUsers()
  },[query])


  return (
    <nav className='nav__container'>
      <div className="nav__center">
        <Link to='/' className="nav__logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYkQ84aYDqpNA-fIv74FP3Nb7d0tGDQxC9Q&usqp=CAU" alt="" />
        </Link>

        <div className={`${showSearch ? "search show__large__search" : "search"}`}>
          <IoSearch size={25} />
          <input type="text" placeholder='Search' onChange={(e)=> setQuery(e.target.value)}/>
          <div className="suggest__cont">
            {suggest.map((sug)=>(
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
              <Link key={tab.id} to={tab.link} onClick={()=>setselectedTab(tab.id)} className={`${selectedTab===tab.id ? "selected__tab" : ""}`}>

                <div className="icon__div">
                {tab.icon}
                {tab.notif!==0 && <p>{tab.notif}</p>}
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
            <button  onClick={handleLogout}>logout</button>
          </li>}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar