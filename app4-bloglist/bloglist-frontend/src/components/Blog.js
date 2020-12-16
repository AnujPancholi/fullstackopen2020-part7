import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import {useDispatch} from 'react-redux'
import {getNotificationShowAction,getNotificationHideAction} from '../reducers/notificationReducer.js'


import LikesContainer from './LikesContainer.js'

import blogService from '../services/blogs.js'

import './css/Blog.css'





const Blog = ({ blog, refreshBlogList, user }) => {
  const [isDetailsVisible,setIsDetailsVisible] = useState(false)

  const dispatch = useDispatch()
  const { addToast } = useToasts()

  const detailsClassNames = isDetailsVisible ? '' : 'hidden'

  const toggleBlogDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible)
  }


  const performBlogDelete = () => {
    (async() => {
      try{
        const blogDeleteResult = await blogService.deleteBlog(blog.id,user.token)
        refreshBlogList()
        dispatch(getNotificationShowAction('Blog deleted',setTimeout(() => {
          dispatch(getNotificationHideAction())
        },5000)))
      }catch(e){
        dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
          dispatch(getNotificationHideAction())
        },5000)))
      }
    })()
  }

  const addLike = () => {
    return new Promise((resolve,reject) => {
      (async() => {
        try{
          const likeAdditionResult = await blogService.addLikeToBlog(blog.id)
          resolve({
            isSuccessful: true
          })

        }catch(e){
          dispatch(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
            dispatch(getNotificationHideAction())
          },5000))
          reject(e)
        }
      })()
    })
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
        <LikesContainer blog={blog} addLike={addLike} />
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
