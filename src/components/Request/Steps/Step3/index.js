import React from 'react'
import { useFormik } from 'formik'
import { FormattedMessage } from 'react-intl'
import {
  FormControl,
  InputLabel,
  Grid,
  RadioGroup,
  FormHelperText, Select, MenuItem, Fade, Paper
} from '@material-ui/core'
// import ReCaptcha from '../../../../utils/ReCaptcha'
import { requestStep3FormValidation } from '../../../../utils/validationSchema'
import { FormLoader } from '../../../Loader/FormLoader'
import { formStyles } from '../FormStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import RequestVehicleCard from '../VehicleCard'
import VehicleSubmitDialog from './VehicleSubmitDialog'

const RequestStep3 = ({ requestData, onSubmit, requestLoadAllVehiclesCompanies, requestLoadAllVehiclesOfCompany }) => {
  const classes = useStyles()
  const formClasses = formStyles()
  const requestStep3Form = useFormik({
    initialValues: (!!Object.keys(requestData).length && !!requestData.step3 && !!Object.keys(requestData.step3).length) ? requestData.step3 : {
      newVehicleCompany: '',
      newVehicleId: ''
      // reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: requestStep3FormValidation,
    onSubmit: ((values, actions) => {
      handleVehicleSubmitDialog()
      // onSubmit(values, actions)
    })
  })

  const handleNewVehicleCompanyChange = (event) => {
    requestStep3Form.setFieldValue('newVehicleCompany', event.target.value)
    requestLoadAllVehiclesOfCompany(event.target.value)
  }


  React.useEffect(() => {
    requestLoadAllVehiclesCompanies()
    if (!!requestStep3Form.values.newVehicleCompany) {
      requestLoadAllVehiclesOfCompany(requestStep3Form.values.newVehicleCompany)
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])


  const handleNewVehicleChange = (event) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    requestStep3Form.setFieldValue('newVehicleId', event.target.value.toString() || '')
    setTimeout(() => {
      if (!!event.target.value) {
        requestStep3Form.handleSubmit()
      }
    }, 100)
  }

  const [viewVehicleSubmitDialog, setViewVehicleSubmitDialog] = React.useState(false)
  const [openVehicleSubmitDialog, setOpenVehicleSubmitDialog] = React.useState(false)
  const handleVehicleSubmitDialog = () => {
    if (!openVehicleSubmitDialog) {
      setViewVehicleSubmitDialog(true)
    } else {
      requestStep3Form.setFieldValue('newVehicleId', '')
      requestStep3Form.setSubmitting(false)
      setTimeout(() => {
        setViewVehicleSubmitDialog(false)
      }, 500)
    }
    setOpenVehicleSubmitDialog(!openVehicleSubmitDialog)
  }

  return (
    <RequestConsumer>
      {({
          requestAllVehiclesCompanies, requestAllVehiclesCompaniesLoading, requestVehiclesOfCompany,
          requestVehiclesOfCompanyLoading, handleBackStep
        }) => (
        <Fade in={true}>
          <Paper elevation={4} className={classes.RequestStep3Wrapper}>
            <Grid item xs={12} lg={10}>
              <form onSubmit={requestStep3Form.handleSubmit} noValidate autoComplete="off"
                    className={formClasses.formWrapper}>
                {!!requestAllVehiclesCompaniesLoading && <FormLoader loading={true}/>}
                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step2.newVehicleCompany"><FormattedMessage
                    id='Fields.label.newVehicleCompany'/></InputLabel>
                  <FormControl variant="outlined" className={formClasses.FormItemSelect}>
                    <Select
                      id="newVehicleCompany"
                      margin="dense"
                      MenuProps={{ disableScrollLock: true }}
                      name="newVehicleCompany"
                      displayEmpty
                      value={requestStep3Form.values.newVehicleCompany}
                      onChange={handleNewVehicleCompanyChange}
                      onBlur={requestStep3Form.handleBlur}
                      error={requestStep3Form.errors.newVehicleCompany && requestStep3Form.touched.newVehicleCompany !== undefined}
                    >
                      <MenuItem className={formClasses.FormLetterOption} value=""><FormattedMessage
                        id='Fields.placeholder.newVehicleCompany'/></MenuItem>
                      {!!requestAllVehiclesCompanies && !!requestAllVehiclesCompanies.length && requestAllVehiclesCompanies.map((vehicleCompany, index) => (
                        <MenuItem key={index} value={vehicleCompany.id}
                                  className={formClasses.FormLetterOption}>{vehicleCompany.name}</MenuItem>
                      ))}
                    </Select>
                    {requestStep3Form.errors.newVehicleCompany && requestStep3Form.touched.newVehicleCompany && (
                      <FormHelperText error={true}>{requestStep3Form.errors.newVehicleCompany}</FormHelperText>
                    )}
                  </FormControl>
                </div>

                <RadioGroup
                  className={classes.newVehicleWrapper}
                  aria-label="newVehicle"
                  id="newVehicleId"
                  name="newVehicleId"
                  value={requestStep3Form.values.newVehicleId}
                  onChange={handleNewVehicleChange}
                  onBlur={requestStep3Form.handleBlur}
                  error={requestStep3Form.errors.newVehicleId && requestStep3Form.touched.newVehicleId !== undefined}
                >
                  {!!requestVehiclesOfCompanyLoading && <FormLoader loading={true}/>}
                  {!!requestVehiclesOfCompany && !!requestVehiclesOfCompany.length &&
                  requestVehiclesOfCompany.map((vehicle, index) =>
                    <RequestVehicleCard key={vehicle.id} vehicle={vehicle} asOption/>
                  )}
                </RadioGroup>
                {/*{!!requestVehiclesOfCompany && !!requestVehiclesOfCompany.length &&*/}
                {/*requestStep3Form.errors.newVehicleId && requestStep3Form.touched.newVehicleId && (*/}
                {/*  <FormHelperText className={classes.newVehicleIdError}*/}
                {/*                  error={true}>{requestStep3Form.errors.newVehicleId}</FormHelperText>*/}
                {/*)}*/}
                {/*<ReCaptcha action='requestStep3Form'*/}
                {/*           handleVerification={(response) => { requestStep3Form.setFieldValue('reCaptcha', response) }}/>*/}
                {/*{requestStep3Form.errors.reCaptcha && requestStep3Form.touched.reCaptcha && (*/}
                {/*  <FormHelperText error={true}>{requestStep3Form.errors.reCaptcha}</FormHelperText>*/}
                {/*)}*/}

                {!!viewVehicleSubmitDialog &&
                <VehicleSubmitDialog
                  handleVehicleSubmit={() => onSubmit(requestStep3Form.values, requestStep3Form, handleVehicleSubmitDialog)}
                  handleVehicleSubmitDialog={handleVehicleSubmitDialog}
                  openVehicleSubmitDialog={openVehicleSubmitDialog}
                />
                }

                {/*<div className={formClasses.FormSubmitRow}>*/}
                {/*  <Button type={'submit'} variant={'contained'} size={'large'} color={'primary'}>*/}
                {/*    <FormattedMessage id='requestStep.button.Next'/>*/}
                {/*  </Button>*/}
                {/*  <Button variant={'outlined'} size={'large'} color={'secondary'}*/}
                {/*          className={formClasses.RequestStepGoBack} onClick={handleBackStep}>*/}
                {/*    <FormattedMessage id='requestStep.button.previous'/>*/}
                {/*  </Button>*/}
                {/*</div>*/}
                {!!requestStep3Form.isSubmitting && <FormLoader loading={true}/>}
              </form>
            </Grid>
          </Paper>
        </Fade>
      )}
    </RequestConsumer>
  )
}

export default RequestStep3
