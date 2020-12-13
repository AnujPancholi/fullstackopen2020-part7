
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


export const getNotificationShowAction = (message,options) => {
  return {
    type: 'NOTIFICATION_SHOW',
    message,
    options
  }
}

export const getNotificationHideAction = () => {
  return {
    type: 'NOTIFICATION_HIDE'
  }
}



export default notificationReducer