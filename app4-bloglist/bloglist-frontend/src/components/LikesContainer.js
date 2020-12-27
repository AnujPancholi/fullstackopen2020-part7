import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getBlogLikeActionAsync } from '../reducers/blogsReducer.js';
import { getFeaturedBlogLikeAction } from '../reducers/featuredBlogReducer.js'


import './css/Blog.css'



const LikesContainer = ({ blog }) => {
  const blogId = blog.id
  const dispatch = useDispatch()

  const performLike = () => {
    dispatch(getBlogLikeActionAsync(blogId))
    dispatch(getFeaturedBlogLikeAction(blogId))
  }

  return (<>
    <span className="likes-display" id={`blog-likes-display-${blogId}`}>Likes: {blog.likes}</span> &nbsp;
    <button className='like-button' onClick={performLike} id={`blog-like-button-${blogId}`}>
            Like
    </button>
  </>)
}




export default LikesContainer