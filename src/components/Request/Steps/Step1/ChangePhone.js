import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  Slide,
  TextField
} from '@material-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { RequestConsumer } from '../../../../RequestContext'
import { FormLoader } from '../../../Loader/FormLoader'
import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'
import PhoneInput from 'react-phone-input-2'
import ar from 'react-phone-input-2/lang/ar.json'
import { useStyles } from './Styles'
import { formStyles } from '../FormStyles'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function ChangePhone ({ requestForm, resetPhoneStatus, open, setOpen }) {
  const classes = useStyles()
  const formClasses = formStyles()
  const intl = useIntl()
  const [newOwnerOTPMobileError, setNewOwnerOTPMobileError] = React.useState('')

  const handleClose = () => {
    setOpen(false)
    requestForm.setFieldValue('ownerOTPMobile', '20')
    if (!!resetPhoneStatus) {
      resetPhoneStatus()
    }
  }

  const ownerOTPMobileVerificationCode1Ref = input => {
    if (input && !input.value) {
      setTimeout(() => {input.focus()}, 100)
    }
  }
  const ownerOTPMobileVerificationCode2Ref = React.useRef(null)
  const ownerOTPMobileVerificationCode3Ref = React.useRef(null)
  const ownerOTPMobileVerificationCode4Ref = React.useRef(null)

  return (
    <RequestConsumer>
      {({ handleChangePhoneNumber, verifyNewPhoneNumber, verifyNewPhoneSuccess, confirmNewPhoneSuccess, verifyNewPhoneLoading, verifyNewPhoneFailure, verifyNewPhoneFailureMessage }) => (
        <div>
          <Dialog
            fullWidth
            keepMounted
            open={open}
            TransitionComponent={Transition}
            maxWidth={'xs'}
            classes={{ paper: classes.ChangePhoneDialogPaper }}
            onClose={handleClose}
            aria-labelledby="ChangePhone-title"
            aria-describedby="ChangePhone-description"
          >
            <IconButton
              edge={false}
              className={classes.ChangePhoneDialogClose}
              color="inherit"
              aria-label="close dialog"
              onClick={handleClose}
            >
              <CloseIcon/>
            </IconButton>
            <DialogContent className={classes.ChangePhoneDialogContent}>
              <Box px={4} pt={5} pb={0}>
                {!!verifyNewPhoneLoading && <FormLoader loading={true}/>}
                {!!verifyNewPhoneFailure && !!verifyNewPhoneFailureMessage &&
                <Alert severity="error">{verifyNewPhoneFailureMessage}</Alert>
                }
                {!!confirmNewPhoneSuccess &&
                <Alert severity="success"><FormattedMessage id='ChangePhone.FormSuccessAlert'/></Alert>
                }
                {!!verifyNewPhoneSuccess ?
                  <div className={classes.ChangePhoneVerifyWrapper}>
                    <p align={'center'}><strong><FormattedMessage
                      id='Request.VerificationCode.message'/></strong></p>
                    <div className={classes.ChangePhoneVerify}>
                      <FormControl variant="outlined">
                        <TextField
                          fullWidth
                          autoFocus
                          id="requestForm.ownerOTPMobileVerificationCode1"
                          type='text'
                          margin="dense"
                          variant="outlined"
                          inputRef={ownerOTPMobileVerificationCode1Ref}
                          inputProps={{
                            autoFocus: true,
                            autoComplete: 'new-password',
                            form: {
                              autoComplete: 'off'
                            }
                          }}
                          name='ownerOTPMobileVerificationCode1'
                          onChange={(event) => {
                            const re = /^[0-9\b]{0,1}$/
                            if (event.target.value === '' || re.test(event.target.value)) {
                              requestForm.setFieldValue('ownerOTPMobileVerificationCode1', event.target.value)
                              ownerOTPMobileVerificationCode2Ref.current.focus()
                            }
                          }}
                          onBlur={requestForm.handleBlur}
                          value={requestForm.values.ownerOTPMobileVerificationCode1}
                          error={((requestForm.errors.ownerOTPMobileVerificationCode1 && requestForm.touched.ownerOTPMobileVerificationCode1 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode2 && requestForm.touched.ownerOTPMobileVerificationCode2 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode3 && requestForm.touched.ownerOTPMobileVerificationCode3 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode4 && requestForm.touched.ownerOTPMobileVerificationCode4 !== undefined)
                          )}
                        />
                      </FormControl>
                      <FormControl variant="outlined">
                        <TextField
                          fullWidth
                          id="requestForm.ownerOTPMobileVerificationCode2"
                          type='text'
                          margin="dense"
                          variant="outlined"
                          inputRef={ownerOTPMobileVerificationCode2Ref}
                          inputProps={{
                            autoComplete: 'new-password',
                            form: {
                              autoComplete: 'off'
                            }
                          }}
                          name='ownerOTPMobileVerificationCode2'
                          onChange={(event) => {
                            const re = /^[0-9\b]{0,1}$/
                            if (event.target.value === '' || re.test(event.target.value)) {
                              requestForm.setFieldValue('ownerOTPMobileVerificationCode2', event.target.value)
                              ownerOTPMobileVerificationCode3Ref.current.focus()
                            }
                          }}
                          onBlur={requestForm.handleBlur}
                          value={requestForm.values.ownerOTPMobileVerificationCode2}
                          error={((requestForm.errors.ownerOTPMobileVerificationCode1 && requestForm.touched.ownerOTPMobileVerificationCode1 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode2 && requestForm.touched.ownerOTPMobileVerificationCode2 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode3 && requestForm.touched.ownerOTPMobileVerificationCode3 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode4 && requestForm.touched.ownerOTPMobileVerificationCode4 !== undefined)
                          )}
                        />
                      </FormControl>
                      <FormControl variant="outlined">
                        <TextField
                          fullWidth
                          id="requestForm.ownerOTPMobileVerificationCode3"
                          type='text'
                          margin="dense"
                          variant="outlined"
                          inputRef={ownerOTPMobileVerificationCode3Ref}
                          inputProps={{
                            autoComplete: 'new-password',
                            form: {
                              autoComplete: 'off'
                            }
                          }}
                          name='ownerOTPMobileVerificationCode3'
                          onChange={(event) => {
                            const re = /^[0-9\b]{0,1}$/
                            if (event.target.value === '' || re.test(event.target.value)) {
                              requestForm.setFieldValue('ownerOTPMobileVerificationCode3', event.target.value)
                              ownerOTPMobileVerificationCode4Ref.current.focus()
                            }
                          }}
                          onBlur={requestForm.handleBlur}
                          value={requestForm.values.ownerOTPMobileVerificationCode3}
                          error={((requestForm.errors.ownerOTPMobileVerificationCode1 && requestForm.touched.ownerOTPMobileVerificationCode1 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode2 && requestForm.touched.ownerOTPMobileVerificationCode2 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode3 && requestForm.touched.ownerOTPMobileVerificationCode3 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode4 && requestForm.touched.ownerOTPMobileVerificationCode4 !== undefined)
                          )}
                        />
                      </FormControl>
                      <FormControl variant="outlined">
                        <TextField
                          fullWidth
                          id="requestForm.ownerOTPMobileVerificationCode4"
                          type='text'
                          margin="dense"
                          variant="outlined"
                          inputRef={ownerOTPMobileVerificationCode4Ref}
                          inputProps={{
                            autoComplete: 'new-password',
                            form: {
                              autoComplete: 'off'
                            }
                          }}
                          name='ownerOTPMobileVerificationCode4'
                          onChange={(event) => {
                            const re = /^[0-9\b]{0,1}$/
                            if (event.target.value === '' || re.test(event.target.value)) {
                              requestForm.setFieldValue('ownerOTPMobileVerificationCode4', event.target.value)
                            }
                          }}
                          onBlur={requestForm.handleBlur}
                          value={requestForm.values.ownerOTPMobileVerificationCode4}
                          error={((requestForm.errors.ownerOTPMobileVerificationCode1 && requestForm.touched.ownerOTPMobileVerificationCode1 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode2 && requestForm.touched.ownerOTPMobileVerificationCode2 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode3 && requestForm.touched.ownerOTPMobileVerificationCode3 !== undefined)
                            || (requestForm.errors.ownerOTPMobileVerificationCode4 && requestForm.touched.ownerOTPMobileVerificationCode4 !== undefined)
                          )}
                        />
                      </FormControl>
                    </div>

                    {((requestForm.errors.ownerOTPMobileVerificationCode1 && requestForm.touched.ownerOTPMobileVerificationCode1 !== undefined)
                      || (requestForm.errors.ownerOTPMobileVerificationCode2 && requestForm.touched.ownerOTPMobileVerificationCode2 !== undefined)
                      || (requestForm.errors.ownerOTPMobileVerificationCode3 && requestForm.touched.ownerOTPMobileVerificationCode3 !== undefined)
                      || (requestForm.errors.ownerOTPMobileVerificationCode4 && requestForm.touched.ownerOTPMobileVerificationCode4 !== undefined)
                    ) &&
                    <FormHelperText margin="dense" variant='outlined' className={classes.requireError}
                                    error={true}><FormattedMessage id='validationSchema.allRequired'/></FormHelperText>}

                    <div className={formClasses.FormSubmitRow + ' center'}>
                      <Button variant={'contained'}
                              disabled={!(requestForm.values.ownerOTPMobileVerificationCode1
                                && requestForm.values.ownerOTPMobileVerificationCode2
                                && requestForm.values.ownerOTPMobileVerificationCode3
                                && requestForm.values.ownerOTPMobileVerificationCode4
                              )}
                              onClick={() => {
                                handleChangePhoneNumber(
                                  [requestForm.values.ownerOTPMobileVerificationCode1,
                                    requestForm.values.ownerOTPMobileVerificationCode2,
                                    requestForm.values.ownerOTPMobileVerificationCode3,
                                    requestForm.values.ownerOTPMobileVerificationCode4].join(''), requestForm, handleClose)
                              }} color="primary">
                        <FormattedMessage id='requestStep1Form.button.submit'/>
                      </Button>
                    </div>
                  </div>
                  :
                  <div className={classes.ChangePhoneVerifyWrapper}>
                    <p align={'center'}><strong><FormattedMessage
                      id='Request.ChangePhone.message'/></strong></p>
                    <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                      <InputLabel id="Request.Step1.ownerOTPMobile"><FormattedMessage
                        id='Fields.label.Mobile'/></InputLabel>
                      <div className={formClasses.PhoneInputWrapper}>
                        <PhoneInput
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
                            name: 'ownerOTPMobile',
                            required: true,
                            autoFocus: true
                          }}
                          searchPlaceholder={intl.formatMessage({ id: 'PhoneInput.Search.placeholder' })}
                          searchNotFound={intl.formatMessage({ id: 'PhoneInput.Search.noResults' })}
                          onBlur={requestForm.handleBlur}
                          value={requestForm.values.ownerOTPMobile}
                          helperText={requestForm.errors.ownerOTPMobile && requestForm.touched.ownerOTPMobile && requestForm.errors.ownerOTPMobile}
                          error={requestForm.errors.ownerOTPMobile && requestForm.touched.ownerOTPMobile !== undefined}
                          onChange={(phone) => {
                            requestForm.setFieldValue('ownerOTPMobile', phone.toString())
                          }}
                          isValid={(value, country) => {
                            if (country.iso2 === 'eg' && value.length > 13) {
                              setNewOwnerOTPMobileError(intl.formatMessage({ id: 'validationSchema.phoneError' }))
                              return false
                            } else {
                              setNewOwnerOTPMobileError('')
                              return true
                            }
                          }}
                        />
                        {!!newOwnerOTPMobileError ?
                          <FormHelperText margin="dense" variant='outlined'
                                          error={true}>{newOwnerOTPMobileError}</FormHelperText>
                          : (requestForm.errors.ownerOTPMobile && requestForm.touched.ownerOTPMobile &&
                            <FormHelperText margin="dense" variant='outlined'
                                            error={true}>{requestForm.errors.ownerOTPMobile}</FormHelperText>)}
                      </div>
                    </div>
                    <div className={formClasses.FormSubmitRow + ' center'}>
                      <Button variant={'contained'}
                              disabled={!!newOwnerOTPMobileError || requestForm.values.ownerOTPMobile.length < 12}
                              onClick={() => verifyNewPhoneNumber(requestForm.values.ownerOTPMobile)}
                              color="primary">
                        <FormattedMessage id='ChangePhone.DialogActions.verify'/>
                      </Button>
                    </div>
                  </div>
                }
              </Box>
            </DialogContent>
            <DialogActions className={classes.ChangePhoneDialogFooter}>
              <Button onClick={handleClose} color="primary">
                <FormattedMessage id='ChangePhone.DialogActions.cancel'/>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </RequestConsumer>
  )
}
