import { combineReducers } from 'redux'
import notificationReducer from './notificationReducer.js'



const reducer = combineReducers({
  notification: notificationReducer
})

export default reducer
