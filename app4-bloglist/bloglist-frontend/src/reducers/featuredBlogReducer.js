import blogService from '../services/blogs.js'

import { getNotificationHideAction,getNotificationShowAction } from './notificationReducer.js'


const initialFeaturedBlog = null

const featuredBlogReducer = (state = initialFeaturedBlog, action) => {

  switch (action.type) {
  case 'FEATURED_BLOG_SET':
    return action.blog
  case 'FEATURED_BLOG_RESET':
    return null
  default:
    return state
  }
}

const getFeaturedBlogSetAction = (blog) => {
  return {
    type: 'FEATURED_BLOG_SET',
    blog: blog
  }
}

export const getFeaturedBlogSetActionAsync = (blogId) => {
  return (async(dispatch) => {
    try{
      const blog = await blogService.get(blogId)
      dispatch(getFeaturedBlogSetAction(blog))
    }catch(e){
      dispatch(getNotificationShowAction(e.message || 'AN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }
  })
}

export const getFeaturedBlogResetAction = () => {
  return {
    type: 'FEATURED_BLOG_RESET'
  }
}

export default featuredBlogReducer