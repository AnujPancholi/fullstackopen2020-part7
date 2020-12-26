import React from 'react'

import BlogListing from './BlogListing.js'
import UserStats from './UserStats.js'

import { Switch, Route } from 'react-router-dom'



const MainView = () => {


  return (<div>
    <Switch>
      <Route path='/users/stats'>
        <UserStats />
      </Route>
      <Route path='/'>
        <BlogListing />
      </Route>
    </Switch>

  </div>)
}


export default MainView