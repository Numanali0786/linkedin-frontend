import React, { useEffect, useState } from 'react';
import './Comments.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchAllComments } from '../../context/commentSlice';


function Comments({ postId,post }) {
    const dispatch = useDispatch()
    const { user,profile } = useSelector((state) => state.userSlice)
    const { posts, isLoading } = useSelector((state) => state.postSlice)
    // const {profiles}  = useSelector((state)=> state.profileSlice)
    // const profile = profiles.find((profile)=> profile?.authorSub === user?.sub)
    const [commentData, setCommentData] = useState({authorPost:postId,author:profile?._id})
    const { comments } = useSelector((state) => state.commentSlice)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment(commentData))
        setCommentData({ ...commentData, commentText: '' })
    }
    useEffect(() => {
        dispatch(fetchAllComments())

    }, [])


    const selectedComments = comments.filter((comment) => comment.authorPost._id === postId)
    console.log(comments)
    console.log(selectedComments)
    return (
        <section className='comment__div'>
        <h1>comments</h1>
        <div className="comment__head">
            {/* <img src={user.picture} alt="" /> */}
            <img src={profile?.selectedFile} alt="" />
            <textarea type="text" placeholder='Add a comment...' value={commentData.commentText} onChange={(e) => setCommentData({ ...commentData, commentText: e.target.value })} />
            <br />
        </div>
        {commentData.commentText && <button className='comment__post__btn' onClick={handleSubmit}>Post</button>}
        <div className="comments">

            {selectedComments.map((comment) => {
                return <div key={comment._id} className="comment">
                    <div className="left">
                        {/* <img src={comment?.profile} alt="" /> */}
                        <img src={comment?.author?.selectedFile} alt="" />
                    </div>
                    <div className="right">
                        <div className="head">
                            <span className='author'>{comment?.author.name}</span>
                        </div>
                        <div className="spec">developer</div>
                        <pre>{comment.commentText}</pre>
                        <div className="btns">
                            <button>like</button>
                            <button>reply</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </section>
    )
}

export default Comments