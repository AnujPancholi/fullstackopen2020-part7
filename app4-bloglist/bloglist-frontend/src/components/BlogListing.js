import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Blog from './Blog.js'
import BlogEntryForm from './BlogEntryForm.js'
import { useDispatch, useSelector } from 'react-redux'

import { getBlogsPopulateActionAsync } from '../reducers/blogsReducer.js'
import { getLogoutAction } from '../reducers/loginReducer.js'


const BlogListing = ({ }) => {
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
      <Blog key={blog.id} blog={blog} user={user} />
    )}
  </div>)
}

BlogListing.propTypes = {
  user: PropTypes.object.isRequired
}

export default BlogListing