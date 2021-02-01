import React from 'react'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'

const ReCaptchaHint = () => {
  let classes = useStyles()
  return (
    <div className={classes.ReCaptchaHint}>
      <FormattedMessage id='ReCaptchaHint' />
      <a href="https://policies.google.com/privacy"><FormattedMessage id='ReCaptchaHint.PrivacyPolicy' /></a> <FormattedMessage id='ReCaptchaHint.and' />
      <a href="https://policies.google.com/terms"><FormattedMessage id='ReCaptchaHint.TermsOfService' /></a> <FormattedMessage id='ReCaptchaHint.apply' />
    </div>
  )
}

export default ReCaptchaHint
