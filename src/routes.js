import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import RequestRegistration from './pages/Request/Registration'
import Positions from './pages/Positions'
import Vacancies from './pages/Vacancies'
import Exams from './pages/Exams'
import Company from './pages/Company'
import ImplementationPartners from './pages/ImplementationPartners'

export const NamedRoutes = {
  home: '/',
  requestRegistration: '/replacement-registration',
  positions: '/positions',
  vacancies: '/vacancies',
  implementationPartners: '/implementation-partners',
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
      <Route exact path={NamedRoutes.implementationPartners} component={ImplementationPartners}/>
      <Route exact path={NamedRoutes.exams} component={Exams}/>
      <Route exact path={NamedRoutes.company} component={Company}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
