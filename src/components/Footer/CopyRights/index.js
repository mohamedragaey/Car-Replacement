import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from './Styles'

const CopyRights = () => {
  const classes = useStyles()

  return (
    <div className={classes.copyRights}>
      <h6 className={classes.copyRightsTitle}>
        <FormattedMessage id='footer.copyRights.title'/></h6>
      <p className={classes.copyRightsSmall}>
        <FormattedMessage id='footer.copyRights.title.small'/>
      </p>
    </div>
  )
}
export default CopyRights
