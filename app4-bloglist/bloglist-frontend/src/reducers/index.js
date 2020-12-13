import { combineReducers } from 'redux'
import notificationReducer from './notificationReducer.js'
import blogsReducer from './blogsReducer.js'



const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer
})

export default reducer
