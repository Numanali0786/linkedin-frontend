import React from 'react';
import './Jobs.scss';
import {Link} from 'react-router-dom'

import { FaBookmark } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import { MdWorkspacePremium } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import extra from './extra.gif'

const tabs = [
  {
    id: 6,
    icon: <FaBookmark />,
    title: 'My jobs',
    link: 'Myjobs',
  },
  {
    id: 7,
    icon: <AiOutlineBars />,
    title: 'Preferences',
    link: 'Preferences',
  },
  {
    id: 8,
    icon: <FaRegCalendarCheck />,
    title: 'SkillAssessments',
    link: 'Skill Assessments',
  },
  {
    id: 9,
    icon: <FaNoteSticky />,
    title: 'Interview prep',
    link: 'Interviewprep',
  },
  {
    id: 10,
    icon: <TbNotes />,
    title: 'Resume Builder',
    link: 'ResumeBuilder',
  },
  {
    id: 11,
    icon: <FaYoutube />,
    title: 'Job seeker guidance',
    link: 'Jobseekerguidance',
  },
  {
    id: 12,
    icon: <IoMdSettings />,
    title: 'Application settings',
    link: 'Applicationsettings',
  },

]



const topJobs = [
  {
    id: 1,
    img: 'https://media.licdn.com/dms/image/C560BAQG6KMZp1zAiTA/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1712793600&v=beta&t=nA1Mn-hHjtGwajFAdAtykI9JeM4EAyejD7ANOIL9A80',
    position: "ReactJS Developer | Front End",
    company: "Uplers",
    location: 'Telangana, India'
  },

  {
    id: 4,
    img: 'https://media.licdn.com/dms/image/D4D0BAQHB79AE71th8A/company-logo_100_100/0/1688472201595/turingcom_logo?e=1712793600&v=beta&t=4FGWgCfJkxOCKBALRGsvioKS7232ACwtsujijBaMbL8',
    position: "Full-Stack Front-End-Heavy Engineer",
    company: "Turing",
    location: 'Gurgaon, Haryana, India'
  },
  {
    id: 5,
    img: 'https://media.licdn.com/dms/image/C4E0BAQFVz8_5Kx_PRA/company-logo_100_100/0/1630643047279/teamsoftway_logo?e=1712793600&v=beta&t=Tvm6ojAn2e8sP3TENh49eanFFRwd6k-QQ30yg7M1F3A',
    position: "Cross Platform Mobile Developer ( React Native)",
    company: "Softway",
    location: 'Bengaluru, Karnataka, India'
  },
  {
    id: 15,
    img: 'https://media.licdn.com/dms/image/C4D0BAQHop2RDSDd1sQ/company-logo_100_100/0/1676357499745/snapart_app_logo?e=1712793600&v=beta&t=NMz3bBfj1wMo-GhnuJiQKvCsOIByTkt9XWHc3GWe7tU',
    position: "JAVA Developer",
    company: "Metapix",
    location: 'India (Remote)'
  },
  {
    id: 16,
    img: 'https://media.licdn.com/dms/image/C4D0BAQHD_GDvmfGvAA/company-logo_100_100/0/1630574801551?e=1712793600&v=beta&t=khLu09iOiZpk9bxWwYGLHo1ctwzXMzz36UPNdj8nksQ',
    position: "Haryana, India",
    company: "EG Allied Pvt. Ltd.",
    location: 'Gurgaon, Haryana, India'
  },
]


const premiumJobs = [
  {
    id: 2,
    img: 'https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=1712793600&v=beta&t=5TK95DkIxzrlWyiW-vkQx18E0nXvSHB52C8_PzewwSg',
    position: "Application Developer: Experience Front End",
    company: "IBM",
    location: 'Gurgaon, Haryana, India'
  },
  {
    id: 3,
    img: 'https://media.licdn.com/dms/image/C4D0BAQGdkIvXUdQMEA/company-logo_100_100/0/1672822694984/photon_interactive_logo?e=1712793600&v=beta&t=Z3Uh81_ZjlcUrGPkQeax04zlLCU6hCjwl2Gf2jrnnJ0',
    position: "React native Developer",
    company: "Photon",
    location: 'Trivandrum, Kerala, India (On-site)'
  },
  {
    id: 44,
    img: 'https://media.licdn.com/dms/image/C4D0BAQECLuXkNfEPxw/company-logo_100_100/0/1648530805626?e=1712793600&v=beta&t=gAQuYyNjAG8dMZY5kWz1yvPTWbUy2qfEPR-VCTw7fy0',
    position: "Full Stack Engineer",
    company: "Photon",
    location: 'India (Remote)'
  },
  {
    id: 45,
    img: 'https://media.licdn.com/dms/image/C4E0BAQHqyQs18nynRw/company-logo_100_100/0/1630625061884/golden_brokers_lyf_logo?e=1712793600&v=beta&t=-XfWGnVFYDE-lDAezhH6jO5bLaxq1EwTEP37a0j-sio',
    position: "React native Developer",
    company: "Kool Koders",
    location: 'Bengaluru, Karnataka, India'
  },
]





const Jobs = () => {
  return (
    <div className='jobs__div'>
      <div className="left">
        {tabs.map((tab) => (
          <Link to={tab.link} key={tab.id} className="tab">
            {tab.icon}
            {tab.title}
          </Link>
        ))}
      </div>
      <section className="mid">

        <div className="tops">
          <br />
          <h4>Recommended for you</h4>
          <p>Based on your profile and search history</p>
          <br />
          {topJobs.map((tab) => (
            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='position'>{tab.position}</p>
                <p className='company'>{tab.company}</p>
                <p className='light'>{tab.location}</p>

              </div>
            </div>
          ))}
          <br />
        </div>
        <br />
        <div className="tops">
          <div className="strip"></div>
          <span className='prem'><MdWorkspacePremium size={21} />PREMIUM</span>
          <h4>Jobs where you’re a top applicant</h4>
          <p>Based on your chances of hearing back</p>
          {premiumJobs.map((tab) => (
            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='position'>{tab.position}</p>
                <p className='company'>{tab.company}</p>
                <p className='light'>{tab.location}</p>
              </div>
            </div>
          ))}
          <br />
        </div>
      </section>
      <div className="right">
        <p>Job seeker guidance</p>
        <p>Recommended based on your activity</p>
        <p><a href="">I want to improve my resume </a><img src={extra} alt="" /></p>
        <p>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
        <button>Show more <FaArrowRightLong size={18} /></button>

        <div className="extras">
          <span>About</span>
          <span>Accessibility</span>
          <br />
          <span>Help Center</span>
          <br />

          <span>Privacy & Terms</span>
          <br />
          <span>Ad Choices</span>
          <span>Advertising</span>
          <br />

          <span>Business Services</span>
          <br />
          <span>Get the LinkedIn app</span>
          <span>LinkedIn Corporation © 2024</span>
        </div>
      </div>
    </div>
  )
}

export default Jobs
