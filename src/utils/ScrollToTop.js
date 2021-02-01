import React from 'react'
import { withRouter } from 'react-router-dom'
import { log } from './helpers'

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
      this.onRouteChanged()
    }
  }

  onRouteChanged () {
    log('ROUTE CHANGED')
  }

  render () {
    return null
  }
}

export default withRouter(ScrollToTop)
