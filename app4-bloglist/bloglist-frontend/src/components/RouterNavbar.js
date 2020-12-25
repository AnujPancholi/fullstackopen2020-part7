import React from 'react'

import {
  Link
} from 'react-router-dom'


const RouterNavbar = () => {


  return (<div>
    <Link to="/">
            Blogs
    </Link>
    <Link to="/users/stats">
            Users
    </Link>
  </div>)
}


export default RouterNavbar