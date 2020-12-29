import React from 'react'

import './css/RouterNavbar.css'

import { getLogoutAction } from '../reducers/loginReducer.js'

import { useSelector, useDispatch } from 'react-redux'
import {
  Link
} from 'react-router-dom'


const RouterNavbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(getLogoutAction())
  }

  return (<div className="nav-container">
    <div className="nav-user-container">Hello, {user ? user.username : 'guest'} <button onClick={logout}>logout</button> </div>
    <div>
    <Link className={'nav-link'} to="/">
            Blogs
    </Link>
    <Link className={'nav-link'} to="/users/stats">
            Users
    </Link>
    </div>
  </div>)
}


export default RouterNavbar