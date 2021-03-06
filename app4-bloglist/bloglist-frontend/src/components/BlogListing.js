import React, { useEffect } from 'react'

import Blog from './Blog.js'
import BlogEntryForm from './BlogEntryForm.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBlogsPopulateActionAsync } from '../reducers/blogsReducer.js'

import './css/Blog.css'
import {
  Paper
} from '@material-ui/core'


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

  return (<div>
    <BlogEntryForm user={user} />
    <h2>blogs</h2>
    {blogs.map(blog =>
      <Paper elevaion={5} key={blog.id} className="blog-container">
        <Link to={`blogs/${blog.id}`}>
          {blog.title}
        </Link>
      </Paper>
    )}
  </div>)
}


export default BlogListing