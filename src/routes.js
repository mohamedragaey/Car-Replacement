import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import RequestRegistration from './pages/Request/Registration'

export const NamedRoutes = {
  home: '/',
  requestRegistration: '/replacement-registration',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route exact path={NamedRoutes.requestRegistration} component={RequestRegistration}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
