import React from 'react'
import {withStyles} from '@material-ui/styles'
import {useStyles} from './Styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class ScrollTop extends React.Component {
  _isMounted = false
  state = {
    intervalId: 0,
    thePosition: false
  }

  componentDidMount () {
    this._isMounted = true
    document.addEventListener('scroll', () => {
      if (this._isMounted) {
        if (window.scrollY > 170) {
          this.setState({thePosition: true})
        } else {
          this.setState({thePosition: false})
        }
      }
    })
    window.scrollTo(0, 0)
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs)
    if (this._isMounted) {
      this.setState({intervalId: intervalId})
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    let {classes} = this.props
    let scrollTopStyle = this.state.thePosition ? `${classes.scrollTop} active` : classes.scrollTop
    return (
      <div className={scrollTopStyle} onClick={this.scrollToTop}>
        <ArrowUpwardIcon/>
      </div>
    )
  }
}

export default withStyles(useStyles)(ScrollTop)
