import React from 'react'
import { useFormik } from 'formik'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Button,
  ButtonBase,
  FormControl,
  InputLabel,
  Radio,
  Grid,
  TextField,
  FormControlLabel,
  RadioGroup,
  FormHelperText, Select, MenuItem, Fade, Paper
} from '@material-ui/core'
import ReCaptcha from '../../../../utils/ReCaptcha'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import ar from 'react-phone-input-2/lang/ar.json'
import { requestStep1FormValidation } from '../../../../utils/validationSchema'
import { FormLoader } from '../../../Loader/FormLoader'
import { formStyles } from '../FormStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import ChangePhone from './ChangePhone'
import TermsConditionsDialog from './TermsConditionsDialog'

const RequestStep1 = ({ requestData, onSubmit }) => {
  const classes = useStyles()
  const formClasses = formStyles()
  const intl = useIntl()
  const [ownerSecondaryMobileError, setOwnerSecondaryMobileError] = React.useState('')
  const requestStep1Form = useFormik({
    initialValues: {
      ownerNationalId: '',
      ownerEmail: '',
      ownerFakeMobile: '',//catch hack
      ownerOTPMobile: '',
      ownerOTPMobileVerificationCode1: '',
      ownerOTPMobileVerificationCode2: '',
      ownerOTPMobileVerificationCode3: '',
      ownerOTPMobileVerificationCode4: '',
      ownerMobile: '',
      ownerSecondaryMobile: '',
      licenseNumberType: '1', //1 for letters&numbers, 2 for numbers only
      licenseNumberFirstLetter: '',
      licenseNumberSecondLetter: '',
      licenseNumberThirdLetter: '',
      licenseNumberNumbers: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleManufactureYear: '',
      vehicleChassisNumber: '',
      vehicleEngineNumber: '',
      reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: requestStep1FormValidation,
    onSubmit: ((values, actions) => {
      handleTermsConditionsPopupDialog()
      // onSubmit(values, actions)
    })
  })

  const [viewTermsConditionsDialog, setViewTermsConditionsDialog] = React.useState(false)
  const [openTermsConditionsDialog, setOpenTermsConditionsDialog] = React.useState(false)
  const handleTermsConditionsPopupDialog = () => {
    if (!openTermsConditionsDialog) {
      setViewTermsConditionsDialog(true)
    } else {
      setTimeout(() => {
        setViewTermsConditionsDialog(false)
      }, 500)
    }
    setOpenTermsConditionsDialog(!openTermsConditionsDialog)
  }


  const [licenseNumberTypeValue, setLicenseNumberTypeValue] = React.useState(requestStep1Form.values.licenseNumberType)
  const handleLicenseNumberTypeChange = (event) => {
    setLicenseNumberTypeValue(event.target.value)
    requestStep1Form.setFieldValue('licenseNumberType', event.target.value)
  }

  const licenseNumberLetters = [' ', 'أ', 'ب', 'ج', 'د', 'ر', 'س', 'ص', 'ط', 'ع', 'ف', 'ق', 'ل', 'م', 'ن', 'ه', 'و', 'ي']
  const handleLicenseNumberLetterChange = (event, fieldName) => {
    requestStep1Form.setFieldValue(fieldName, event.target.value)
  }

  const handleVehicleManufactureYearChange = (event) => {
    requestStep1Form.setFieldValue('vehicleManufactureYear', event.target.value)
  }

  const years = (subtract = 0, back) => {
    const year = new Date().getFullYear()
    return Array.from({ length: back }, (v, i) => (year - subtract) - back + i + 1)
  }

  const [openChangePhoneOTPModal, setOpenChangePhoneOTPModal] = React.useState(false)
  const handleOpenChangePhoneOTPModal = () => {
    setOpenChangePhoneOTPModal(true)
  }
  return (
    <RequestConsumer>
      {({ resetPhoneStatus }) => (
        <Fade in={true}>
          <Paper elevation={4} className={classes.RequestStep1Wrapper}>
            <Grid item xs={12} lg={10}>
              <form onSubmit={requestStep1Form.handleSubmit} noValidate autoComplete="off"
                    className={formClasses.formWrapper}>
                {/*{!!countriesFailure &&*/}
                {/*<Alert severity="error"><FormattedMessage id='BasicInfo.FormErrorAlert'/></Alert>*/}
                {/*}*/}
                {/*{!!updateProfileFailure && !!updateProfileFailureMessage &&*/}
                {/*<Alert severity="error">{updateProfileFailureMessage}</Alert>*/}
                {/*}*/}
                {/*{!!updateProfileSuccess &&*/}
                {/*<Alert severity="success"><FormattedMessage id='UpdateProfile.FormSuccessAlert'/></Alert>*/}
                {/*}*/}

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.ownerNationalId"> <FormattedMessage
                    id='Fields.label.NationalId'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.NationalId' })}
                      id="Request.Step1.ownerNationalId"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='ownerNationalId'
                      onChange={requestStep1Form.handleChange}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.ownerNationalId}
                      helperText={requestStep1Form.errors.ownerNationalId && requestStep1Form.touched.ownerNationalId && requestStep1Form.errors.ownerNationalId}
                      error={requestStep1Form.errors.ownerNationalId && requestStep1Form.touched.ownerNationalId !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.ownerEmail"> <FormattedMessage
                    id='Fields.label.ownerEmail'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.ownerEmail' })}
                      id="Request.Step1.ownerEmail"
                      type={'email'}
                      margin="dense"
                      variant="outlined"
                      name='ownerEmail'
                      onChange={requestStep1Form.handleChange}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.ownerEmail}
                      helperText={requestStep1Form.errors.ownerEmail && requestStep1Form.touched.ownerEmail && requestStep1Form.errors.ownerEmail}
                      error={requestStep1Form.errors.ownerEmail && requestStep1Form.touched.ownerEmail !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.ownerFakeMobile"><FormattedMessage
                    id='Fields.label.Mobile'/></InputLabel>
                  <div className={formClasses.PhoneInputWrapper}>
                    <ButtonBase className={formClasses.PhoneInputButton} onClick={handleOpenChangePhoneOTPModal}>
                      <PhoneInput
                        value={requestStep1Form.values.ownerFakeMobile}
                        placeholder={intl.formatMessage({ id: 'Fields.placeholder.Mobile' })}
                        enableSearch={false}
                        countryCodeEditable={false}
                        disableDropdown={true}
                        jumpCursorToEnd={true}
                        onlyCountries={['eg']}
                        country={'eg'}
                        localization={ar}
                        specialLabel={''}
                        excludeCountries={['il']}
                        inputProps={{
                          name: 'ownerFakeMobile',
                          required: false
                        }}
                        searchPlaceholder={intl.formatMessage({ id: 'PhoneInput.Search.placeholder' })}
                        searchNotFound={intl.formatMessage({ id: 'PhoneInput.Search.noResults' })}
                      />
                    </ButtonBase>
                    {requestStep1Form.errors.ownerMobile && requestStep1Form.touched.ownerMobile &&
                    <FormHelperText margin="dense" variant='outlined'
                                    error={true}>{requestStep1Form.errors.ownerMobile}</FormHelperText>}
                  </div>
                  <ChangePhone requestForm={requestStep1Form}
                               resetPhoneStatus={resetPhoneStatus}
                               open={openChangePhoneOTPModal}
                               setOpen={setOpenChangePhoneOTPModal}/>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.ownerEmail"><FormattedMessage
                    id='Fields.label.SecondaryMobile'/></InputLabel>
                  <div className={formClasses.PhoneInputWrapper}>
                    <PhoneInput
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.SecondaryMobile' })}
                      enableSearch={false}
                      countryCodeEditable={false}
                      disableDropdown={true}
                      jumpCursorToEnd={true}
                      onlyCountries={['eg']}
                      country={'eg'}
                      localization={ar}
                      specialLabel={''}
                      excludeCountries={['il']}
                      inputProps={{
                        name: 'ownerSecondaryMobile',
                        required: true
                      }}
                      searchPlaceholder={intl.formatMessage({ id: 'PhoneInput.Search.placeholder' })}
                      searchNotFound={intl.formatMessage({ id: 'PhoneInput.Search.noResults' })}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.ownerSecondaryMobile}
                      helperText={requestStep1Form.errors.ownerSecondaryMobile && requestStep1Form.touched.ownerSecondaryMobile && requestStep1Form.errors.ownerSecondaryMobile}
                      error={requestStep1Form.errors.ownerSecondaryMobile && requestStep1Form.touched.ownerSecondaryMobile !== undefined}
                      onChange={(phone) => {
                        requestStep1Form.setFieldValue('ownerSecondaryMobile', phone.toString())
                      }}
                      isValid={(value, country) => {
                        if (country.iso2 === 'eg' && value.length > 13) {
                          setOwnerSecondaryMobileError(intl.formatMessage({ id: 'validationSchema.phoneError' }))
                          return false
                        } else {
                          setOwnerSecondaryMobileError('')
                          return true
                        }
                      }}
                    />
                    {!!ownerSecondaryMobileError ?
                      <FormHelperText margin="dense" variant='outlined'
                                      error={true}>{ownerSecondaryMobileError}</FormHelperText>
                      : (requestStep1Form.errors.ownerSecondaryMobile && requestStep1Form.touched.ownerSecondaryMobile &&
                        <FormHelperText margin="dense" variant='outlined'
                                        error={true}>{requestStep1Form.errors.ownerSecondaryMobile}</FormHelperText>)}
                  </div>
                </div>

                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step1.licenseNumberType"><FormattedMessage
                    id='Fields.label.licenseNumberType'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <RadioGroup aria-label="licenseNumberType" name="licenseNumberType" value={licenseNumberTypeValue}
                                onChange={handleLicenseNumberTypeChange}>
                      <FormControlLabel value="1" control={<Radio color={'secondary'}/>}
                                        label={<FormattedMessage
                                          id='RequestStep1.field.licenseNumberType.letterNumbers'/>}/>
                      <FormControlLabel value="2" control={<Radio color={'secondary'}/>}
                                        label={<FormattedMessage
                                          id='RequestStep1.field.licenseNumberType.onlyNumbers'/>}/>
                    </RadioGroup>
                  </FormControl>
                </div>

                <div
                  className={formClasses.FormItem + ' ' + formClasses.FormRow + ' ' + formClasses.FormLicenseNumberRow}>
                  {licenseNumberTypeValue === '1' &&
                  <div className={formClasses.FormLettersWrapper}>
                    <div className={formClasses.FormLettersControls}>
                      <FormControl variant='outlined'>
                        <Select
                          id="licenseNumberFirstLetter"
                          margin="dense"
                          // className={formClasses.FormLetterControl}
                          MenuProps={{ disableScrollLock: true }}
                          name="licenseNumberFirstLetter"
                          displayEmpty
                          value={requestStep1Form.values.licenseNumberFirstLetter}
                          onChange={(event) => handleLicenseNumberLetterChange(event, 'licenseNumberFirstLetter')}
                          onBlur={requestStep1Form.handleBlur}
                          error={requestStep1Form.errors.licenseNumberFirstLetter && requestStep1Form.touched.licenseNumberFirstLetter !== undefined}
                        >
                          {!!licenseNumberLetters.length && licenseNumberLetters.map((letter, index) => (
                            <MenuItem key={index} value={letter}
                                      className={formClasses.FormLetterOption}>{letter}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl variant='outlined'>
                        <Select
                          id="licenseNumberSecondLetter"
                          margin="dense"
                          MenuProps={{ disableScrollLock: true }}
                          name="licenseNumberSecondLetter"
                          displayEmpty
                          value={requestStep1Form.values.licenseNumberSecondLetter}
                          onChange={(event) => handleLicenseNumberLetterChange(event, 'licenseNumberSecondLetter')}
                          onBlur={requestStep1Form.handleBlur}
                          error={requestStep1Form.errors.licenseNumberSecondLetter && requestStep1Form.touched.licenseNumberSecondLetter !== undefined}
                        >
                          {!!licenseNumberLetters.length && licenseNumberLetters.map((letter, index) => (
                            <MenuItem key={index} value={letter}
                                      className={formClasses.FormLetterOption}>{letter}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl variant='outlined'>
                        <Select
                          id="licenseNumberThirdLetter"
                          margin="dense"
                          MenuProps={{ disableScrollLock: true }}
                          name="licenseNumberThirdLetter"
                          displayEmpty
                          value={requestStep1Form.values.licenseNumberThirdLetter}
                          onChange={(event) => handleLicenseNumberLetterChange(event, 'licenseNumberThirdLetter')}
                          onBlur={requestStep1Form.handleBlur}
                          error={requestStep1Form.errors.licenseNumberThirdLetter && requestStep1Form.touched.licenseNumberThirdLetter !== undefined}
                        >
                          {!!licenseNumberLetters.length && licenseNumberLetters.map((letter, index) => (
                            <MenuItem key={index} value={letter}
                                      className={formClasses.FormLetterOption}>{letter}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    {requestStep1Form.errors.licenseNumberFirstLetter && requestStep1Form.touched.licenseNumberFirstLetter && (
                      <FormHelperText margin="dense" variant='outlined'
                                      error={true}>{requestStep1Form.errors.licenseNumberFirstLetter}</FormHelperText>
                    )}
                  </div>
                  }
                  <FormControl variant="outlined"
                               className={formClasses.FormNumbersWrapper + (licenseNumberTypeValue === '2' ? ' onlyNumbers' : '')}>
                    <TextField
                      id="Request.Step1.licenseNumberNumbers"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='licenseNumberNumbers'
                      onChange={(event) => {
                        const re = /^[0-9\b]{0,4}$/
                        if (event.target.value === '' || re.test(event.target.value)) {
                          requestStep1Form.setFieldValue('licenseNumberNumbers', event.target.value)
                        }
                      }}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.licenseNumberNumbers}
                      helperText={requestStep1Form.errors.licenseNumberNumbers && requestStep1Form.touched.licenseNumberNumbers && requestStep1Form.errors.licenseNumberNumbers}
                      error={requestStep1Form.errors.licenseNumberNumbers && requestStep1Form.touched.licenseNumberNumbers !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.vehicleMake"><FormattedMessage
                    id='Fields.label.vehicleMake'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.vehicleMake' })}
                      id="Request.Step1.vehicleMake"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='vehicleMake'
                      onChange={requestStep1Form.handleChange}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.vehicleMake}
                      helperText={requestStep1Form.errors.vehicleMake && requestStep1Form.touched.vehicleMake && requestStep1Form.errors.vehicleMake}
                      error={requestStep1Form.errors.vehicleMake && requestStep1Form.touched.vehicleMake !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.vehicleModel"><FormattedMessage
                    id='Fields.label.vehicleModel'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.vehicleModel' })}
                      id="Request.Step1.vehicleModel"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='vehicleModel'
                      onChange={requestStep1Form.handleChange}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.vehicleModel}
                      helperText={requestStep1Form.errors.vehicleModel && requestStep1Form.touched.vehicleModel && requestStep1Form.errors.vehicleModel}
                      error={requestStep1Form.errors.vehicleModel && requestStep1Form.touched.vehicleModel !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.vehicleManufactureYear"><FormattedMessage
                    id='Fields.label.vehicleManufactureYear'/></InputLabel>
                  <FormControl variant="outlined" className={formClasses.FormItemSelect}>
                    <Select
                      id="vehicleManufactureYear"
                      margin="dense"
                      MenuProps={{ disableScrollLock: true }}
                      name="vehicleManufactureYear"
                      displayEmpty
                      value={requestStep1Form.values.vehicleManufactureYear}
                      onChange={handleVehicleManufactureYearChange}
                      onBlur={requestStep1Form.handleBlur}
                      error={requestStep1Form.errors.vehicleManufactureYear && requestStep1Form.touched.vehicleManufactureYear !== undefined}
                    >
                      <MenuItem className={formClasses.FormLetterOption} value=""><FormattedMessage
                        id='Fields.placeholder.vehicleManufactureYear'/></MenuItem>*/}
                      {years(20, 50).map((year, index) => (
                        <MenuItem key={index} value={year}
                                  className={formClasses.FormLetterOption}>{year}</MenuItem>
                      ))}
                    </Select>
                    {requestStep1Form.errors.vehicleManufactureYear && requestStep1Form.touched.vehicleManufactureYear && (
                      <FormHelperText error={true}>{requestStep1Form.errors.vehicleManufactureYear}</FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.vehicleChassisNumber"><FormattedMessage
                    id='Fields.label.vehicleChassisNumber'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.vehicleChassisNumber' })}
                      id="Request.Step1.vehicleChassisNumber"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='vehicleChassisNumber'
                      onChange={(event) => {
                        const re = /^[0-9\b]+$/
                        if (event.target.value === '' || re.test(event.target.value)) {
                          requestStep1Form.setFieldValue('vehicleChassisNumber', event.target.value)
                        }
                      }}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.vehicleChassisNumber}
                      helperText={requestStep1Form.errors.vehicleChassisNumber && requestStep1Form.touched.vehicleChassisNumber && requestStep1Form.errors.vehicleChassisNumber}
                      error={requestStep1Form.errors.vehicleChassisNumber && requestStep1Form.touched.vehicleChassisNumber !== undefined}
                    />
                  </FormControl>
                </div>

                <div className={formClasses.FormItem}>
                  <InputLabel id="Request.Step1.vehicleEngineNumber"><FormattedMessage
                    id='Fields.label.vehicleEngineNumber'/></InputLabel>
                  <FormControl variant="outlined">
                    <TextField
                      placeholder={intl.formatMessage({ id: 'Fields.placeholder.vehicleEngineNumber' })}
                      id="Request.Step1.vehicleEngineNumber"
                      type={'text'}
                      margin="dense"
                      variant="outlined"
                      name='vehicleEngineNumber'
                      onChange={(event) => {
                        const re = /^[0-9\b]+$/
                        if (event.target.value === '' || re.test(event.target.value)) {
                          requestStep1Form.setFieldValue('vehicleEngineNumber', event.target.value)
                        }
                      }}
                      onBlur={requestStep1Form.handleBlur}
                      value={requestStep1Form.values.vehicleEngineNumber}
                      helperText={requestStep1Form.errors.vehicleEngineNumber && requestStep1Form.touched.vehicleEngineNumber && requestStep1Form.errors.vehicleEngineNumber}
                      error={requestStep1Form.errors.vehicleEngineNumber && requestStep1Form.touched.vehicleEngineNumber !== undefined}
                    />
                  </FormControl>
                </div>

                <ReCaptcha action='requestStep1Form'
                           handleVerification={(response) => { requestStep1Form.setFieldValue('reCaptcha', response) }}/>

                {!!viewTermsConditionsDialog &&
                <TermsConditionsDialog
                  handleAcceptTermsConditions={()=> onSubmit(requestStep1Form.values, requestStep1Form, handleTermsConditionsPopupDialog)}
                  openTermsConditionsDialog={openTermsConditionsDialog}
                />
                }

                <div className={formClasses.FormSubmitRow}>
                  <Button type={'submit'} variant={'contained'} size={'large'} color={'primary'}
                    // disabled={!requestStep1Form.isValid}
                          className={classes.AdditionalInfoSubmit}>
                    <FormattedMessage id='requestStep1Form.button.submit'/>
                  </Button>
                  <Button variant={'contained'} size={'large'} color={'secondary'}
                          className={classes.AdditionalInfoSubmit}>
                    <FormattedMessage id='requestStep1Form.button.reset'/>
                  </Button>
                </div>
                {requestStep1Form.isSubmitting && <FormLoader loading={true}/>}
              </form>
            </Grid>
          </Paper>
        </Fade>
      )}
    </RequestConsumer>
  )
}

export default RequestStep1
