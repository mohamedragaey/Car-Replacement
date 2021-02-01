import React from 'react'
import {Container, Grid} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {useStyles} from './Styles'
import Logo from '../Logo'
import {lg} from '../../utils/ResponsiveUtility'
import MainNavigation from '../MainNavigation'
import MobileMenu from '../MobileMenu'
import LanguageSwitcher from '../LanguageSwitcher'

const Header = () => {
  const classes = useStyles()
  let [width, setWidth] = React.useState(document.body.clientWidth)
  let Mobile = (width < lg)
  let DesktopAndUp = (width >= lg)
  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  return (
    <AppBar position="fixed" className={classes.header} id='header'>
      <Toolbar className={classes.headerToolbar}>
        <Container maxWidth="lg">
          <Grid container justify='space-between' alignItems='center'>
            {DesktopAndUp &&
            <Grid item className={classes.headerDesktop}>
              <LanguageSwitcher/>
              <MainNavigation/>
            </Grid>
            }
            <Logo/>
            {Mobile &&
            <div>
              <MobileMenu/>
            </div>
            }
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header
