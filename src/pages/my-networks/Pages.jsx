import React, { useState } from 'react';
import './Pages.scss';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
// import extra from './extra.gif'
import { FaBookmark } from "react-icons/fa";
import RightAid from '../../components/RightAid';





const pages = [
  {
    id: 1,
    img: 'https://media.licdn.com/dms/image/D560BAQH5YHtpxAHvDA/company-logo_100_100/0/1694512590827/numetry_technologies_logo?e=1714003200&v=beta&t=6a6flqfc3Xnn5NISdbYKFOmfiqc2Cg0v3HHQXpjGu18',
    title: "Numetry Technologies",
    members: "2,520",

  },

  {
    id: 2,
    img: 'https://media.licdn.com/dms/image/C5107AQHqe3L-6LMsUg/group-logo_image-shrink_72x72/0/1631006326814?e=1706515200&v=beta&t=7YW5hthCLA2x2ath80PPMZFam1fUQtIDFQtXym9kpCI',
    title: "React Js & React Native Developer's India",
    members: "115,450",

  },
  {
    id: 3,
    img: 'https://media.licdn.com/dms/image/C5607AQFxnLrTEhTIxg/group-logo_image-shrink_48x48/0/1641298759039?e=1706515200&v=beta&t=z5iwmZNVqK3eQu4B8-cliB39QAYl0ipTgf3KNYBnJwE',
    title: "GeeksforGeeks",
    members: "115,950",

  },
  {
    id: 4,
    img: 'https://media.licdn.com/dms/image/C5607AQHkNNQ7VJct-A/group-logo_image-shrink_48x48/0/1630997527396?e=1706515200&v=beta&t=2LlmLUY6tjkMY-xKiC5vdhyus0j_BfoYOMW3_gneu3c',
    title: "Data Science",
    members: "515,850",

  },
  {
    id: 5,
    img: 'https://media.licdn.com/dms/image/C4D07AQHLjstykK1CLw/group-logo_image-shrink_48x48/0/1631002252183?e=1706515200&v=beta&t=NsmQMsuDyEUab1OCYXdTrbcsUHC-VdqNdoGGWkiK-T8',
    title: "Artificial Intelligence",
    members: "615,959",

  },






]








const Pages = () => {
  return (
    <div className='mygroups__div'>

      <section className="mid">
        <div className="tops">
          <br />
          <h3>Pages</h3>
          <p>Total {pages.length} pages</p>
          <hr />
          {pages.map((tab) => (
              
            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='title'>{tab.title}</p>
                <p className='members'>{tab.members} members</p>

              </div>
              <BsThreeDots size={23} />
            </div>
          ))}
          <br />
        </div>
      </section>
      <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />
              
    </div>
  )
}

export default Pages
