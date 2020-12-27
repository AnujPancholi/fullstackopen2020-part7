import React, { useEffect } from 'react'

import Blog from './Blog.js'
import BlogEntryForm from './BlogEntryForm.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBlogsPopulateActionAsync } from '../reducers/blogsReducer.js'
import { getLogoutAction } from '../reducers/loginReducer.js'

import './css/Blog.css'


const BlogListing = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.auth
  })
  const blogs = useSelector((state) => {
    return state.blogs
  })

  const refreshBlogList = () => {
    dispatch(getBlogsPopulateActionAsync())
  }

  useEffect(() => {
    refreshBlogList()
  }, [])

  const logout = () => {
    dispatch(getLogoutAction())
  }


  return (<div>
    <p>Hello, {user.username} <button onClick={logout}>logout</button> </p>
    <BlogEntryForm user={user} />
    <h2>blogs</h2>
    {blogs.map(blog =>
      <div key={blog.id} className="blog-container">
      <Link to={`blogs/${blog.id}`}>
        {blog.title}
      </Link>
      </div>
    )}
  </div>)
}


export default BlogListing