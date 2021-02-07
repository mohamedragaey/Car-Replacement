import React from 'react'
import { useFormik } from 'formik'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  FormControl,
  InputLabel,
  Radio,
  Grid,
  FormControlLabel,
  RadioGroup,
  FormHelperText, Select, MenuItem, Fade, Paper
} from '@material-ui/core'
import ReCaptcha from '../../../../utils/ReCaptcha'
import { requestStep4FormValidation } from '../../../../utils/validationSchema'
import { FormLoader } from '../../../Loader/FormLoader'
import { formStyles } from '../FormStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import RequestVehicleCard from '../VehicleCard'
import { ButtonLoader } from '../../../Loader/ButtonLoader'

const RequestStep4 = ({ requestData, onSubmit, requestLoadAllBanks, requestLoadAllVehiclesCompanies }) => {
  const classes = useStyles()
  const formClasses = formStyles()
  const requestStep4Form = useFormik({
    initialValues: (!!Object.keys(requestData).length && !!requestData.step4 && !!Object.keys(requestData.step4).length) ? requestData.step4 : {
      paymentMethod: 'cash',
      bankId: ''
      // reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: requestStep4FormValidation,
    onSubmit: ((values, actions) => {
      onSubmit(values, actions)
    })
  })

  React.useEffect(() => {
    requestLoadAllVehiclesCompanies()
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  const [paymentMethodValue, setPaymentMethodValue] = React.useState(requestStep4Form.values.paymentMethod)
  const handlePaymentMethodChange = (event) => {
    if (event.target.value.toString() === 'partial') {
      requestStep4Form.setFieldValue('bankId', '')
      requestLoadAllBanks()
    }
    setPaymentMethodValue(event.target.value)
    requestStep4Form.setFieldValue('paymentMethod', event.target.value)
  }
  return (
    <RequestConsumer>
      {({
          requestAllVehiclesCompanies, requestAllVehiclesCompaniesLoading, requestVehiclesOfCompany, requestAllBanks,
          requestAllBanksLoading, handleBackStep
        }) => (
        <Fade in={true}>
          <Paper elevation={4} className={classes.RequestStep4Wrapper}>
            <form onSubmit={requestStep4Form.handleSubmit} noValidate autoComplete="off"
                  className={formClasses.formWrapper + ' ' + formClasses.FormInner}>
              <Grid item xs={12} lg={10}>
                <Grid container className={classes.RequestStep4Container}>
                  <Grid item xs={12} sm={6} md={8}>
                    {!!requestAllVehiclesCompaniesLoading && <FormLoader loading={true}/>}

                    <div className={formClasses.FormItem}>
                      <InputLabel id="Request.Step2.newVehicleCompany"><FormattedMessage
                        id='Fields.label.newVehicleCompany'/></InputLabel>
                      <FormControl variant="outlined" className={formClasses.FormItemSelect}>
                        <Select
                          id="newVehicleCompany"
                          margin="dense"
                          disabled={true}
                          MenuProps={{ disableScrollLock: true }}
                          name="newVehicleCompany"
                          displayEmpty
                          value={!!requestData && !!requestData.step3 && !!requestData.step3.newVehicleCompany ? requestData.step3.newVehicleCompany : ''}
                        >
                          <MenuItem className={formClasses.FormLetterOption} value=""><FormattedMessage
                            id='Fields.placeholder.newVehicleCompany'/></MenuItem>
                          {!!requestAllVehiclesCompanies && !!requestAllVehiclesCompanies.length && requestAllVehiclesCompanies.map((vehicleCompany, index) => (
                            <MenuItem key={index} value={vehicleCompany.id}
                                      className={formClasses.FormLetterOption}>{vehicleCompany.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>

                    <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                      <InputLabel id="Request.Step4.paymentMethod"><FormattedMessage
                        id='Fields.label.paymentMethod'/></InputLabel>
                      <FormControl variant="outlined" margin="dense">
                        <RadioGroup aria-label="paymentMethod" name="paymentMethod" value={paymentMethodValue}
                                    onChange={handlePaymentMethodChange}>
                          <FormControlLabel value="cash" control={<Radio color={'secondary'}/>}
                                            label={<FormattedMessage
                                              id='RequestStep4.field.paymentMethod.cash'/>}/>
                          <FormControlLabel value="partial" control={<Radio color={'secondary'}/>}
                                            label={<FormattedMessage
                                              id='RequestStep4.field.paymentMethod.partial'/>}/>
                        </RadioGroup>
                      </FormControl>
                    </div>

                    {paymentMethodValue === 'partial' &&
                    <div className={formClasses.FormItem}>
                      <InputLabel id="Request.Step4.bankId"><FormattedMessage
                        id='Fields.label.bankId'/></InputLabel>
                      <FormControl variant="outlined" className={formClasses.FormItemSelect}>
                        {!!requestAllBanksLoading && <ButtonLoader loading={true}/>}
                        <Select
                          id="bankId"
                          margin="dense"
                          MenuProps={{ disableScrollLock: true }}
                          name="bankId"
                          value={!!requestData && !!requestData.step4 && !!requestData.step4.bankId ? requestData.step4.bankId : requestStep4Form.values.bankId}
                          displayEmpty
                          onChange={(event) => requestStep4Form.setFieldValue('bankId', event.target.value)}
                          onBlur={requestStep4Form.handleBlur}
                          error={requestStep4Form.errors.bankId && requestStep4Form.touched.bankId !== undefined}
                        >
                          <MenuItem className={formClasses.FormLetterOption} value=""><FormattedMessage
                            id='Fields.placeholder.bankId'/></MenuItem>
                          {!!requestAllBanks && !!requestAllBanks.length && requestAllBanks.map((bank, index) => (
                            <MenuItem key={index} value={bank.id}
                                      className={formClasses.FormLetterOption}>{bank.name}</MenuItem>
                          ))}
                        </Select>
                        {requestStep4Form.errors.bankId && requestStep4Form.touched.bankId && (
                          <FormHelperText error={true}>{requestStep4Form.errors.bankId}</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                    }

                    <ReCaptcha action='requestStep4Form'
                               handleVerification={(response) => { requestStep4Form.setFieldValue('reCaptcha', response) }}/>
                    {requestStep4Form.errors.reCaptcha && requestStep4Form.touched.reCaptcha && (
                      <FormHelperText error={true}>{requestStep4Form.errors.reCaptcha}</FormHelperText>
                    )}
                    {!!requestStep4Form.isSubmitting && <FormLoader loading={true}/>}

                  </Grid>
                  {!!!!requestData && !!requestData.step3 && !!requestData.step3.newVehicleId && !!requestVehiclesOfCompany &&
                  <RequestVehicleCard
                    vehicle={requestVehiclesOfCompany.filter((vehicle) => vehicle.id === requestData.step3.newVehicleId)[0]}/>
                  }

                  <div className={formClasses.FormSubmitRow}>
                    <Button type={'submit'} variant={'contained'} size={'large'} color={'primary'}>
                      <FormattedMessage id='requestStep.button.Next'/>
                    </Button>
                    <Button variant={'outlined'} size={'large'} color={'secondary'}
                            className={formClasses.RequestStepGoBack} onClick={handleBackStep}>
                      <FormattedMessage id='requestStep.button.previous'/>
                    </Button>
                  </div>

                </Grid>
              </Grid>
            </form>
          </Paper>
        </Fade>
      )}
    </RequestConsumer>
  )
}

export default RequestStep4
