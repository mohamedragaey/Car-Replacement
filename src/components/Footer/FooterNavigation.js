import React from 'react'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
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
    link: NamedRoutes.positions
  },
  {
    key: 3,
    label: <FormattedMessage id='MainNavigation.link.item3'/>,
    link: NamedRoutes.vacancies
  }
]
let secondMenu = [
  {
    key: 4,
    label: <FormattedMessage id='MainNavigation.link.item4'/>,
    link: NamedRoutes.posts
  },
  {
    key: 5,
    label: <FormattedMessage id='MainNavigation.link.item5'/>,
    link: NamedRoutes.exams
  },
  {
    key: 6,
    label: <FormattedMessage id='MainNavigation.link.item6'/>,
    link: NamedRoutes.company
  }
]

const FooterNavigation = () => {
  const classes = useStyles()
  return (
    <nav className={classes.footerNavigation}>
      <ul>
        {menu.map((item, index) => (
          <li key={item.key}>
            <NavLink exact activeClassName="active" to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul>
        {secondMenu.map((item, index) => (
          <li key={item.key}>
            <NavLink exact activeClassName="active" to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterNavigation
