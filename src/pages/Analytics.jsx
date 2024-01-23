import React from 'react'
import './Analytics.scss';
import { format } from 'date-fns';
import { BoxStyle, PageStyle } from '../components/PageStyle';
import RightAid from '../components/RightAid';

const Analytics = () => {

  return (
    <PageStyle>
      <div className="contactsWrapper">


        <div className="contactsDiv">
          <p className='header'>Analytics & tools</p>
          <span>{format(new Date(), 'MMMM d, yyy')}</span>
        </div>


       <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />

      </div>
    </PageStyle>
  )
}

export default Analytics