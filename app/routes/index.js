import React from 'react'
import { IndexRoute, Redirect, Route } from 'react-router'
import App from '../containers/App'
import HomeView from '../views/HomeView'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Redirect from="*" to="/" />
  </Route>
)
