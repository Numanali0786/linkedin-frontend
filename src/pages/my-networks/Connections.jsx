import React from 'react'
import './Connections.scss';
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket';
import { PageStyle } from '../../components/PageStyle';
import RightAid from '../../components/RightAid';

const Connections = () => {
  const nav = useNavigate()
  const { user, profile } = useSelector((state) => state.userSlice)


  const { users, friends, friendRequests, sentRequests } = useSelector((state) => state.profileSlice)
  const handleChat = (id) => {
    console.log(id)
    socket.emit('start_conversation', { to: id, from: profile._id })
    nav('/messaging')

  }
  return (
    <PageStyle>
      <div className="connectionWrapper">

      <div className="connectionsDiv">
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
                <button className='icon__button'><BsThreeDots size={21} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />
         </div>

    </PageStyle>
  )
}

export default Connections