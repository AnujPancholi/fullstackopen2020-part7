import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'


const notificationInitialState = {
  message: '',
  options: {}
}

const notificationReducer = (state = notificationInitialState, action) => {
  switch(action.type){
  case 'NOTIFICATION_SHOW':
    return {
      message: action.message,
      options: action.options
    }
  case 'NOTIFICATION_HIDE':
    return {
      message: '',
      options: {}
    }
  }
}

const reducer = combineReducers({
    notification: notificationReducer
})


const store = createStore(reducer,{
    applyMiddleware(reduxThunk)
})

export default store;

