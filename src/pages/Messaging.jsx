import React, { useEffect, useState } from 'react'
import { socket } from '../socket.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentMessages, fetchDirectConversations, setCurrentConversation, addDirectMessage } from '../context/coversation.js'
import { selectConversation } from '../context/profileSlice.js'

import { v4 as uuidv4 } from 'uuid';
import './Messaging.scss'

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


const Messaging = () => {
  const user_id = JSON.parse(window.localStorage.getItem('profile'))?._id
  const dispatch = useDispatch()

  const [text, setText] = useState(null)
  const { conversations, current_conversation, current_messages } = useSelector((state) => state.ConversationSlice.direct_chat)
  console.log(conversations, current_conversation)

  const { room_id, friends } = useSelector((state) => state.profileSlice)
  // console.log(friends)

  useEffect(() => {
    socket?.emit('get_direct_conversations', { user_id: user_id }, (data) => {
      // data=> list of conversations
      console.log(data)

      dispatch(fetchDirectConversations({ conversations: data }));


      // -===============
    })
  }, [socket])

  useEffect(() => {

    //   // -===============
    const current = conversations.find((el) => el?.id === room_id);
    console.log(conversations, current, room_id)
    dispatch(setCurrentConversation(current));
    current && socket?.emit("get_messages", { conversation_id: current?.id }, (data) => {
      // data => list of messages
      console.log(data, "List of messages");
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
          }
        })
        );
      }

    })

  }, [room_id, current_conversation])

  // **************
  return (
    <div className='messaging_div'>
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
                {conv.name}
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

          <div className="message__box">

            {room_id ? (
              <div className="messages">

                <div className="chats">
                  {current_messages.map((msg) => (
                    <div className='chat' key={msg.id}>{msg.message}</div>
                  ))}
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

      <section className="right">
        <div className='ad'>Ad <BsThreeDots /></div>
        <span className='small'>Keep up with interesting, relevant updates</span>
        <div className="img">
          <img src="https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18" alt="" />
        </div>
        <span className='desc'>Numan, grow your career by following ETS India</span>
        <button>Follow</button>
      </section>
    </div>
  )
}

export default Messaging