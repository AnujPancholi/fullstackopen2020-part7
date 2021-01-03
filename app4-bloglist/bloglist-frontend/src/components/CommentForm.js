import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getAddCommentActionAsync } from '../reducers/featuredCommentsReducer.js'

import './css/CommentForm.css'



const CommentForm = () => {
  const user = useSelector((state) => {
    return state.auth
  })
  const blogId = useSelector((state) => {
    return state.featured_blog ? state.featured_blog.id : null
  })
  const dispatch = useDispatch()
  const [ commentInputText, setCommentInputText ] = useState('')

  const handleCommentInputChange = (event) => {
    setCommentInputText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('COMMENT SUBMIT')
    dispatch(getAddCommentActionAsync({
      text: commentInputText,
      blogId: blogId
    },user))
  }

  return(<div>
    <form id="comment-form" onSubmit={handleSubmit} className="comment-form">
    Add Comment<input name="comment-text" type="text" value={commentInputText} onChange={handleCommentInputChange} />
      <input name="comment-submit" type="submit" defaultValue="Add Comment"/>
    </form>
  </div>)
}

export default CommentForm