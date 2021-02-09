import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import RequestRegistration from './pages/Request/Registration'
import Partners from './pages/Partners'
import About from './pages/About'
import Terms from './pages/Terms'
import Laws from './pages/Laws'
import News from './pages/News'
import SingleNews from './pages/SingleNews'
import ContactUs from './pages/ContactUs'

export const NamedRoutes = {
  home: '/',
  about: '/about',
  terms: '/terms',
  laws: '/laws',
  news: '/news',
  singleNews: '/news/:id',
  contact: '/contact',
  requestRegistration: '/replacement-request',
  singleRequest: '/replacement-request/:id',
  partners: '/partners',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={NamedRoutes.home} component={Home}/>
      <Route exact path={NamedRoutes.about} component={About}/>
      <Route exact path={NamedRoutes.terms} component={Terms}/>
      <Route exact path={NamedRoutes.laws} component={Laws}/>
      <Route exact path={NamedRoutes.news} component={News}/>
      <Route exact path={NamedRoutes.singleNews} component={SingleNews}/>
      <Route exact path={NamedRoutes.contact} component={ContactUs}/>
      <Route exact path={NamedRoutes.requestRegistration} component={RequestRegistration}/>
      <Route exact path={NamedRoutes.partners} component={Partners}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
