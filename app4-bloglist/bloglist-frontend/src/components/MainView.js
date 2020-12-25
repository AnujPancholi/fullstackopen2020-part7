import React from 'react'

import BlogListing from './BlogListing.js'

import { Switch, Route } from 'react-router-dom'



const MainView = () => {


  return (<div>
    <Switch>
      <Route path='/users/stats'>
        Nothing here as of now
      </Route>
      <Route path='/'>
        <BlogListing />
      </Route>
    </Switch>

  </div>)
}


export default MainView