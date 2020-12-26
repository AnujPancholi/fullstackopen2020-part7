import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MainView from './components/MainView'
import LoginForm from './components/LoginForm.js'
import Notification from './components/Notification.js'
import RouterNavbar from './components/RouterNavbar.js'

import {
  BrowserRouter as Router
} from 'react-router-dom'

//redux stuff
import { getLoginAction } from './reducers/loginReducer.js'


import CONSTANTS from './lib/constants.js'

import { ToastProvider } from 'react-toast-notifications'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)

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
      <Router>
        <ToastProvider>
          <Notification />
          {user===null ? <LoginForm /> : (<><RouterNavbar /><MainView /></>)}
        </ToastProvider>
      </Router>
    </div>
  )
}

export default App