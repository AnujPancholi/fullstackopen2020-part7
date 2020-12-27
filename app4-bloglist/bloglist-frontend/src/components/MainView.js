import React from 'react'

import BlogListing from './BlogListing.js'
import UserStats from './UserStats.js'

import { Switch, Route } from 'react-router-dom'
import BlogView from './BlogView.js'



const MainView = () => {


  return (<div>
    <Switch>
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