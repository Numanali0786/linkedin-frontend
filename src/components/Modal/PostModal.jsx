import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { postModalOff } from '../../context/stateSlice';
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { FaRegCalendarDays } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { createPost, fetchAllPosts } from '../../context/postSlice';
import './PostModal.scss'


const PostModal = () => {

    const { user } = useSelector((state) => state.userSlice)
    const {profiles}  = useSelector((state)=> state.profileSlice)
    const profile = profiles.find((profile)=> profile?.authorSub === user?.sub)

    // const [postData, setPostData] = useState({ postText: '', selectedFile: '',author:profile._id,author:user.name,profile: profile?.selectedFile,position:profile?.position })
    const [postData, setPostData] = useState({ postText: '', selectedFile: '',author:profile?._id })
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(postData)
        dispatch(createPost(postData))
        // dispatch(fetchAllPosts())
        dispatch(postModalOff())
    }
    return (
        <div className='postModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <div className="content__top">
                        <img src={profile?.selectedFile } alt="" />
                        <div className='content__top__right'>
                            <span>{user.name} {" "} <FaCaretDown /></span>
                            <p>Post to Anyone</p>
                        </div>
                    </div>
                    <hr />
                    <form>
                        <textarea className='text' type="text" placeholder="What do you want to talk about?" onChange={(e) => setPostData({ ...postData, postText: e.target.value })} />
                        {postData.selectedFile && <img src={postData.selectedFile} alt="" />}
                            
                        <div className="post__modal__icons">
                            <BsEmojiSmile className='' />
                            <div className="file">
                                <FileBase
                                    size="60"
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        setPostData({ ...postData, selectedFile: base64 })
                                    }
                                />
                                <button type='button'><GoFileMedia /></button>
                            </div>
                            <FaRegCalendarDays />
                            <HiOutlineDotsHorizontal className='icon__button' />

                        </div>

                        <button className='close icon__button' onClick={() => dispatch(postModalOff())}><IoMdClose /></button>
                        <button disabled={!postData.postText} className={`${!postData.postText==""?"post__btn":"disable__btn"}`}  onClick={handleSubmit} >Post</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default PostModal