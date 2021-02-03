import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from './Styles'

const InitiativeScope = () => {
  const classes = useStyles()

  return (
    <div className={classes.initiativeScope}>
      <h2 className={classes.initiativeScopeHeader}><FormattedMessage id='InitiativeScope.Header.title'/></h2>
      <div className={classes.initiativeScopeItem}>
        <h3 className={classes.initiativeScopeItemTitle}><FormattedMessage id='InitiativeScope.item.title'/></h3>
        <p><FormattedMessage id='InitiativeScope.item.para'/></p>
      </div>
    </div>
  )
}

export default InitiativeScope
