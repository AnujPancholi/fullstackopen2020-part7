import _ from 'lodash'

import { getNotificationHideAction,getNotificationShowAction } from './notificationReducer.js'
import blogService from '../services/blogs.js'

const blogsInitialState = []

const blogsReducer = (state = blogsInitialState, action) => {
  switch (action.type) {
  case 'BLOGS_POPULATE':
    return Array.isArray(action.blogs) ? action.blogs : state
  case 'BLOGS_LIKE':
    return _.map(state,(blog) => _.merge(
      {},
      blog,
      blog.id===action.blogId ? {
        'likes': blog.likes+1
      } : {}
    )
    )
  case 'BLOG_DELETE':
    return _.filter(state,(blog) => blog.id!==action.blogId)
  default:
    return state
  }
}

//action creators for fetching all blogs
export const getBlogsPopulateAction = (blogs) => {
  return {
    type: 'BLOGS_POPULATE',
    blogs: blogs
  }
}


export const getBlogsPopulateActionAsync = () => {
  return (async(dispatch) => {
    try{
      const blogs = await blogService.getAll()
      dispatch(getBlogsPopulateAction(blogs))
    }catch(e){
      dispatch(getBlogsPopulateAction([]))
    }
  })
}
//---

//action creators for liking a blog
export const getBlogLikeAction = (id) => {
  return {
    type: 'BLOGS_LIKE',
    blogId: id
  }
}

export const getBlogLikeActionAsync = (id) => {
  return (async(dispatch) => {
    try{
      const blogLikeResult = await blogService.addLikeToBlog(id)
      dispatch(getBlogLikeAction(id))
    }catch(e){
      console.error('getBlogLikeActionAsync|ERROR',e)
      dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }
  })
}
//---

//action creators for deleting a blog
export const getBlogDeleteAction = (id) => {
  return {
    type: 'BLOG_DELETE',
    blogId: id
  }
}

export const getBlogDeleteActionAsync = (id,token) => {
  return (async(dispatch) => {
    try{
      const blogDeleteResult = await blogService.deleteBlog(id,token)
      dispatch(getBlogDeleteAction(id))
      dispatch(getNotificationShowAction('Blog deleted',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000)))

    }catch(e){
      console.error('getBlogDeleteActionAsync|ERROR',e)
      dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))

    }
  })
}

//---

export default blogsReducer


