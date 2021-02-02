import React from 'react'
import {Link} from 'react-router-dom'
import logoImage from './../../images/logoTamweel.png'
import ministryLogoImage from './../../images/Ministry_of_Finance_logo.png'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'

const Logo = ({location}) => {
  const classes = useStyles()
  const locationClass = location !== 'home' ? 'inner' : ''

  return (
    <div className={`${classes.logo} ${locationClass}`}>
      <Link to="/" className={classes.ministryLogo}>
        <img alt='Ministry_of_Finance_logo' className={classes.ministryLogoImage} src={ministryLogoImage}/>
      </Link>
      <Link to="/" className={classes.tamweelLogo}> <img alt='logo' src={logoImage}/> </Link>
      {location !== 'home' && <Link to="/" className={classes.innerLogo}>
        <FormattedMessage id='logo.innerLogo'/>
      </Link>}
    </div>
  )
}

export default Logo
