import React from 'react'
import * as yup from 'yup'
import { FormattedMessage } from 'react-intl'

export const LoginFormValidation = yup.object().shape({
  email: yup.string()
    .email(<FormattedMessage id='validationSchema.validEmail'/>)
    .required(<FormattedMessage id='validationSchema.required'/>),
  password: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  reCaptcha: yup.string().trim().required(<FormattedMessage id='validationSchema.reCaptcha'/>)
})

export const IntroFormValidation = yup.object().shape({
  requestNumber: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  nationalId: yup.string().required(<FormattedMessage id='validationSchema.required'/>)
})

export const requestStep1FormValidation = yup.object().shape({
  ownerNationalId: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .matches(/^[0-9]+$/, { message: <FormattedMessage id='validationSchema.socialNumberOnlyNumbers'/> })
    .matches(/(2|3)[0-9][0-9][0-1][0-9][0-3][0-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/, {
      message: <FormattedMessage id='validationSchema.socialNumberInvalid'/>
    })
    .min(14, <FormattedMessage id='validationSchema.socialNumberLengthMin'/>)
    .max(14, <FormattedMessage id='validationSchema.socialNumberLengthMax'/>),
  ownerEmail: yup.string().trim()
    .required(<FormattedMessage id='validationSchema.required'/>)
    .email(<FormattedMessage id='validationSchema.validEmail'/>),
  ownerFakeMobile: yup.string().trim(),//catch hack
  ownerOTPMobile: yup.string().trim(),
  ownerOTPMobileVerificationCode1: yup.string().when('ownerOTPMobile', (val) => {
    return (!!val && val.length > 3) ?
      yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
      : yup.string().trim()
  }),
  ownerOTPMobileVerificationCode2: yup.string().when('ownerOTPMobile', (val) => {
    return (!!val && val.length > 3) ?
      yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
      : yup.string().trim()
  }),
  ownerOTPMobileVerificationCode3: yup.string().when('ownerOTPMobile', (val) => {
    return (!!val && val.length > 3) ?
      yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
      : yup.string().trim()
  }),
  ownerOTPMobileVerificationCode4: yup.string().when('ownerOTPMobile', (val) => {
    return (!!val && val.length > 3) ?
      yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
      : yup.string().trim()
  }),
  ownerMobile: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .min(13, <FormattedMessage id='validationSchema.required'/>)
    .max(17, <FormattedMessage id='validationSchema.required'/>),
  ownerSecondaryMobile: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>),
  licenseNumberType: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>),
  licenseNumberFirstLetter: yup.string().when('licenseNumberType', (val) => {
    return (val === '1') ?
      yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
      : yup.string().trim()
  }),
  licenseNumberSecondLetter: yup.string().trim(),
  licenseNumberThirdLetter: yup.string().trim(),
  licenseNumberNumbers: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .matches(/^[0-9]+$/, { message: <FormattedMessage id='validationSchema.licenseNumberNumbersOnlyNumbers'/> }),
  vehicleMake: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>),
  vehicleModel: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>),
  vehicleManufactureYear: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .min(4, <FormattedMessage id='validationSchema.invalidYear'/>)
    .max(4, <FormattedMessage id='validationSchema.invalidYear'/>),
  vehicleChassisNumber: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .matches(/^[0-9]+$/, { message: <FormattedMessage id='validationSchema.vehicleChassisNumberOnlyNumbers'/> }),
  vehicleEngineNumber: yup.string().trim().required(<FormattedMessage id='validationSchema.required'/>)
    .matches(/^[0-9]+$/, { message: <FormattedMessage id='validationSchema.vehicleEngineNumberOnlyNumbers'/> }),
  reCaptcha: yup.string().trim().required(<FormattedMessage id='validationSchema.reCaptcha'/>)
})
