import React, { useEffect } from 'react';
import './Sidebar.scss';
import { FaBookmark } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { profileModalOn } from '../../context/stateSlice';
import { fetchProfiles, updateProfile } from '../../context/profileSlice';
import { fetchAllEvents } from '../../context/eventSlice';
import { MdEvent } from "react-icons/md";
import FileBase from 'react-file-base64';


const Sidebar = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userSlice)
    const { profiles } = useSelector((state) => state.profileSlice)
    const { events } = useSelector((state) => state.eventSlice)
    const profile = profiles && profiles.find((profile) => profile?.authorSub === user?.sub)
    const myEvents = events.filter((event) => event?.author._id === profile?._id)
    // console.log(myEvents)
    console.log('in sidebar')
    useEffect(() => {
        dispatch(fetchProfiles())
        dispatch(fetchAllEvents())

    }, [])

    const editProfile = () => {
        dispatch(profileModalOn())

    }


    return (
        <section className='home__left__section'>
            <div className="home__prifile">
                {/* <img className='img1' src="https://media.licdn.com/dms/image/D4D16AQGVj6QcjNUH8w/profile-displaybackgroundimage-shrink_350_1400/0/1683480035763?e=1705536000&v=beta&t=zZIHmXCo4-LPNXAFT-BsqcyFqRScQyyNrDBTt7WAlbA" alt="" /> */}
                <div className="home__profile__back">
                                        
                </div>
                <img className='img2' src={profile?.selectedFile || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'} alt="" onClick={() => nav('/profile')} />
                {/* <label htmlFor='pic'>
                            <div className="profileImg" id="pic">
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                    dispatch(updateProfile({authorSub: profile?.authorSub,data:{selectedFile:base64}}))

                                        // setData({ ...data, selectedFile: base64 })
                                        // ({ ...register('selectedFile') })
                                    }
                                />
                            </div>
                        </label> */}
                <h4 onClick={editProfile} >{profile?.name} {" "} <FiEdit size={13} /></h4>
                {/* <p style={{'textAlign':'center'}} onClick={deleteProf} > <MdDelete size={15}/></p> */}

                <p className='position'>{profile?.position}</p>
                <hr />
                <Link to='profileViews'><span>Profile viewers</span></Link>

                <Link to='analytics'><span>View all anylitics</span></Link>

                <hr />

                <div className="save">
                    <FaBookmark /> My items
                </div>

            </div>
            <ul className="home__discover">
                <li>
                    <Link>Recent</Link>
                </li>
                <li>
                    <Link to='mynetwork/Groups'>Groups</Link>
                </li>
                <div className='home__events'>
                    <Link to='/mynetwork/Events'>Events</Link>
                    <ul>
                        {myEvents.map((event) => (
                            <Link key={event._id} to='/mynetwork/Events'><MdEvent size={16} />{event.name}</Link>

                        ))}
                    </ul>

                </div>
                <li><Link to='mynetwork/Newsletters'>Newsletters</Link></li>
                <br />
                <hr />

                <span>Discover more</span>
            </ul>

        </section>
    )
}

export default Sidebar