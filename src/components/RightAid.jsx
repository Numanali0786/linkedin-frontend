import React from 'react';
import './RightAid.scss'
import { BsThreeDots } from 'react-icons/bs';

const RightAid = ({ url, text, btn, color }) => {
    return (<div className='rightSection'>
        <section className="rightAid">
            <div className='ad'>Ad <BsThreeDots /></div>
            <span className='small'>Keep up with interesting, relevant updates</span>
            <div className="img">
                <img src={url} alt="" />
            </div>
            <span className='desc'>{text}</span>
            <button className={color}>{btn}</button>
        </section>

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

    )
}

export default RightAid