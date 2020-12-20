import { combineReducers } from 'redux'
import notificationReducer from './notificationReducer.js'
import blogsReducer from './blogsReducer.js'
import loginReducer from './loginReducer.js'



const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  auth: loginReducer
})

export default reducer
