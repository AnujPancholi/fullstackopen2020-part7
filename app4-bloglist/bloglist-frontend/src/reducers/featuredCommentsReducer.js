import commentService from '../services/comments.js'

import { getNotificationHideAction,getNotificationShowAction } from './notificationReducer.js'




const initialCommentsValue = []

const featuredCommentsReducer = (state = initialCommentsValue,action) => {
  switch(action.type){
  case 'FEATURED_COMMENTS_SET':
    return action.comments
  case 'FEATURED_COMMENTS_RESET':
    return []
  default:
    return state
  }
}


const getFeaturedCommentsSetAction = (comments) => {
  return {
    type: 'FEATURED_COMMENTS_SET',
    comments: comments
  }
}

export const getFeaturedCommentsSetActionAsync = (blogId) => {
  return (async(dispatch) => {
    try{
      const comments = await commentService.getCommentsForBlog(blogId)
      dispatch(getFeaturedCommentsSetAction(comments))

    }catch(e){
      dispatch(getFeaturedCommentsResetAction())
      dispatch(getNotificationShowAction(e.message || 'AN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }
  })
}


export const getFeaturedCommentsResetAction = () => {
  return {
    type: 'FEATURED_COMMENTS_RESET'
  }
}

export default featuredCommentsReducer