import userService from '../services/users.js'
import { getNotificationShowAction, getNotificationHideAction } from './notificationReducer.js'



const initialUserStats = null


const userStatsReducer = (state = initialUserStats,action) => {
  switch (action.type) {
  case 'USER_STATS_POPULATE':
    return action.user_stats
  default:
    return state
  }
}


const getUserStatsPopulateAction = (stats) => {
  return {
    type: 'USER_STATS_POPULATE',
    user_stats: stats
  }
}

export const getUserStatsPopulateActionAsync = () => {
  return (async(dispatch) => {

    try{
      const userStats = await userService.getUsersStats()
      dispatch(getUserStatsPopulateAction(userStats))
    }catch(e){
      dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }

  })
}


export default userStatsReducer