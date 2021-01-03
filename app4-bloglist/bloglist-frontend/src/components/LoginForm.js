import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { getLoginActionAsync } from '../reducers/loginReducer.js'

import {
  TextField,
  Button
} from '@material-ui/core'
import './css/LoginForm.css'

const LoginForm = () => {
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
    dispatch(getLoginActionAsync(username,password))
  }


  return (<div className="login-form-container">
    <form onSubmit={handleLogin}>
      <div>
        <TextField
          label="Username"
          type="text"
          value={username}
          name="Username"
          id="login-username-entry"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          value={password}
          name="Password"
          id="login-password-entry"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="login-button-container">
        <Button variant="primary" type="submit" id="login-button">login</Button>
      </div>
    </form>
  </div>)

}


export default LoginForm