import React from 'react'
import './ProfileViews.scss';
import { format } from 'date-fns';
import { BoxStyle, PageStyle } from '../components/PageStyle';
import RightAid from '../components/RightAid';

const ProfileViews = () => {

  return (
    <PageStyle>
      <div className="contactsWrapper">


        <div className="contactsDiv">
          <p className='header'>Who's viewed your profile</p>
          <span>{format(new Date(), 'MMMM d, yyy')}</span>
        </div>

        <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />

      </div>
    </PageStyle>
  )
}

export default ProfileViews