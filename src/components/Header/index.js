import React from 'react'
import {Container, Grid, Toolbar, AppBar} from '@material-ui/core'
import {lg} from '../../utils/ResponsiveUtility'
import MainNavigation from '../MainNavigation'
import MobileMenu from '../MobileMenu'
import {useStyles} from './Styles'
import Logo from '../Logo'

const Header = ({location}) => {
  const classes = useStyles()
  const [width, setWidth] = React.useState(document.body.clientWidth)
  const [state, setState] = React.useState('')
  const Mobile = (width < lg)
  const DesktopAndUp = (width >= lg)

  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    const resizeHeaderOnScroll = () => {
      let distanceY = window.pageYOffset || document.documentElement.scrollTop
      let shrinkOn = 50

      if (distanceY > shrinkOn) {
        setState('shrink')
      } else {
        setState('')
      }
    }
    window.addEventListener('scroll', resizeHeaderOnScroll)
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('scroll', resizeHeaderOnScroll)
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  return (
    <AppBar position="fixed" className={`${classes.header} ${location} ${state}`} id='header' elevation={0}>
      <Toolbar className={classes.headerToolbar}>
        <Container maxWidth='lg'>
          <Grid container justify='space-between' alignItems='center' className={classes.headerGridContainer}>
            {DesktopAndUp &&
            <Grid item className={classes.headerDesktop}>
              <Logo location={location}/>
              <MainNavigation/>
            </Grid>
            }
            {Mobile &&
            <>
              <Logo location={location}/>
              <MobileMenu/>
            </>
            }
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header
