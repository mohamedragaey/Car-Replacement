import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'

const ReCaptcha = ({ handleVerification, action }) => {

  const [captchaResponse, setCaptchaResponse] = React.useState('')
  const onVerifyCaptcha = useCallback((response) => {
    setCaptchaResponse(response)
  }, [])

  React.useEffect(() => {
    if (!!captchaResponse) {
      handleVerification(captchaResponse)
    }
  }, [captchaResponse])
  return (
    <>
      <GoogleReCaptcha runOnlyOnMount={true} action={action} onVerify={onVerifyCaptcha}/>
    </>
  )
}

export default ReCaptcha

ReCaptcha.propTypes = {
  action: PropTypes.string.isRequired,
  handleVerification: PropTypes.func.isRequired
}
