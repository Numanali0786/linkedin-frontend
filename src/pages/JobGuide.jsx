import React, { useState } from 'react';
import './JobGuide.scss';
import { BoxStyle, PageStyle } from '../components/PageStyle';
import { BiSolidOffer } from "react-icons/bi";
import YouTube from 'react-youtube';

import { IoIosCheckmarkCircle } from "react-icons/io";

const questions = [
    

    {
        id: 1,
        quest: "I want to improve my resume",
        note:'Learn from our resume industry expert, whose videos have been watched by over 400,000 job seekers and helped them land a job',
        videoId:'rvKNhhhzkP8',
        point1:'Your resume is a compelling marketing document, not an autobiography.',
        point2:'Make your resume unique by using your own voice, so you can stand out in the sea of resumes.',
        point3:'Make the words earn their spot - say what you need to without being too brief or too wordy.',

    },
    {
        id: 2,
        quest: "I want to improve my LinkedIn Profile page",
        note:'Learn how to optimize your LinkedIn Profile for recruiters and hiring managers with these simple tips from a career coach and LinkedIn expert.',
        videoId:'zd4ALKv8Das',
        point1:'The top fold is the single most important part of your LinkedIn profile.',
        point2:'Keywords are important and create density - use them in key areas such as the headline and summary sections.',
        point3:'Make sure there is continuity and consistency throughout your profile.',
           },
    {
        id: 3,
        quest: "I want to get a referral",
        note:'Job seekers with referrals are 4X more likely to get hired. Asking for a referral isn’t always easy - these short, actionable steps are here to help.',
        videoId:'qmhU2y1D1dc',
        point1:'Ask someone who is familiar with who you are, what you do and how you do it.',
        point2:'Make sure the person you ask was satisfied with your work.',
        point3:'If possible, find someone who is a strong and reliable communicator.',
    },
    {
        id: 4,
        quest: "I want to use LinkedIn to network to find a job",
        note:'Learn how to contact the job poster directly and connect with people on LinkedIn who can help you in your job search.',
        videoId:'9BdbGZtnFnQ',
        point1:'Consider the people you know best, friends and family, and make sure they know the specifics of your goals.',
        point2:'Build up rapport before you make an ask',
        point3:'Be clear and succinct, respectful - make it super easy for them to say yes',
    },
    // {
    //     id: 5,
    //     quest: "Checklist of best practices for getting a job",
    //     note:'',
    //     videoId:'lz6hiWTviwg',
    //     point1:'',
    //     point2:'',
    //     point3:'',
    // },

]

const JobGuide = () => {

    const [selectedQuest, setSelectedQuest] = useState(questions[0])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (<>

        <PageStyle>
            <div className="jobGuideDiv__head">
                <h1>User, we’re here to help you land your next job
                </h1>
                <span>Let industry experts guide you with concrete steps you can take to land your next job.
                </span>


  

                <p><img src="https://static.licdn.com/sc/h/c6jthr2qabqnubzowrdxg1e6k" alt="" /> {" "}Millions of people are learning on LinkedIn Learning
                </p>
            </div>
            <div className='jobGuideDiv'>
                <BoxStyle>
                    <div className="left">
                        {questions.map((q) => (
                            <div onClick={() => setSelectedQuest(q)} key={q.id} className={`${q == selectedQuest ? "tab selectedStyle" : "tab"}`}><span>{q.quest}</span> </div>
                        ))}
                    </div>
                </BoxStyle>


                <div className="jobGuideDiv__content">


                    <BoxStyle>
                   

                            <h3>{selectedQuest?.quest}</h3>
                            <span>{selectedQuest?.note}</span>
                            <YouTube videoId={selectedQuest?.videoId} opts={opts}  />
                            <ul>
                                <p>Key takeaways</p>
                                <li>{selectedQuest?.point1}</li>
                                <li>{selectedQuest?.point2}</li>
                                <li>{selectedQuest?.point3}</li>
                            </ul>


                        
                    </BoxStyle>


                </div>

            </div>
        </PageStyle>
    </>
    )
}

export default JobGuide