const notificationInitialState = null

const notificationReducer = (state = notificationInitialState, action) => {
  switch(action.type){
  case 'NOTIFICATION_SHOW':
    return action.id
  case 'NOTIFICATION_HIDE':
    return null
  default:
    return state
  }
}


export const getNotificationShowAction = (id) => {
  return {
    type: 'NOTIFICATION_SHOW',
    id: id
  }
}

export const getNotificationHideAction = () => {
  return {
    type: 'NOTIFICATION_HIDE'
  }
}



export default notificationReducer