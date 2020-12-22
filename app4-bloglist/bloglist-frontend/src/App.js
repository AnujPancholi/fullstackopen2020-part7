import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import BlogListing from './components/BlogListing.js'
import LoginForm from './components/LoginForm.js'
import Notification from './components/Notification.js'

import { getLoginAction } from './reducers/loginReducer.js'


import CONSTANTS from './lib/constants.js'

import { ToastProvider } from 'react-toast-notifications'

const App = () => {

  const dispatch = useDispatch()

  // const [user,setUser] = useState(null)
  const user = useSelector((state) => state.auth)

  const setUser = (authInfo) => {
    dispatch(getLoginAction(authInfo))
  }

  useEffect(() => {
    const currentLoginBlob = localStorage.getItem(CONSTANTS.LS_LOGIN_NAME)
    let currUser = null
    try{
      if(currentLoginBlob){
        currUser = JSON.parse(currentLoginBlob)
        if(currUser){
          dispatch(getLoginAction(currUser))
        } else {
          dispatch(getLoginAction({}))
        }
      }
    }catch(e){
      console.error('USER|ERROR|MALFORMED USER BLOB',e)
    }
  },[])

  console.log('STATE: USER: ',user)

  return (
    <div>
      <ToastProvider>
        <Notification />
        {user===null ? <LoginForm /> : <BlogListing />}
      </ToastProvider>
    </div>
  )
}

export default App