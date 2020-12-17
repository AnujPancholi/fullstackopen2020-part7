import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const messageText = useSelector(state => state.notification.message)

  const getStyle = (isVisible=false) => {
    return {
      border: 'solid',
      width: '25%',
      padding: 10,
      borderWidth: 1,
      position: 'fixed',
      backgroundColor: 'green',
      display: isVisible ? 'block' : 'none'
    }
  }
  return (
    <div className={'notification-container'} style={getStyle(typeof(messageText)==='string' && messageText.length>0)}>
      {messageText}
    </div>
  )
}

export default Notification