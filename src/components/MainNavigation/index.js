import React from 'react'
import {Fade} from 'react-reveal'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {GeneralConsumer} from '../../GeneralContext'
import {NamedRoutes} from '../../routes'
import {useStyles} from './Styles'

let menu = [
  {
    key: 1,
    label: <FormattedMessage id='MainNavigation.link.item1'/>,
    link: NamedRoutes.home
  },
  {
    key: 2,
    label: <FormattedMessage id='MainNavigation.link.item2'/>,
    link: NamedRoutes.requestRegistration
  },
]
const MainNavigation = () => {
  const classes = useStyles()
  return (
    <GeneralConsumer>{({toggleMobileMenuDrawer}) => (
      <nav className={classes.mainNavigation}>
        {menu.map((item, index) => (
          <Fade bottom delay={index * 200} key={item.key}>
            <NavLink
              exact
              activeClassName="active"
              to={item.link}
              onClick={() => toggleMobileMenuDrawer(false)}
            >
              {item.label}
            </NavLink>
          </Fade>
        ))}
      </nav>
    )}
    </GeneralConsumer>
  )
}

export default MainNavigation
