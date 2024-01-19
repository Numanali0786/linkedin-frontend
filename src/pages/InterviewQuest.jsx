import React, { useState } from 'react';
import './InterviewQuest.scss';
import { BoxStyle, PageStyle } from '../components/PageStyle';
import { BiSolidOffer } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const questions = [
    {
        id: 1,
        quest: "Tell me about yourself",
        sample: 'A lot of jobs require someone who can think on their feet or present ideas with crispness and clarity. This question provides employers with an early preview of your core skills, your personality and your ability to respond to an unstructured question.',
        ans:"“Well, I’m currently an account executive at Smith, where I handle our top-performing client. Before that, I worked at an agency where I was on three different major national healthcare brands. And while I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited about this opportunity with Metro Health Center.”"
    },
    {
        id: 2,
        quest: "What is your greatest strength?",
        ans:'I have always been a natural leader. With over ten years of experience in finance and sales, I have exceeded my KPIs every quarter and have been promoted twice in the past five years. I look back at those successes and know that I would not have reached them if I had not built and led teams composed of highly skilled and diverse individuals. I am proud of my ability to get cross-functional groups on the same page. I have regularly honed my management skills through 360 reviews and candid sessions with my team and I know continuing to build my leadership skills is something I want from my next role.',
        sample: 'Employers want to see if you can strike the right balance between confidence and humility. Hiring managers also want to get a sense for how self-aware and honest you are and align your strengths to the role at hand.'
    },
    {
        id: 3,
        quest: "What is your greatest weakness?",
        ans:'I can be too critical of myself. A pattern I have noticed throughout my career is that I often feel I could have done more even if, objectively, I have done well. Earlier in my career, this led to burnout and negative self-talk. One solution I have implemented over the last three years is to actively pause and celebrate my achievements. Not only has this helped my own self-esteem, it has helped me genuinely appreciate and recognise my team and other support systems.',
        sample: 'The interviewer is assessing whether your weaknesses will get in the way of doing the job. Employers are looking for humility and whether you’re committed to learning and growing. This is a place you can showcase what you’re doing to improve.'
    },
    {
        id: 4,
        quest: "Why should we hire you?",
        sample: 'This question tests how persuasive you are. Interviewers want to see if you can make a calm, confident case for yourself, even if they’re acting skeptical. They’re looking for factual and compelling answers.',
        ans:"“I know it’s been an exciting time for General Tech—growing so much and acquiring several startups—but I also know from experience that it can be challenging for the sales team to understand how new products fit in with the existing ones. It’s always easier to sell the product you know, so the newer stuff can get shortchanged, which can have company-wide ramifications. I have over a decade of experience as a sales trainer, but more importantly, most of those years were working with sales teams that were in the exact same boat Gen Tech is in now. Growth is wonderful, but only if the rest of the company can keep up. I’m confident I can make sure your sales team is confident and enthusiastic about selling new products by implementing an ongoing sales training curriculum that emphasizes where they sit in a product lineup.”"
    },
    {
        id: 5,
        quest: "Why do you want to work here?",
        sample: 'Interviewers want to understand what prompted you to apply for this job. They don’t want candidates who are indifferent to where they work. Instead, they want someone who offers very specific reasons for why they want this job.'
    },
    {
        id: 6,
        quest: "Tell me about a time you showed leadership.",
        sample: 'Employers want to understand your capacity to step up and handle tough situations that undoubtedly arise in the workplace. They want to know when you’ve seen an opening to lean in and lead with good judgment.'
    },
    {
        id: 7,
        quest: "Tell me about a time you were successful on a team.",
        sample: 'If you can show that you’ve helped a team move through a challenge, you probably have strong communication and interpersonal skills. These kinds of “soft” skills are in high demand and make people successful in their jobs.'
    },
    {
        id: 8,
        quest: "What would your co-workers say about you?",
        sample: 'Interviewers want to know if you’ll fit in with the team. This question can also help you highlight your strengths without feeling like you’re bragging.'
    },
    {
        id: 9,
        quest: "Why do you want to leave your current role?",
        sample: 'Employers say they want to hire people who are running “to” a role as opposed to running “away.” However, they are also interested in your honesty when things haven’t worked out and will give people second chances when they demonstrate hunger.'
    },
    {
        id: 10,
        quest: "Describe your most challenging project.",
        sample: 'Employers want to get a sense of what ‘challenging’ means to you. They also want to know how you handled the situation in a calm way. They’re looking for a storyline to prove that you can turn a bad story into a good story.'
    },
]

const InterviewQuest = () => {

    const [selectedQuest, setSelectedQuest] = useState(questions[0])

    return (
        <PageStyle>
            <div className='interviewQuestDiv'>
                <BoxStyle>
                    <div className="left">
                        <h5>Common Questions</h5>
                        
                        {questions.map((q) => (
                            <div onClick={() => setSelectedQuest(q)} key={q.id} className={`${q==selectedQuest?"tab selectedStyle":"tab"}`}><span>{q.quest}</span> <IoIosCheckmarkCircle size={18}/></div>
                        ))}
                    </div>
                </BoxStyle>


                <div className="interviewQuestDiv__content">
                    <BoxStyle>
                        <div className="offer">
                            <p>
                                <BiSolidOffer size={20}/> Get instant, AI-powered feedback on the delivery of your answer when you practice and record a video</p>

                        </div>
                    </BoxStyle>
                    
                        <div className="quest">
                            <h5>{selectedQuest.quest}</h5>
                            <button>Practice and get feedback</button>

                        </div>
                    
                    <BoxStyle>
                        <div className="overview">
                            <h4>Overview</h4>
                            <br />
                            <p>{selectedQuest?.sample}</p>

                        </div>
                    </BoxStyle>
                    <BoxStyle>
                        <div className="overview">
                            <h4>Sample</h4>
                            <br />
                            <p>{selectedQuest?.ans}</p>

                        </div>
                    </BoxStyle>
                    <BoxStyle>
                        <div className="premium">
                            <p className='head'> <>Unlock sample answers with expert feedback using LinkedIn Premium
                                Try Premium</> <button>Try Premium for 0$</button>
                            </p>
                            <span>1-month free trial. Cancel anytime.</span>
                            <br />
                           

                        </div>
                    </BoxStyle>


                </div>

            </div>
        </PageStyle>
    )
}

export default InterviewQuest