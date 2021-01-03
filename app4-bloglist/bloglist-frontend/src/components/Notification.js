import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const messageText = useSelector(state => state.notification.message)
  const notifOptions = useSelector(state => state.notification.options || {})

  const getStyle = (isVisible=false) => {
    return {
      width: '25%',
      padding: 10,
      left: '50%',
      transform: 'translate(+25%, 0px)',
      zIndex: 3,
      border: 'solid',
      borderWidth: 1,
      borderRadius: '20px',
      position: 'fixed',
      backgroundColor: notifOptions && notifOptions.type==='error' ? 'red' : 'green',
      display: isVisible ? 'flex' : 'none',
      justifyContent: 'center'
    }
  }
  return (
    <div className={'notification-container'} style={getStyle(typeof(messageText)==='string' && messageText.length>0)}>
      <div>{messageText}</div>
    </div>
  )
}

export default Notification