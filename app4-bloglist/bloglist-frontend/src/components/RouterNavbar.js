import React from 'react'

import './css/RouterNavbar.css'

import {
  Link
} from 'react-router-dom'


const RouterNavbar = () => {
  return (<div>
    <Link className={'nav-link'} to="/">
            Blogs
    </Link>
    <Link className={'nav-link'} to="/users/stats">
            Users
    </Link>
  </div>)
}


export default RouterNavbar