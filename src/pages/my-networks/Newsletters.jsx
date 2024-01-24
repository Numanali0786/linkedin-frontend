import './Newsletters.scss';
import { BsThreeDots } from "react-icons/bs";
import RightAid from '../../components/RightAid';





const newsletters = [
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/D4D12AQE5MUeyHIuiuA/series-logo_image-shrink_100_100/0/1687854378228?e=1711584000&v=beta&t=BsGaNja4mf0P7jmpL5SKU_qtoPic1mn74r3VjQCOxIs", 
    title: "HCLTech Trends and Insights",
    desc: "Exploring technology's potential to accelerate innovation and create business value",

  },

  {
    id: 2,
    img: "https://media.licdn.com/dms/image/D4E12AQF21GrZW2LWLw/series-logo_image-shrink_100_100/0/1677727658631?e=1711584000&v=beta&t=NQhe3V4b1N1Y2fw0aRmhY25_5iBIxvs2kUU3IU52m9s", 
    title: "Drone Tech Express",
    desc: " IG Drones Newsletter",

  },
  {
    id: 3,
    img: "https://media.licdn.com/dms/image/C4D12AQHPuvBITF9MlA/series-logo_image-shrink_100_100/0/1649151954759?e=1711584000&v=beta&t=RxX1GLXA1S4wkp76FIk1sALUc7FNqTLFRLkhjYM1N00",
    title: "Find Job",
    desc: "Discover the right job !",

  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/D4D12AQHRmAdOEJGGDw/series-logo_image-shrink_100_100/0/1674040405385?e=1711584000&v=beta&t=DgeRB0vYbgZk1BQGPDDNN0Vj9pA9qjJfp6G_09w0Cj8",
    title: "Monthly Legacy System News",
    desc: " All about legacy systems",

  },
  {
    id: 5,
    img: 'https://media.licdn.com/dms/image/C4D07AQHLjstykK1CLw/group-logo_image-shrink_48x48/0/1631002252183?e=1706515200&v=beta&t=NsmQMsuDyEUab1OCYXdTrbcsUHC-VdqNdoGGWkiK-T8',
    title: "Artificial Intelligence",
    desc: "Welcome to AI future filled with automation",

  },

]








const Newsletters = () => {
  return (
    <div className='newsletters__div'>

      <section className="mid">
        <div className="tops">
          <br />
          <h3>Newsletters</h3>
          <p>{newsletters.length} newsletters</p>
          <br />
          {newsletters.map((tab) => (

            <div key={tab.id} className="top">
              <img src={tab.img} alt="" />
              <div className="desc">
                <p className='title'>{tab.title}</p>
                <p className='members'>{tab.desc}</p>

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

export default Newsletters
