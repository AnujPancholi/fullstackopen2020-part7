import React from 'react'

import BlogListing from './BlogListing.js'
import UserStats from './UserStats.js'
import UserView from './UserView.js'

import { Switch, Route, Router } from 'react-router-dom'
import BlogView from './BlogView.js'



const MainView = () => {


  return (<div>
    <Switch>
      <Route path='/users/fetch/:userId'>
        <UserView />
      </Route>
      <Route path='/users/stats'>
        <UserStats />
      </Route>
      <Route path='/blogs/:blogId'>
        <BlogView />
      </Route>
      <Route path='/'>
        <BlogListing />
      </Route>
    </Switch>

  </div>)
}


export default MainView