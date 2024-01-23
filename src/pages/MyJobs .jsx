import React from 'react';
import './MyJobs.scss';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import extra from './extra.gif'
import { FaBookmark } from "react-icons/fa";




const myJobs = [
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

]






const MyJobs = () => {
  return (
    <div className='myjobs__div'>
      <div className="left">
        <p><FaBookmark/> {" "}My Items</p>
        <ul>
          <li>Posted jobs</li>
          <li>My jobs</li>
          <li>Saved posts and articles</li>
        </ul>



      </div>
      <section className="mid">
        <div className="tops">
          <br />
          <h4>My Jobs</h4>
          <p><button className='selected'>Applied</button> <button>Archived</button></p>
          <br />
          {myJobs.map((tab) => (
            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='position'>{tab.position}</p>
                <p className='company'>{tab.company}</p>
                <p className='light'>{tab.location}</p>

              </div>
              <BsThreeDots size={20} />
            </div>
          ))}
          <br />
        </div>
      </section>
      <ul className="right">
        <li>
          Dear, learn what hiring managers look for in answers to top interview questions
        </li>
        <br />
        <li>
          Where do you see yourself in 5 years?
        </li>
        <li>Can you explain your employment gap?</li>

        <li>Tell me about a time you failed or made a mistake.</li>






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
      </ul>
    </div>
  )
}

export default MyJobs
