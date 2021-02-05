import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import RequestRegistration from './pages/Request/Registration'
import Positions from './pages/Positions'
import Vacancies from './pages/Vacancies'
import Posts from './pages/Posts'
import Exams from './pages/Exams'
import Company from './pages/Company'

export const NamedRoutes = {
  home: '/',
  requestRegistration: '/replacement-request',
  singleRequest: '/replacement-request/:id',
  positions: '/positions',
  vacancies: '/vacancies',
  posts: '/posts',
  exams: '/exams',
  company: '/company'
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route exact path={NamedRoutes.requestRegistration} component={RequestRegistration}/>
      <Route exact path={NamedRoutes.positions} component={Positions}/>
      <Route exact path={NamedRoutes.vacancies} component={Vacancies}/>
      <Route exact path={NamedRoutes.posts} component={Posts}/>
      <Route exact path={NamedRoutes.exams} component={Exams}/>
      <Route exact path={NamedRoutes.company} component={Company}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
