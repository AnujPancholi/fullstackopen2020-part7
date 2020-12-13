import React, { useState } from 'react'

import loginService from '../services/login.js'

import CONSTANTS from '../lib/constants.js'

import { useToasts } from 'react-toast-notifications'

import { useSelector, useDispatch } from 'react-redux'
import { getNotificationShowAction,getNotificationHideAction } from '../reducers/notificationReducer.js'
import _ from 'lodash'

const LoginForm = ({ setUser }) => {
  const { addToast } = useToasts()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    performLogin(username,password)
  }


  const performLogin = (username,password) => {
    (async() => {
      console.log(`LOGIN CALLED: ${username}:${password}`)
      try {
        const loginResult = await loginService.login(username,password)
        if(loginResult.data && loginResult.data.message){
          if(loginResult.data.message==='LOGIN SUCCESSFUL'){
            setUser(loginResult.data)
            localStorage.setItem(CONSTANTS.LS_LOGIN_NAME,JSON.stringify(loginResult.data))
          } else {
            throw new Error(loginResult.data.message)
          }
        } else {
          throw new Error('MALFORMED RESPONSE FROM LOGIN SERVICE')
        }

      } catch(e) {
        console.error('performLogin|ERROR',e)
        addToast(e.message || 'AN UNKNOWN ERROR OCCURRED',{
          appearance: 'error',
          autoDismiss: true,
          onDismiss: () => {
            dispatch(getNotificationHideAction())
          }
        },(toastId) => {
          dispatch(getNotificationShowAction(toastId))
        })
      }

    })()
  }


  return (<div>
    <form onSubmit={handleLogin}>
      <div>
          username
        <input
          type="text"
          value={username}
          name="Username"
          id="login-username-entry"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
          password
        <input
          type="password"
          value={password}
          name="Password"
          id="login-password-entry"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" id="login-button">login</button>
    </form>
  </div>)

}


export default LoginForm