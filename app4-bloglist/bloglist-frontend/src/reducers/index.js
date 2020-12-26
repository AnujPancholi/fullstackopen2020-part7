import { combineReducers } from 'redux'
import notificationReducer from './notificationReducer.js'
import blogsReducer from './blogsReducer.js'
import loginReducer from './loginReducer.js'
import userStatsReducer from './userStatsReducer'
import featuredUserReducer from './featuredUserReducer.js'



const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  auth: loginReducer,
  user_stats: userStatsReducer,
  featured_user: featuredUserReducer
})

export default reducer
