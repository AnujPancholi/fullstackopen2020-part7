import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getFeaturedCommentsSetActionAsync, getFeaturedCommentsResetAction } from '../reducers/featuredCommentsReducer.js'


const Comment = ({ comment }) => {
  return (<div>
    {comment.text} <i>- {comment.user.name}</i>
  </div>)
}

const CommentsView = () => {
  const blogId = useSelector((state) => {
    return state.featured_blog ? state.featured_blog.id : null
  })
  const comments = useSelector((state) => {
    return state.featured_comments
  })
  const dispatch = useDispatch()

  useEffect(() => {
    blogId ? dispatch(getFeaturedCommentsSetActionAsync(blogId)) : getFeaturedCommentsResetAction()
  },[blogId])


  return (<div>
    <h4>
            Comments ({comments.length}):
    </h4>
    <ul>
      {comments.map(comment => (<li key={comment._id}><Comment comment={comment} /></li>))}
    </ul>

  </div>)
}


export default CommentsView;