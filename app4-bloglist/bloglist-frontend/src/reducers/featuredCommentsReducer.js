import commentService from '../services/comments.js'

import { getNotificationHideAction,getNotificationShowAction } from './notificationReducer.js'




const initialCommentsValue = []

const featuredCommentsReducer = (state = initialCommentsValue,action) => {
  switch(action.type){
  case 'FEATURED_COMMENTS_SET':
    return action.comments
  case 'FEATURED_COMMENTS_ADD':
    return state.concat(action.comment)
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

const getAddCommentAction = (comment) => {
  return {
    type: 'FEATURED_COMMENTS_ADD',
    comment: comment
  }
}

export const getAddCommentActionAsync = (comment,user) => {
  return (async(dispatch) => {
    try{
      const commentAddResult = await commentService.addComment(comment,user)
      const commentUser = {
        ...user,
        _id: user.id
      }
      delete commentUser.id
      delete commentUser.token
      commentAddResult._id = commentAddResult.id
      delete commentAddResult.id
      commentAddResult.user = commentUser
      dispatch(getAddCommentAction(commentAddResult))
    }catch(e){
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