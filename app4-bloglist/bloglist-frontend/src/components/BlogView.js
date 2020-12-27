import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getFeaturedBlogSetActionAsync } from '../reducers/featuredBlogReducer.js'


const BlogView = () => {

  const urlParams = useParams()
  const blogId = urlParams.blogId;
  const dispatch = useDispatch()
  const blog = useSelector((state) => {
    return state.featured_blog
  })

  useEffect(() => {
    dispatch(getFeaturedBlogSetActionAsync(blogId))
  },[])


  return blog ? (<div>
    <h2>
      {blog.title}
    </h2>

    <span>
            View it here:
      <a href={blog.url}>
        {blog.url}
      </a>
    </span>

    <span>
            By: {blog.author}
    </span>


  </div>) : (<div>
        No such blog found.
  </div>)

}


export default BlogView