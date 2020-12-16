const notificationInitialState = {
  message: '',
  timeout: null
}

const notificationReducer = (state = notificationInitialState, action) => {
  switch(action.type){
  case 'NOTIFICATION_SHOW':
    action.clearTimeout(state.timeout)
    return {
      message: action.message,
      timeout: action.timeout
    }
  case 'NOTIFICATION_HIDE':
    return {
      message: '',
      timeout: null
    }
  default:
    return state
  }
}


export const getNotificationShowAction = (message,timeout) => {
  return {
    type: 'NOTIFICATION_SHOW',
    message: message,
    timeout: timeout,
    clearTimeout: window.clearTimeout.bind(window)
  }
}

export const getNotificationHideAction = () => {
  return {
    type: 'NOTIFICATION_HIDE'
  }
}



export default notificationReducer