import React, { useEffect, useState } from 'react';
import './Posts.scss';
// import { posts } from './Posts';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BiRepost } from 'react-icons/bi';
import { BsFillSendFill } from 'react-icons/bs';
import { BsGlobeAmericas } from 'react-icons/bs';
import { FaRegThumbsUp } from "react-icons/fa6";
import { fetchApi } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../../context/postSlice';
import moment from 'moment';
import Comments from '../comments/Comments';
import TimeAgo from 'timeago-react';


const Posts = () => {

    const [showCommentsId, setShowCommentsId] = useState(null)
    const { posts, isLoading } = useSelector((state) => state.postSlice)
    const { profile } = useSelector((state) => state.profileSlice)
    const { user } = useSelector((state) => state.userSlice)

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchAllPosts())
    }, [])
    return (<>
        {isLoading === true ? (
            // <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        ) : (
            <div className='posts__div'>

                {posts.map((post) => (
                    <div className="post" key={post._id}>
                        <div className="post__top">
                            <div className="left">
                                <img src={(post?.authorEmail===profile?.[0]?.authorEmail &&  profile?.[0]?.selectedFile) || post?.profile} alt="" />

                            </div>
                            <div className="detail">
                                <p>{post?.author}</p>
                                <TimeAgo
                                className='time'
                                    datetime={post?.createdAt}
                                    live={false} 
                                />

                            </div>
                            <BsThreeDots size={23} />
                            {/* {moment(post?.createdAt).fromNow()} */}

                        </div>

                        <div className="mid">
                            <div className="desc">
                                <pre>{post.postText}</pre>

                                <br />

                                <span>ThankYou.</span>

                            </div>

                            <div className="img">

                               {post.selectedFile && <img key={post._id} src={post.selectedFile} alt="" />}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="items">
                                <div className="item">
                                    <AiOutlineLike />
                                    <span>Like</span>
                                </div>
                                <div className="item" onClick={() => setShowCommentsId(post._id)}>
                                    <BiCommentDetail />
                                    <span >Comment</span>
                                </div>
                                <div className="item">
                                    <BiRepost />
                                    <span>Repost</span>
                                </div>
                                <div className="item">
                                    <BsFillSendFill />
                                    <span>Send</span>
                                </div>
                            </div>

                        </div>

                        {/* comments */}

                        {post._id === showCommentsId && <Comments postId={post._id} post={post} />}
                    </div>
                ))}
            </div>
        )}
    </>

    )
}

export default Posts