import React from 'react'
import './ProfileViews.scss';
import { format } from 'date-fns';
import { BoxStyle, PageStyle } from '../components/PageStyle';
import RightAid from '../components/RightAid';

import { FaLock } from "react-icons/fa6";

const ProfileViews = () => {
  

  const profileViews = [
    {
      id:1,
      title:'2 work in Recruiting industry'
    },
    {
      id:2,
      title:'3 work at Numetry Technologies'
    },
    {
      id:3,
      title:'1 works at Suvidha Foundation (Suvidha Mahila Mandal)'
    },
    {
      id:4,
      title:'1 works at SOPAN'
    },
    {
      id:5,
      title:'1 found you through Homepage'
    },
    {
      id:6,
      title:'5 have connections who may be hiring for roles that match your job function'
    },
  ]

  return (
    <PageStyle>
      <div className="profileViewsWrapper">

<div className="profileViewLeft">


        <BoxStyle>
          <p className='header'>Who's viewed your profile</p>
          <span>{format(new Date(), 'MMMM d, yyy')}</span>
        </BoxStyle>
        <BoxStyle>
          <h3>109</h3>
          <span>Profile viewers in the past 90 days</span>
        </BoxStyle>
        <BoxStyle>
          <p>Viewers you might be interested in</p>
          <ul>
            {profileViews.map((p)=>(
              <li key={p.id}>
                <div className="viewTop">
<img src="https://media.licdn.com/media/AAYQBAT4AAgAAQAAAAAAADdYDejCe9yFRdervpp6CQU5AQ.png" alt="" />
<p>{p.title}</p>
                </div>
                <FaLock size={25} className='icon__button'/>
                
              </li>
            ))}
          </ul>
        </BoxStyle>
</div>

        <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />

      </div>
    </PageStyle>
  )
}

export default ProfileViews