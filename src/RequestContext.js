import React, { createContext } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import PersonIcon from '@material-ui/icons/Person'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CheckIcon from '@material-ui/icons/Check'
import RequestStep1 from './components/Request/Steps/Step1'

const RequestContext = createContext({})

const RequestProvider = ({ children, pageAction, rid }) => {
  const intl = useIntl()
  const [requestData, setRequestData] = React.useState({})

  React.useEffect(() => {
    // eslint-disable-next-line
    if (!!rid && !!parseInt(rid)) {
      // getRequestData(rid)
    }
  }, [rid])

  const requestStep1Submit = (values, FormikActions, closeDialog) => {
    console.log(values, FormikActions, closeDialog)
  }


  const [requestActiveStep, setRequestActiveStep] = React.useState(0)
  const [requestStepsTrail, setRequestStepsTrail] = React.useState(new Set())
  const [requestStepsCompleted, setRequestStepsCompleted] = React.useState(new Set())
  const requestSteps = [
    {
      key: 0,
      title: <FormattedMessage id='CarReplacement.request.registration.step1.title'/>,
      icon: <PersonIcon/>,
      content: <RequestStep1 requestData={requestData} onSubmit={requestStep1Submit}/>
    },
    {
      key: 1,
      title: <FormattedMessage id='CarReplacement.request.registration.step2.title'/>,
      icon: <VerifiedUserIcon/>,
      content: 'test1'//<RequestStep2/>
    },
    {
      key: 2,
      title: <FormattedMessage id='CarReplacement.request.registration.step3.title'/>,
      icon: <DirectionsCarIcon/>,
      content: 'test2'// <RequestStep3/>
    },
    {
      key: 3,
      title: <FormattedMessage id='CarReplacement.request.registration.step4.title'/>,
      icon: <AttachMoneyIcon/>,
      content: 'test3'//<RequestStep4/>
    },
    {
      key: 4,
      title: <FormattedMessage id='CarReplacement.request.registration.step5.title'/>,
      icon: <AttachFileIcon/>,
      content: 'test4'//<RequestStep5/>
    },
    {
      key: 5,
      title: <FormattedMessage id='CarReplacement.request.registration.step6.title'/>,
      icon: <CheckIcon/>,
      content: 'test4'//<RequestStep5/>
    }
  ]

  const getRequestStepContent = (stepIndex) => {
    let content = ''
    if (stepIndex >= 0 && stepIndex < requestSteps.length) {
      content = requestSteps[stepIndex].content
    }
    return content
  }

  const handleNextStep = () => {
    const newCompleted = new Set(requestStepsCompleted)
    newCompleted.add(requestActiveStep)
    setRequestStepsCompleted(newCompleted)

    const newStepsTrail = new Set(requestStepsTrail)
    newStepsTrail.add(requestActiveStep + 1)
    setRequestStepsTrail(newStepsTrail)

    setRequestActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBackStep = () => {
    setRequestActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleGoToStep = (step) => {
    setRequestActiveStep(step)
  }

  const isRequestStepComplete = (step) => {
    return requestStepsCompleted.has(step)
  }

  const inRequestStepsTrail = (step) => {
    return requestStepsTrail.has(step)
  }


  const [verifyNewPhoneLoading, setVerifyNewPhoneLoading] = React.useState(false)
  const [verifyNewPhoneFailure, setVerifyNewPhoneFailure] = React.useState(false)
  const [verifyNewPhoneFailureMessage, setVerifyNewPhoneFailureMessage] = React.useState('')
  const [verifyNewPhoneSuccess, setVerifyNewPhoneSuccess] = React.useState(false)
  const [confirmNewPhoneSuccess, setConfirmNewPhoneSuccess] = React.useState(false)

  const [newPhoneNumber, setNewPhoneNumber] = React.useState(null)
  const [newPhoneNumberUUID, setNewPhoneNumberUUID] = React.useState(null)

  const verifyNewPhoneNumber = (newPhoneNumber) => {
    setNewPhoneNumber(newPhoneNumber)
    setVerifyNewPhoneFailure(false)
    setVerifyNewPhoneFailureMessage('')
    setVerifyNewPhoneSuccess(false)
    setVerifyNewPhoneLoading(true)

    // UserServices.verifyPhone(newPhoneNumber, { headers: { 'Authorization': `Bearer ${keycloak?.token ?? ''}` } }, setVerifyNewPhoneLoading, setVerifyNewPhoneFailure).then((result) => {
    //   if ((!!result.response && result.response.status !== 200) || !result) {
    //     setVerifyNewPhoneFailure(true)
    //     let message = intl.formatMessage({ id: 'ChangePhone.FormErrorAlert' })
    //     if (!!result.response && result.response.status === 422 && result.response.data && result.response.data.status) {
    //       if (result.response.data.status.errors) {
    //         message = result.response.data.status.errors
    //       } else if (result.response.data.status.message) {
    //         message = result.response.data.status.message
    //       }
    //     }
    //     setVerifyNewPhoneFailureMessage(message)
    //   } else {
    //     if (!!result && !!result.data && !!result.data.data) {
    //       setNewPhoneNumberUUID(result.data.data.uuid)
    //       setVerifyNewPhoneSuccess(true)
    //     }
    //   }
    // }).then(() => {
    //   setVerifyNewPhoneLoading(false)
    // })
    setTimeout(() => {
      setNewPhoneNumberUUID('123456789')
      setVerifyNewPhoneSuccess(true)
      setVerifyNewPhoneLoading(false)
    }, 2000)
  }
  const handleChangePhoneNumber = (verificationCode, FormikActions, closeDialog) => {
    setNewPhoneNumber(newPhoneNumber)
    setVerifyNewPhoneFailure(false)
    setVerifyNewPhoneFailureMessage('')
    setConfirmNewPhoneSuccess(false)
    setVerifyNewPhoneLoading(true)
    let data = {
      'phone': '+' + newPhoneNumber.toString(),
      'uuid': newPhoneNumberUUID.toString(),
      'otp': verificationCode.toString()
    }

    // UserServices.confirmPhone(data, { headers: { 'Authorization': `Bearer ${keycloak?.token ?? ''}` } }, setVerifyNewPhoneLoading, setVerifyNewPhoneFailure).then((result) => {
    //   if ((!!result.response && result.response.status !== 200) || !result) {
    //     setVerifyNewPhoneFailure(true)
    //     let message = intl.formatMessage({ id: 'UpdateProfile.FormErrorAlert' })
    //     if (!!result.response && result.response.status === 422 && result.response.data && result.response.data.status) {
    //       if (result.response.data.status.errors) {
    //         message = result.response.data.status.errors
    //       } else if (result.response.data.status.message) {
    //         message = result.response.data.status.message
    //       }
    //     }
    //     setVerifyNewPhoneFailureMessage(message)
    //   } else {
    //     if (!!result && !!result.data && !!result.data.data) {
    //       setConfirmNewPhoneSuccess(true)
    //       FormikActions.setFieldValue('phone', '+' + newPhoneNumber.toString())
    //       setTimeout(() => {
    //         closeDialog()
    //         FormikActions.setFieldValue('newPhone', '')
    //         FormikActions.setFieldValue('VerificationCode', '')
    //         resetPhoneStatus()
    //       }, 1000)
    //     }
    //   }
    // }).then(() => {
    //   setVerifyNewPhoneLoading(false)
    // })
    setTimeout(() => {
      setConfirmNewPhoneSuccess(true)
      FormikActions.setFieldValue('ownerFakeMobile', '+' + newPhoneNumber.toString())
      FormikActions.setFieldValue('ownerMobile', '+' + newPhoneNumber.toString()) //VIP
      setVerifyNewPhoneLoading(false)
      setTimeout(() => {
        closeDialog()
        setTimeout(() => {
          FormikActions.setFieldValue('ownerOTPMobile', '')
          FormikActions.setFieldValue('ownerOTPMobileVerificationCode1', '')
          FormikActions.setFieldValue('ownerOTPMobileVerificationCode2', '')
          FormikActions.setFieldValue('ownerOTPMobileVerificationCode3', '')
          FormikActions.setFieldValue('ownerOTPMobileVerificationCode4', '')
          resetPhoneStatus()
        }, 500)
      }, 1000)
    }, 2000)
  }

  const resetPhoneStatus = () => {
    setVerifyNewPhoneFailure(false)
    setVerifyNewPhoneFailureMessage('')
    setVerifyNewPhoneSuccess(false)
    setVerifyNewPhoneLoading(false)
    setConfirmNewPhoneSuccess(false)
  }


  return (
    <RequestContext.Provider value={{
      requestActiveStep: requestActiveStep,
      requestSteps: requestSteps,
      getRequestStepContent,
      handleNextStep,
      handleBackStep,
      handleGoToStep,
      isRequestStepComplete,
      inRequestStepsTrail,

      verifyNewPhoneLoading: verifyNewPhoneLoading,
      verifyNewPhoneFailure: verifyNewPhoneFailure,
      verifyNewPhoneFailureMessage: verifyNewPhoneFailureMessage,
      verifyNewPhoneSuccess: verifyNewPhoneSuccess,
      confirmNewPhoneSuccess: confirmNewPhoneSuccess,
      handleChangePhoneNumber,
      verifyNewPhoneNumber,
      resetPhoneStatus
    }}>
      {children}
    </RequestContext.Provider>
  )
}
const RequestConsumer = RequestContext.Consumer

export { RequestProvider, RequestConsumer }
