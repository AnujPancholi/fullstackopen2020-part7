import { combineReducers } from 'redux'
import notificationReducer from './notificationReducer.js'
import blogsReducer from './blogsReducer.js'
import loginReducer from './loginReducer.js'
import userStatsReducer from './userStatsReducer'
import featuredBlogReducer from './featuredBlogReducer.js'
import featuredUserReducer from './featuredUserReducer.js'
import featuredCommentsReducer from "./featuredCommentsReducer.js"


const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  auth: loginReducer,
  user_stats: userStatsReducer,
  featured_blog: featuredBlogReducer,
  featured_user: featuredUserReducer,
  featured_comments: featuredCommentsReducer
})

export default reducer
