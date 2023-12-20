import React, { useEffect, useState } from 'react';
import './comments.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchAllComments } from '../../context/commentSlice';


function Comments({ postId }) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userSlice)
    const [commentData, setCommentData] = useState({ commentText: '', authorEmail: user.email, postId: postId, author: user.name, profile: user.picture })
    const { comments } = useSelector((state) => state.commentSlice)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment(commentData))
        setCommentData({ ...commentData, commentText: '' })
    }
    useEffect(() => {
        dispatch(fetchAllComments())

    }, [])

    const selectedComments = comments.filter((comment) => comment.postId === postId)
    return (
        <section className='comment__div'>
            <h1>comments</h1>
            <div className="comment__head">
                <img src={user.picture} alt="" />
                <textarea type="text" placeholder='Add a comment...' value={commentData.commentText} onChange={(e) => setCommentData({ ...commentData, commentText: e.target.value })} />
                <br />
            </div>
            {commentData.commentText && <button className='comment__post__btn' onClick={handleSubmit}>Post</button>}
            <div className="comments">

                {selectedComments.map((comment) => {
                    return <div key={comment._id} className="comment">
                        <div className="left">
                            <img src={comment?.profile} alt="" />
                        </div>
                        <div className="right">
                            <div className="head">
                                <span className='author'>{comment?.author}</span>
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