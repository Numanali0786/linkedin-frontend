import React, { useEffect, useState } from 'react';
import './Posts.scss';
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
    const { user } = useSelector((state) => state.userSlice)
    const {profiles}  = useSelector((state)=> state.profileSlice)
    const profile = profiles && profiles.find((profile)=> profile?.authorSub === user?.sub)

    // console.log(posts)
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
                {/* {posts.map((post)=>{
                    const {postText} = post
                    return(
                        <div className="">{postText}</div>
                    )
                })} */}

                {posts.map((post) => (
                    // const {}
                    <div className="post" key={post._id}>
                        <div className="post__top">
                            <div className="left">
                                <img src={post?.author?.selectedFile} alt="" />

                            </div>
                            <div className="detail">
                                <p>{post?.author?.name}</p>
                                <span>{post?.author?.position}</span>
                                <TimeAgo
                                className='time'
                                    datetime={post?.createdAt}
                                    live={false} 
                                />

                            </div>
                            <BsThreeDots size={23} />
                           

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
                                    <BiRepost  size={24}/>
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