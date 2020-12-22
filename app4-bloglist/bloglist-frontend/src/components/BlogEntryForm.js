import React, { useState } from 'react'

import './css/BlogEntryForm.css'

import { useDispatch, useSelector } from 'react-redux'

import { getBlogAddActionAsync } from '../reducers/blogsReducer.js'



const BlogEntryForm = () => {

  const [title,setTitle] = useState('')
  const [url,setUrl] = useState('')
  const [isVisible,setIsVisible] = useState(false)
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleAddBlogSubmit = (event) => {
    event.preventDefault()
    dispatch(getBlogAddActionAsync({
      title: title,
      url: url
    },user))
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