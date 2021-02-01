import React from 'react'
import * as yup from 'yup'
import {FormattedMessage} from 'react-intl'

export const LoginFormValidation = yup.object().shape({
  email: yup.string()
    .email(<FormattedMessage id='validationSchema.validEmail'/>)
    .required(<FormattedMessage id='validationSchema.required'/>),
  password: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  reCaptcha: yup.string().trim().required(<FormattedMessage id='validationSchema.reCaptcha'/>)
})
