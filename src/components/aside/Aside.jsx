import React from 'react';
import './Aside.scss';
import RightAid from '../RightAid';

const Aside = () => {
  return (
    <div className='right'>
    <div className="top">
        <h3>LinkedIn News </h3>
        <ul>
            <li>

                <h5>Big Ideas in tech, finance, retail</h5>
                <p>Top news • 6,176 readers</p>
            </li>
            <li>
                <h5>More nations eye Indian tourists</h5>
                <p>1d ago • 893 readers</p>
            </li>
            <li>
                <h5>Indian pilots in turbulent skies</h5>
                <p>1d ago • 982 readers</p>
            </li>
            <li>
                <h5>Bumper quarter for consumer firms</h5>
                <p>1d ago</p>
            </li>
            <li>
                <h5>Making India Inc more inclusive</h5>
                <p>1d ago • 486 readers</p>
            </li>
            <li>
                <h5>Hiring spike in smaller cities</h5>
                <p>1d ago • 149 readers</p>
            </li>

        </ul>
    </div>
    <div className="down">
        {/* <p>Stay updated on the latest in digital technologies.</p>

        <img src="https://media.licdn.com/dms/image/D5610AQHqR1gGHdWBmQ/image-pad_100_100/0/1687844283957?e=1700222400&v=beta&t=xDGizeR8D07Op7fGNomXWOmGMVLauoYhay9xiUBI3Zw" alt="" />
        <h6>Hitachi Social Innovation is POWERING GOOD
            <button>Try for free</button>
        </h6> */}
     <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />
              

    </div>
</div>
  )
}

export default Aside