import React from 'react'
import PropTypes from 'prop-types'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'

const ReCaptcha = ({ handleVerification, action }) => {
  return (
    <>
      <GoogleReCaptcha action={action} onVerify={token => handleVerification(token)}/>
    </>
  )
}

export default ReCaptcha

ReCaptcha.propTypes = {
  action: PropTypes.string.isRequired,
  handleVerification: PropTypes.func.isRequired
}
