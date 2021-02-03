/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from './Styles'

import taxiMask from './../../../../images/taxiMask.png'
import carMask from './../../../../images/carMask.png'

const InitiativeCars = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.initiativeCarsHeader}>
        <FormattedMessage id='InitiativeCars.Header.title'/>
      </div>
      <div className={classes.initiativeCarsItem}>
        <a href="#">
          <span className={classes.initiativeCarsItemTitle}><FormattedMessage id='InitiativeCars.taxi.title'/></span>
          <img src={taxiMask} alt='taxi'/>
        </a>
      </div>
      <div className={classes.initiativeCarsItem}>
        <a href="#">
          <span className={classes.initiativeCarsItemTitle}><FormattedMessage id='InitiativeCars.car.title'/></span>
          <img src={carMask} alt='car'/>
        </a>
      </div>
    </>
  )
}

export default InitiativeCars
