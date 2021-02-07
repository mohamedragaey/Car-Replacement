import React, { createContext } from 'react'
import { FormattedMessage } from 'react-intl'
import PersonIcon from '@material-ui/icons/Person'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CheckIcon from '@material-ui/icons/Check'
import RequestStep1 from './components/Request/Steps/Step1'
import RequestStep2 from './components/Request/Steps/Step2'
import RequestStep3 from './components/Request/Steps/Step3'
import RequestStep4 from './components/Request/Steps/Step4'
import RequestStep5 from './components/Request/Steps/Step5'
import RequestStep6 from './components/Request/Steps/Step6'

const RequestContext = createContext({})

const RequestProvider = ({ children, pageAction, rid }) => {
  const [requestData, setRequestData] = React.useState({})
  const [requestStep2Loading, setRequestStep2Loading] = React.useState(false)
  const [requestDataStep2, setRequestDataStep2] = React.useState(
    {
      ownerName: 'محمد عبد الستار عبد السلام',
      ownerGovernment: 'البحر الأحمر',
      licenseNumber: ['س', 'د', '', '1234'].filter((el) => (el != null)).join(' '),
      vehicleManufactureYear: '2000',
      vehicleType: 'ملاكي',
      vehicleMake: 'شيفروليه',
      vehicleModel: 'كروز',
      vehicleChassisNumber: '123456',
      vehicleEngineNumber: '123456',
      vehicleColor: 'نبيتي',
      vehicleCC: '1598',
      vehicleTrafficUnit: 'الغردقة',
      vehicleReleaseDate: '2018',
      vehicleEndDate: '2021'

    })

  React.useEffect(() => {
    // eslint-disable-next-line
    if (!!rid && !!parseInt(rid)) {
      // getRequestData(rid)
    }
  }, [rid])

  const requestStep1Submit = (values, FormikActions, closeDialog) => {
    // FormikActions.isValid = true
    // FormikActions.setErrors({})
    closeDialog()
    setRequestDataStep2({
      ownerName: 'محمد عبد الستار عبد السلام',
      ownerGovernment: 'البحر الأحمر',
      licenseNumber: [values.licenseNumberFirstLetter, values.licenseNumberSecondLetter, values.licenseNumberThirdLetter, values.licenseNumberNumbers].filter((el) => (el != null)).join(' '),
      vehicleManufactureYear: values.vehicleManufactureYear,
      vehicleType: 'ملاكي',
      vehicleMake: values.vehicleMake,
      vehicleModel: values.vehicleModel,
      vehicleChassisNumber: values.vehicleChassisNumber,
      vehicleEngineNumber: values.vehicleEngineNumber,
      vehicleColor: 'نبيتي',
      vehicleCC: '1598',
      vehicleTrafficUnit: 'الغردقة',
      vehicleReleaseDate: '2018',
      vehicleEndDate: '2021'
    })
    setTimeout(() => {
      handleNextStep()
      delete (values.reCaptcha)
      setRequestData((prevState) => ({ step1: values }))
      FormikActions.setSubmitting(false)
    }, 1000)
    // console.log(values, FormikActions, closeDialog)
  }
  const requestStep2Submit = () => {
    if (!!Object.keys(requestData).length && !!requestData.step2 && !!Object.keys(requestData.step2).length) {
      handleNextStep()
    } else {
      setRequestStep2Loading(true)
      setRequestData((prevState) => ({ ...prevState, step2: requestDataStep2 }))
      setTimeout(() => {
        handleNextStep()
        setRequestStep2Loading(false)
      }, 1000)
    }
  }
  const requestStep3Submit = (values, FormikActions, closeDialog) => {
    closeDialog()
    setTimeout(() => {
      handleNextStep()
      delete (values.reCaptcha)
      setRequestData((prevState) => ({ ...prevState, step3: values }))
      FormikActions.setSubmitting(false)
    }, 1000)
  }

  const requestStep4Submit = (values, FormikActions) => {
    setTimeout(() => {
      handleNextStep()
      delete (values.reCaptcha)
      setRequestData((prevState) => ({ ...prevState, step4: values }))
      FormikActions.setSubmitting(false)
    }, 1000)
  }
  const requestStep5Submit = (values, FormikActions) => {
    setTimeout(() => {
      handleNextStep()
      delete (values.reCaptcha)
      setRequestData((prevState) => ({ ...prevState, step5: values }))
      FormikActions.setSubmitting(false)
    }, 1000)
  }
  const [requestAllVehiclesCompanies, setRequestAllVehiclesCompanies] = React.useState([])
  const [requestAllVehiclesCompaniesLoading, setRequestAllVehiclesCompaniesLoading] = React.useState(false)
  const requestLoadedAllVehiclesCompanies = [
    { id: '1', name: 'كنج لونج ايجيبت' },
    { id: '2', name: 'كنج لونج ايجيبت 2' },
    { id: '3', name: 'كنج لونج ايجيبت 3' },
    { id: '4', name: 'كنج لونج ايجيبت 4' }
  ]
  const requestLoadAllVehiclesCompanies = () => {
    if (!requestAllVehiclesCompanies.length) {
      setRequestAllVehiclesCompaniesLoading(true)
      setRequestVehiclesOfCompany([])
      setRequestAllVehiclesCompanies([])
      setTimeout(() => {
        setRequestAllVehiclesCompanies(requestLoadedAllVehiclesCompanies)
        setRequestAllVehiclesCompaniesLoading(false)
      }, 1000)
    }
  }
  const requestLoadedVehiclesOfCompany = [
    {
      id: '1',
      name: 'كنج لونج فان',
      title: '2.7L 14-Seater',
      price: '198000',
      image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg'
    },
    {
      id: '2',
      name: 'كنج لونج فان2',
      title: '2.7L 14-Seater',
      price: '200000',
      image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg'
    },
    {
      id: '3',
      name: 'كنج لونج فان3',
      title: '2.7L 14-Seater',
      price: '230000',
      image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg'
    },
    {
      id: '4',
      name: 'كنج لونج فان4',
      title: '2.7L 14-Seater',
      price: '260000',
      image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg'
    },
    {
      id: '5',
      name: 'كنج لونج فان5',
      title: '2.7L 14-Seater',
      price: '280000',
      image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg'
    }
  ]
  const [requestVehiclesOfCompany, setRequestVehiclesOfCompany] = React.useState([])
  const [requestVehiclesOfCompanyLoading, setRequestVehiclesOfCompanyLoading] = React.useState(false)
  const requestLoadAllVehiclesOfCompany = (companyId) => {
    setRequestVehiclesOfCompanyLoading(true)
    setRequestVehiclesOfCompany([])
    if (!!companyId) {
      setTimeout(() => {
        setRequestVehiclesOfCompany(requestLoadedVehiclesOfCompany)
        setRequestVehiclesOfCompanyLoading(false)
      }, 1000)
    } else {
      setRequestVehiclesOfCompanyLoading(false)
    }
  }
  const vehicleDetails = {
    id: '1',
    name: 'كنج لونج فان',
    title: '2.7L 14-Seater',
    price: '198000',
    image: 'https://almalnews.com/wp-content/uploads/2019/03/%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%A8%D8%A7%D8%B5_%D9%83%D9%8A%D9%86%D8%AC_%D9%84%D9%88%D9%86%D8%AC.jpg',
    power: {
      cc: '2693',
      cylinders: '4',
      tractionType: 'دفع خلفي',
      fuelTankCapacity: '70'
    },
    specs: {
      length: '5.998',
      width: '1.855',
      height: '2.285',
      wheelBase: '3.720',
      trunkCapacity: '270'
    }
  }
  const [requestVehicleDetails, setRequestVehicleDetails] = React.useState({})
  const [requestVehicleDetailsLoading, setRequestVehicleDetailsLoading] = React.useState(false)
  const getVehicleDetails = (vehicleId) => {
    setRequestVehicleDetailsLoading(true)
    setRequestVehicleDetails({})
    if (!!vehicleId) {
      setTimeout(() => {
        setRequestVehicleDetails(vehicleDetails)
        setRequestVehicleDetailsLoading(false)
      }, 1000)
    } else {
      setRequestVehicleDetailsLoading(false)
    }
  }

  const requestLoadedAllBanks = [
    { id: '1', name: 'بنك مصر' },
    { id: '2', name: 'البنك الأهلي' },
    { id: '3', name: 'بنك القاهرة' },
    { id: '4', name: 'بنك الإسكندرية' }
  ]
  const [requestAllBanks, setRequestAllBanksDetails] = React.useState([])
  const [requestAllBanksLoading, setRequestAllBanksLoading] = React.useState(false)
  const requestLoadAllBanks = () => {
    setRequestAllBanksLoading(true)
    setRequestAllBanksDetails([])
    setTimeout(() => {
      setRequestAllBanksDetails(requestLoadedAllBanks)
      setRequestAllBanksLoading(false)
    }, 1000)

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
      content: <RequestStep2 onSubmit={requestStep2Submit}/>
    },
    {
      key: 2,
      title: <FormattedMessage id='CarReplacement.request.registration.step3.title'/>,
      icon: <DirectionsCarIcon/>,
      content: <RequestStep3 requestData={requestData} onSubmit={requestStep3Submit}
                             requestLoadAllVehiclesCompanies={requestLoadAllVehiclesCompanies}
                             requestLoadAllVehiclesOfCompany={requestLoadAllVehiclesOfCompany}/>
    },
    {
      key: 3,
      title: <FormattedMessage id='CarReplacement.request.registration.step4.title'/>,
      icon: <AttachMoneyIcon/>,
      content: <RequestStep4 requestData={requestData} onSubmit={requestStep4Submit}
                             requestLoadAllVehiclesCompanies={requestLoadAllVehiclesCompanies}
                             requestLoadAllBanks={requestLoadAllBanks}/>
    },
    {
      key: 4,
      title: <FormattedMessage id='CarReplacement.request.registration.step5.title'/>,
      icon: <AttachFileIcon/>,
      content: <RequestStep5 onSubmit={requestStep5Submit}/>
    },
    {
      key: 5,
      title: <FormattedMessage id='CarReplacement.request.registration.step6.title'/>,
      icon: <CheckIcon/>,
      content: <RequestStep6/>
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
    if (requestActiveStep + 2 === requestSteps.length) {
      newCompleted.add(requestActiveStep + 1)
    }
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
  // const [newPhoneNumberUUID, setNewPhoneNumberUUID] = React.useState(null)

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
      // setNewPhoneNumberUUID('123456789')
      setVerifyNewPhoneSuccess(true)
      setVerifyNewPhoneLoading(false)
    }, 1000)
  }
  const handleChangePhoneNumber = (verificationCode, FormikActions, closeDialog) => {
    setNewPhoneNumber(newPhoneNumber)
    setVerifyNewPhoneFailure(false)
    setVerifyNewPhoneFailureMessage('')
    setConfirmNewPhoneSuccess(false)
    setVerifyNewPhoneLoading(true)
    // let data = {
    //   'phone': '+' + newPhoneNumber.toString(),
    //   'uuid': newPhoneNumberUUID.toString(),
    //   'otp': verificationCode.toString()
    // }

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
      }, 500)
    }, 1000)
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
      resetPhoneStatus,

      requestDataStep2: requestDataStep2,
      requestStep2Loading: requestStep2Loading,

      requestAllVehiclesCompanies: requestAllVehiclesCompanies,
      requestAllVehiclesCompaniesLoading: requestAllVehiclesCompaniesLoading,
      requestVehiclesOfCompany: requestVehiclesOfCompany,
      requestVehiclesOfCompanyLoading: requestVehiclesOfCompanyLoading,

      requestVehicleDetails: requestVehicleDetails,
      requestVehicleDetailsLoading: requestVehicleDetailsLoading,
      getVehicleDetails,

      requestAllBanks: requestAllBanks,
      requestAllBanksLoading: requestAllBanksLoading
    }}>
      {children}
    </RequestContext.Provider>
  )
}
const RequestConsumer = RequestContext.Consumer

export { RequestProvider, RequestConsumer }
