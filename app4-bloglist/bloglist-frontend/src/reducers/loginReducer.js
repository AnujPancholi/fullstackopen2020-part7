

import { getNotificationHideAction,getNotificationShowAction } from './notificationReducer.js'
import loginService from '../services/login.js'
import CONSTANTS from '../lib/constants.js'

const loginInitialState = null

const loginReducer = (state = loginInitialState,action) => {
  switch(action.type){
  case 'AUTH_LOGIN':
    return action.authInfo
  case 'AUTH_LOGOUT':
    return null
  default:
    return state
  }
}



//action creators for login
export const getLoginAction = (authInfo) => {
  return {
    type: 'AUTH_LOGIN',
    authInfo: authInfo
  }
}

export const getLoginActionAsync = (inputUsername,inputPass) => {
  return (async(dispatch) => {
    console.log(`LOGIN CALLED: ${inputUsername}:${inputPass}`)
    try {
      const loginResult = await loginService.login(inputUsername,inputPass)
      if(loginResult.data && loginResult.data.message){
        if(loginResult.data.message!=='LOGIN SUCCESSFUL'){
          throw new Error(loginResult.data.message || 'ERROR IN LOGIN')
        }
        localStorage.setItem(CONSTANTS.LS_LOGIN_NAME,JSON.stringify(loginResult.data))
        dispatch(getLoginAction(loginResult.data))
      } else {
        throw new Error('MALFORMED RESPONSE FROM LOGIN SERVICE')
      }
    } catch(e) {
      console.error('performLogin|ERROR',e)
      dispatch(getNotificationShowAction(e.message || 'AN UNKNOWN ERROR OCCURRED',setTimeout(() => {
        dispatch(getNotificationHideAction())
      },5000),{
        type: 'error'
      }))
    }
  })
}
//---

//action creators for logout
export const getLogoutAction = () => {
  localStorage.removeItem(CONSTANTS.LS_LOGIN_NAME)
  return {
    type: 'AUTH_LOGOUT'
  }
}




export default loginReducer