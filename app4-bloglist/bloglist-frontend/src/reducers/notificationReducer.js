const notificationInitialState = {
  message: '',
  timeout: null,
  options: {}
}

const notificationReducer = (state = notificationInitialState, action) => {
  switch(action.type){
  case 'NOTIFICATION_SHOW':
    action.clearTimeout(state.timeout)
    return {
      message: action.message,
      timeout: action.timeout,
      options: action.options || {}
    }
  case 'NOTIFICATION_HIDE':
    return {
      message: '',
      timeout: null,
      options: {}
    }
  default:
    return state
  }
}


export const getNotificationShowAction = (message,timeout,options={}) => {
  return {
    type: 'NOTIFICATION_SHOW',
    message: message,
    timeout: timeout,
    options: options,
    clearTimeout: window.clearTimeout.bind(window)
  }
}

export const getNotificationHideAction = () => {
  return {
    type: 'NOTIFICATION_HIDE'
  }
}



export default notificationReducer