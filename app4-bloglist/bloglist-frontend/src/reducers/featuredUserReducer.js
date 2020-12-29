import userService from '../services/users.js'
import { getNotificationShowAction, getNotificationHideAction } from './notificationReducer.js'

const initialFeaturedUser = null

const featuredUserReducer = (state = initialFeaturedUser, action) => {
  switch (action.type) {
  case 'FEATURED_USER_POPULATE':
    return action.user
  case 'FEATURED_USER_RESET':
    return null
  default:
    return state
  }
}

const getFeaturedUserPopulateAction = (user) => {

  return {
    type: 'FEATURED_USER_POPULATE',
    user: user
  }

}


export const getFeaturedUserPopulateActionAsync = (userId) => {

  return (async(dispatch) => {
    try{
      const user = await userService.getUser(userId)
      dispatch(getFeaturedUserPopulateAction(user))
    }catch(e){
      dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }
  })

}

export const getFeaturedUserResetAction = () => {
  return {
    type: 'FEATURED_USER_RESET'
  }
}

export default featuredUserReducer