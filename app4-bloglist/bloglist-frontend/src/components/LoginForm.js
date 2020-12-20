import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { getLoginActionAsync } from '../reducers/loginReducer.js'

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