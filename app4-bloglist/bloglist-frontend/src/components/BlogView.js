import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import LikesContainer from './LikesContainer.js'
import CommentsView from './CommentsView.js'

import { getFeaturedBlogSetActionAsync, getFeaturedBlogResetAction } from '../reducers/featuredBlogReducer.js'
import { getBlogDeleteActionAsync } from '../reducers/blogsReducer.js'


const BlogView = () => {

  const urlParams = useParams()
  const history = useHistory()
  const blogId = urlParams.blogId
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)
  const blog = useSelector((state) => {
    return state.featured_blog
  })

  useEffect(() => {
    dispatch(getFeaturedBlogSetActionAsync(blogId))
  },[])

  const performBlogDelete = () => {
    dispatch(getBlogDeleteActionAsync(blog.id,user.token))
    dispatch(getFeaturedBlogResetAction())
    history.push('/')
  }

  return blog ? (<div>
    <h2>
      {blog.title}
    </h2>

    <div>
            View it here:
      <a href={blog.url}>
        {blog.url}
      </a>
    </div>

    <div>
            By: {blog.author}
    </div>
    <LikesContainer blog={blog} />
    <button onClick={performBlogDelete} id={`blog-delete-button-${blog.id}`} className={user && blog.user && blog.user.id===user.id ? '' : 'hidden'}>
          Delete
    </button>

    <CommentsView blogId={blog.id}/>

  </div>) : (<div>
        No such blog found.
  </div>)

}


export default BlogView