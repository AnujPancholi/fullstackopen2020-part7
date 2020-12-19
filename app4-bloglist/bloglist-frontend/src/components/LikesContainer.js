import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getBlogLikeActionAsync } from '../reducers/blogsReducer.js';


import './css/Blog.css'



const LikesContainer = ({ blog }) => {
  const blogId = blog.id
  const dispatch = useDispatch()

  return (<>
    <span className="likes-display" id={`blog-likes-display-${blogId}`}>Likes: {blog.likes}</span> &nbsp;
    <button className='like-button' onClick={(() => dispatch(getBlogLikeActionAsync(blogId)))} id={`blog-like-button-${blogId}`}>
            Like
    </button>
  </>)
}




export default LikesContainer