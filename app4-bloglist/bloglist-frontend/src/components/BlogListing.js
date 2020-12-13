import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Blog from './Blog.js'
import BlogEntryForm from './BlogEntryForm.js'
import { useDispatch, useSelector } from 'react-redux'

import { getBlogsPopulateActionAsync } from '../reducers/blogsReducer.js'

import CONSTANTS from '../lib/constants.js'


const BlogListing = ({ user,setUser }) => {
  const dispatch = useDispatch()
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
    localStorage.removeItem(CONSTANTS.LS_LOGIN_NAME)
    setUser(null)
  }


  return (<div>
    <p>Hello, {user.username} <button onClick={logout}>logout</button> </p>
    <BlogEntryForm refreshBlogList={refreshBlogList} user={user} />
    <h2>blogs</h2>
    {blogs.map(blog =>
      <Blog key={blog.id} blog={blog} refreshBlogList={refreshBlogList} user={user} />
    )}
  </div>)
}

BlogListing.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default BlogListing