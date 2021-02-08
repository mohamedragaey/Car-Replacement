import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import RequestRegistration from './pages/Request/Registration'
import Positions from './pages/Positions'
import Vacancies from './pages/Vacancies'
import Exams from './pages/Exams'
import Company from './pages/Company'
import Partners from './pages/Partners'
import About from './pages/About'
import Terms from './pages/Terms'
import Laws from './pages/Laws'

export const NamedRoutes = {
  home: '/',
  about: '/about',
  terms: '/terms',
  laws: '/laws',
  requestRegistration: '/replacement-request',
  singleRequest: '/replacement-request/:id',
  positions: '/positions',
  vacancies: '/vacancies',
  partners: '/partners',
  exams: '/exams',
  company: '/company'
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route exact path={NamedRoutes.about} component={About}/>
      <Route exact path={NamedRoutes.terms} component={Terms}/>
      <Route exact path={NamedRoutes.laws} component={Laws}/>
      <Route exact path={NamedRoutes.requestRegistration} component={RequestRegistration}/>
      <Route exact path={NamedRoutes.positions} component={Positions}/>
      <Route exact path={NamedRoutes.vacancies} component={Vacancies}/>
      <Route exact path={NamedRoutes.partners} component={Partners}/>
      <Route exact path={NamedRoutes.exams} component={Exams}/>
      <Route exact path={NamedRoutes.company} component={Company}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
