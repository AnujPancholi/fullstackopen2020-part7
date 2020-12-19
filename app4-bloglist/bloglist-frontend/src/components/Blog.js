import React, { useState } from 'react'
import { useDispatch } from 'react-redux'



import LikesContainer from './LikesContainer.js'


import './css/Blog.css'
import { getBlogDeleteActionAsync } from '../reducers/blogsReducer.js'





const Blog = ({ blog, refreshBlogList, user }) => {
  const [isDetailsVisible,setIsDetailsVisible] = useState(false)

  const dispatch = useDispatch()

  const detailsClassNames = isDetailsVisible ? '' : 'hidden'

  const toggleBlogDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible)
  }


  const performBlogDelete = () => {
    dispatch(getBlogDeleteActionAsync(blog.id,user.token))
  }

  return (
    <div className="blog-container" id={`blog-container-${blog.id}`}>
      <div className="blog-title" data-title={blog.title} data-blogid={blog.id} data-userid={blog.user.id}>
        {blog.title}<br />
        by {blog.author}
      </div>
      <div className={detailsClassNames}>
        <hr />
        Blog URL: {blog.url}<br />
        <LikesContainer blog={blog} />
        <button onClick={performBlogDelete} id={`blog-delete-button-${blog.id}`} className={user && blog.user && blog.user.id===user.id ? '' : 'hidden'}>
          Delete
        </button>
      </div>
      <button onClick={toggleBlogDetailsVisibility} className="blog-details-vis-button" id={`blog-details-vis-button-${blog.id}`}>
        {isDetailsVisible ? 'Close Details' : 'View Details'}
      </button>
    </div>
  )

}

export default Blog
