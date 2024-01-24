import React, { useState } from 'react';
import './Groups.scss';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
// import extra from './extra.gif'
import { FaBookmark } from "react-icons/fa";
import RightAid from '../../components/RightAid';





const yourGroups = [
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
const moreGroups = [
  {
    id: 6,
    img: 'https://media.licdn.com/dms/image/D4E07AQH72I0xcXrYTA/group-logo_image-shrink_48x48/0/1701878300047?e=1706515200&v=beta&t=_kPF63SjWjvXeX0y_6vTciCClFIzQNQ6BAXHYPGfK24',
    title: "MySQL",
    members: "301,197",

  },
  {
    id: 7,
    img: 'https://media.licdn.com/dms/image/C560BAQFq1rDh4XPWPQ/company-logo_100_100/0/1673000396241/dolami_logo?e=1714003200&v=beta&t=LVq545879DR7-yf1S4dDps6lKihm5_4xRrIbbfoJuu4',
    title: "Tech Startup",
    members: "301,197",

  },
  {
    id: 8,
    img: 'https://media.licdn.com/dms/image/D4D0BAQHtHW_E39kJ2Q/company-logo_100_100/0/1686137139328?e=1714003200&v=beta&t=EURe1y_hoKsfnCFej6jB5ROp5PRVxsAfflOvlM1pUCA',
    title: "Trioford Technosys",
    members: "  2,222 ",

  },

  {
    id: 9,
    img: 'https://media.licdn.com/dms/image/D560BAQHIoIg_DEokPg/company-logo_100_100/0/1684226484674?e=1714003200&v=beta&t=DV3KWVKbqaxlTrAfDVt2hkFdgoJ_Ylx3lEXJByQxWMY',
    title: "Travelfika",
    members: "2,920",

  },


]







const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState(yourGroups)
  return (
    <div className='mygroups__div'>

      <section className="mid">
        <div className="tops">
          <br />
          <h3>Groups</h3>
          <p className='btns'><button className={`${selectedGroup == yourGroups && 'selected'}`} onClick={() => setSelectedGroup(yourGroups)}>your groups</button> <button onClick={() => setSelectedGroup(moreGroups)} className={`${selectedGroup == moreGroups && 'selected'}`}>More</button></p>
          <br />
          {selectedGroup.map((tab) => (
              
            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='title'>{tab.title}</p>
                <p className='members'>{tab.members} members</p>

              </div>
                {selectedGroup==yourGroups?<BsThreeDots size={23} />:
                <button className='join__btn'>Join</button>}
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

export default Groups
