import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ScrollToTop from '../../utils/ScrollToTop'
import ScrollTop from '../ScrollTop/ScrollTop'
import { Routes } from '../../routes'
import { useStyles } from './Styles'
import Header from '../Header'
import Footer from '../Footer'

class Layout extends React.PureComponent {
  handleRouteBasedClassName = () => {
    const { location } = this.props
    return location.pathname === '/' ? 'home' : 'inverse-Header'
  }

  render () {
    const { classes } = this.props
    return (
      <div className={`${classes.pageWrapper} ${this.handleRouteBasedClassName()}`}>
        <CssBaseline/>
        <ScrollToTop/>
        <Header location={this.handleRouteBasedClassName()}/>
        <main className={classes.content}>
          <Routes/>
        </main>
        <Footer/>
        <ScrollTop scrollStepInPx="50" delayInMs="0"/>
      </div>
    )
  }
}

export default withRouter(withStyles(useStyles)(Layout))
