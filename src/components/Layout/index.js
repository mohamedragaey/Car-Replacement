import React from 'react'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import ScrollToTop from '../../utils/ScrollToTop'
import ScrollTop from '../ScrollTop/ScrollTop'
import {Routes} from '../../routes'
import {useStyles} from './Styles'

class Layout extends React.PureComponent {
  handleRouteBasedClassName = () => {
    const {location} = this.props
    return location.pathname === '/' ? 'home' : 'inverse-Header'
  }

  render () {
    const {classes} = this.props
    return (
      <div className={`${classes.pageWrapper} ${this.handleRouteBasedClassName()}`}>
        <CssBaseline/>
        <ScrollToTop/>
        <Header/>
        <main className={classes.content}>
          <Routes/>
        </main>
        <ScrollTop scrollStepInPx="50" delayInMs="0"/>
      </div>
    )
  }
}

export default withRouter(withStyles(useStyles)(Layout))
