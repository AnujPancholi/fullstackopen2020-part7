import React from 'react'
import { useSelector } from 'react-redux'



const NotificationContainer = () => {
  const notification_info = useSelector((state) => {
    return state.notification_info
  })

  return (<div className="notification-container">
    {notification_info.message}
  </div>)
}


export default NotificationContainer