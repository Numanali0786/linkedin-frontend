import React, { useEffect, useRef, useState } from 'react'
import { socket } from '../socket.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentMessages, fetchDirectConversations, setCurrentConversation, addDirectMessage } from '../context/coversation.js'
import { fetchProfiles, selectConversation } from '../context/profileSlice.js'

import { v4 as uuidv4 } from 'uuid';
import './Messaging.scss'
import { format } from 'date-fns';
import { FaRegEdit } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { TbGif } from "react-icons/tb";
import { MdInsertEmoticon } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearch } from 'react-icons/io5'
import RightAid from '../components/RightAid.jsx'


const Messaging = () => {
  const msg_cont = useRef()
  const profile = JSON.parse(window.localStorage.getItem('profile'))
  const user_id = profile?._id

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [scrolledHeight, setScrolledHeight] = useState(msg_cont.current?.scrollHeight)
  const { conversations, current_conversation, current_messages } = useSelector((state) => state.ConversationSlice.direct_chat)
  // const [textDate, setTextDate] = useState(current_messages?.[0])
  // const [textDate, setTextDate] = useState(format(current_messages?.[0]?.created_at, 'MMM d'))
  // console.log(textDate)
  // console.log(conversations, current_conversation)

  const { room_id, friends } = useSelector((state) => state.profileSlice)
  // console.log(current_conversation)

useEffect(()=>{
  if(room_id){
  console.log('scccccccrolllllll',msg_cont.current)
  // setScrollHeight(msg_cont.current?.scrollHeight)         
  msg_cont.current.scrollTop=  10000
      
  }


},[scrolledHeight,room_id,text,msg_cont])

  useEffect(() => {

    //   // -===============
    const current = conversations.find((el) => el?.id === room_id);
    console.log(conversations, current, room_id)
    dispatch(setCurrentConversation(current));
    current && socket?.emit("get_messages", { conversation_id: current?.id }, (data) => {
      // data => list of messages
      // console.log(data, "List of messages");
      dispatch(fetchCurrentMessages({ messages: data }));
    });
    socket?.on("new_message", (data) => {
      const message = data.message;
      console.log(current_conversation, data);

      // check if msg we got is from currently selected conversation
      if (current_conversation?.id === data.conversation_id) {
        console.log('uuuuu')
        dispatch(addDirectMessage({
          message: {
            id: uuidv4(),
            type: "msg",
            subtype: message.type,
            message: message.text,
            incoming: message.to === user_id,
            outgoing: message.from === user_id,
            created_at: new Date()

          }
        })
        );

        setScrolledHeight(msg_cont.current?.scrollHeight)  
      }

    })

  }, [room_id, current_conversation])

  useEffect(() => {
    dispatch(fetchProfiles())

  }, [])

  // **************
  return (
    <div className='messagings_div'>
      <section className='left'>
        <div className="conversaions__div">

          <div className="conv__headers">
            <span>Messaging</span>
            <BsThreeDots />
            <FaRegEdit />
          </div>

          <div className="conv__search">
            <div className="search">
              <IoSearch size={25} />
              <input type="text" placeholder='Search messages' />
            </div>
          </div>

          <div className="conversations">
            {conversations.map((conv) => (
              <div className="conversation" key={conv.id} onClick={() => {
                dispatch(selectConversation({ room_id: conv.id }));
              }}>
                <img src={conv.selectedFile} alt="" />
                <div className="content">

                  <p>{conv.name}</p>
                  {current_messages[current_messages.length - 1] && current_conversation.id == conv?.id && <span className='msg'>msg: {current_messages[current_messages.length - 1]?.message}</span>}
                </div>
                {current_messages[current_messages.length - 1] && <span className='time'>{format(current_messages[current_messages.length - 1]?.created_at, 'MMM d')}</span>}

              </div>
            ))}
          </div>

        </div>

        <div className="chat__box">
          {room_id && <div className="chat__header">
            <p className='header__left'>
              <span>{current_conversation?.name}</span>
            </p>
            <div className="header__right">
              <BsThreeDots /><BiSolidVideoPlus /><FaRegStar />
            </div>
          </div>}

          <div  className="message__box">

            {room_id ? (
              <div className="messages">

                <div className="chats" ref={msg_cont}>
                  {current_messages.map((msg) => {
                    // console.log('testttttttt', msg)
                    return <div className='chat' key={msg.id}>
                      <div className="chat__top">
                      <p className='chat__img'>{msg.outgoing ? <img src={profile?.selectedFile}/> :<img src={current_conversation.selectedFile}/>}</p>
                      <p className='chat__name'>{msg.outgoing ? profile.name : current_conversation.name}</p>
                      <p className='chat__time'>| {" "}{format(msg?.created_at, 'h:mm a')} | {format(msg?.created_at, 'MMM d')}</p>
                       {/* <p className='chat__time'>{format(msg?.created_at, 'MMM d')}</p> */}
                  </div>
                      <p className='chat__msg'>{msg.message} </p>
                      {/* <span>{format(msg?.created_at, 'MMMM do yyyy, h:mm:ss a')}</span>  */}

                    </div>
                  })}
                </div>

                <form action="">
                  <textarea type="text" placeholder='Write a message...' value={text} onChange={(e) => setText(e.target.value)} />
                  <div className="form__elements">
                    <MdOutlineAddPhotoAlternate />
                    <GrAttachment />
                    <TbGif />
                    <MdInsertEmoticon />

                    <button onClick={(e) => {
                      e.preventDefault()
                      console.log(text)

                      socket.emit("text_message", {
                        message: text,
                        conversation_id: room_id,
                        from: user_id,
                        to: current_conversation?.user_id,
                        type: "Text",
                      });
                      setText('')
                      console.log(msg_cont.current?.scrollHeight)
   
                    }} disabled={!text} className={`${!text == "" ? "post__btn" : "disable__btn"}`}>send</button>

                    <HiOutlineDotsHorizontal />
                  </div>
                </form>
              </div>

            ) : (
              <div className="select__chat">Select the user you want to chat with.</div>
            )}
          </div>


        </div>

      </section>

      <RightAid btn="follow" color="button__blue" text="User, grow your career by following ETS India"
        url='https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18' />

    </div>
  )
}

export default Messaging