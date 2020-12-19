import React, { useState } from 'react'

import './css/BlogEntryForm.css'

import blogService from '../services/blogs.js'

import {useDispatch} from 'react-redux'
import {getNotificationShowAction,getNotificationHideAction} from '../reducers/notificationReducer.js';



const BlogEntryForm = ({ refreshBlogList, user }) => {

  const [title,setTitle] = useState('')
  const [url,setUrl] = useState('')
  const [isVisible,setIsVisible] = useState(false)

  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleAddBlogSubmit = (event) => {
    (async() => {
      event.preventDefault()
      try{

        if(title.length===0 || url.length===0){
          console.log('handleAddBlogSubmit err condition')
          throw new Error('Fields cannot be empty')
        }

        const addBlogResult = await blogService.addNewBlog({
          title: title,
          url: url
        },user.token)

        dispatch(getNotificationShowAction(`Blog "${title}" added`,setTimeout(() => {
          dispatch(getNotificationHideAction())
        },5000)))

        refreshBlogList()

      }catch(e){
        console.error('BlogEntryForm|ERROR',e.message)
        dispatch(getNotificationShowAction(e.message || 'AN ERROR OCCURRED',setTimeout(() => {
          dispatch(getNotificationHideAction())
        },5000),{
          type: 'error'
        }))
      }
    })()
  }

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible)
  }


  return (<div>
    <form onSubmit={handleAddBlogSubmit} className={isVisible ? '' : 'hidden'}>
      <div>
          Title
        <input
          type="text"
          value={title}
          name="Title"
          id='blog-input-title'
          onChange={handleTitleChange}
        />
      </div>
      <div>
          URL
        <input
          type="text"
          value={url}
          name="URL"
          id='blog-input-url'
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit" id='blog-input-add-button'>Add</button>
    </form>
    <button onClick={toggleFormVisibility} id='blog-input-hide-button' className={isVisible ? '' : 'hidden'}>
          Hide
    </button>
    <button onClick={toggleFormVisibility} id='blog-input-show-button' className={isVisible ? 'hidden' : ''}>
          Add new blog
    </button>
  </div>)


}



export default BlogEntryForm