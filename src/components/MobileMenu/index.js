import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import {GeneralConsumer} from '../../GeneralContext'
import MainNavigation from '../MainNavigation'
import {useStyles} from './Styles'

const MobileMenu = () => {
  const classes = useStyles()

  return (
    <GeneralConsumer>{({mobileMenuState, toggleMobileMenuDrawer}) => (
      <>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="open drawer"
          onClick={() => toggleMobileMenuDrawer(true)}
        >
          <MenuIcon/>
        </IconButton>
        <Drawer className={classes.navigationDrawerWrapper} anchor='right' open={mobileMenuState}
                onClose={() => toggleMobileMenuDrawer(false)}>
          <div className={classes.navigationDrawer}>
            <IconButton
              edge="end"
              className={classes.menuCloseButton}
              color="inherit"
              aria-label="close drawer"
              onClick={() => toggleMobileMenuDrawer(true)}
            >
              <CloseIcon/>
            </IconButton>
            <MainNavigation/>
          </div>
        </Drawer>
      </>
    )}
    </GeneralConsumer>
  )
}

export default MobileMenu
