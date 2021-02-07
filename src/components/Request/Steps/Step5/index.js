import React from 'react'
import { useFormik } from 'formik'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Button,
  FormControl,
  InputLabel,
  Grid,
  FormHelperText, Fade, Paper
} from '@material-ui/core'
import { requestStep5FormValidation } from '../../../../utils/validationSchema'
import { formStyles } from '../FormStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import { FormLoader } from '../../../Loader/FormLoader'

const RequestStep5 = ({ onSubmit }) => {
  const classes = useStyles()
  const formClasses = formStyles()
  const intl = useIntl()
  const requestStep5Form = useFormik({
    initialValues: {
      nationalIdPic: '',
      proofOfDomicilePic: '',
      vehicleLicensePic: '',
      annualIncomePic: '',
      socialPrintPic: '',
      criminalPaperPic: '',
      taxPaperPic: '',
      militaryCertificatePic: '',
      drugAbusePic: ''
      // reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: requestStep5FormValidation,
    onSubmit: ((values, actions) => {
      onSubmit(values, actions)
    })
  })
  const [filesNames, setFilesNames] = React.useState({
    nationalIdPic: intl.formatMessage({ id: 'Fields.placeholder.nationalIdPic' }),
    proofOfDomicilePic: intl.formatMessage({ id: 'Fields.placeholder.proofOfDomicilePic' }),
    vehicleLicensePic: intl.formatMessage({ id: 'Fields.placeholder.vehicleLicensePic' }),
    annualIncomePic: intl.formatMessage({ id: 'Fields.placeholder.annualIncomePic' }),
    socialPrintPic: intl.formatMessage({ id: 'Fields.placeholder.socialPrintPic' }),
    criminalPaperPic: intl.formatMessage({ id: 'Fields.placeholder.criminalPaperPic' }),
    taxPaperPic: intl.formatMessage({ id: 'Fields.placeholder.taxPaperPic' }),
    militaryCertificatePic: intl.formatMessage({ id: 'Fields.placeholder.militaryCertificatePic' }),
    drugAbusePic: intl.formatMessage({ id: 'Fields.placeholder.drugAbusePic' })
  })
  const handleFileChange = (event, fieldName) => {
    event.preventDefault()
    requestStep5Form.setFieldError(fieldName, null)
    let reader = new FileReader()
    let files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/svg+xml' || file.type === 'image/webp') {
        if (file.size <= 2000000) {
          reader.readAsDataURL(file)
          requestStep5Form.setFieldValue(fieldName, file)
          setFilesNames((prevState => ({ ...prevState, [fieldName]: event.target.value.replace(/.*(\/|\\)/, '') })))
        } else {
          requestStep5Form.setFieldTouched(fieldName, true, true)
          setTimeout(() => requestStep5Form.setFieldError(fieldName, intl.formatMessage({ id: 'validationSchema.largeImage' })), 50)
        }
      } else {
        requestStep5Form.setFieldTouched(fieldName, true, true)
        setTimeout(() => requestStep5Form.setFieldError(fieldName, intl.formatMessage({ id: 'validationSchema.unSupported' })), 50)

      }
    }
  }

  return (
    <RequestConsumer>
      {({ handleBackStep }) => (
        <Fade in={true}>
          <Paper elevation={4} className={classes.RequestStep5Wrapper}>
            <Grid item xs={12} lg={10}>
              <form onSubmit={requestStep5Form.handleSubmit} noValidate autoComplete="off"
                    className={formClasses.formWrapper + ' ' + formClasses.FormUpload}>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.nationalIdPic"><FormattedMessage
                    id='Fields.label.nationalIdPic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['nationalIdPic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="nationalIdPic"
                        name="nationalIdPic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'nationalIdPic')}
                      />
                    </div>
                    {requestStep5Form.errors.nationalIdPic && requestStep5Form.touched.nationalIdPic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.nationalIdPic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.proofOfDomicilePic"><FormattedMessage
                    id='Fields.label.proofOfDomicilePic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['proofOfDomicilePic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="proofOfDomicilePic"
                        name="proofOfDomicilePic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'proofOfDomicilePic')}
                      />
                    </div>
                    {requestStep5Form.errors.proofOfDomicilePic && requestStep5Form.touched.proofOfDomicilePic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.proofOfDomicilePic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.vehicleLicensePic"><FormattedMessage
                    id='Fields.label.vehicleLicensePic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['vehicleLicensePic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="vehicleLicensePic"
                        name="vehicleLicensePic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'vehicleLicensePic')}
                      />
                    </div>
                    {requestStep5Form.errors.vehicleLicensePic && requestStep5Form.touched.vehicleLicensePic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.vehicleLicensePic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.annualIncomePic"><FormattedMessage
                    id='Fields.label.annualIncomePic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['annualIncomePic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="annualIncomePic"
                        name="annualIncomePic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'annualIncomePic')}
                      />
                    </div>
                    {requestStep5Form.errors.annualIncomePic && requestStep5Form.touched.annualIncomePic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.annualIncomePic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.socialPrintPic"><FormattedMessage
                    id='Fields.label.socialPrintPic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['socialPrintPic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="socialPrintPic"
                        name="socialPrintPic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'socialPrintPic')}
                      />
                    </div>
                    {requestStep5Form.errors.socialPrintPic && requestStep5Form.touched.socialPrintPic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.socialPrintPic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.criminalPaperPic"><FormattedMessage
                    id='Fields.label.criminalPaperPic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['criminalPaperPic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="criminalPaperPic"
                        name="criminalPaperPic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'criminalPaperPic')}
                      />
                    </div>
                    {requestStep5Form.errors.criminalPaperPic && requestStep5Form.touched.criminalPaperPic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.criminalPaperPic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.taxPaperPic"><FormattedMessage
                    id='Fields.label.taxPaperPic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['taxPaperPic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="taxPaperPic"
                        name="taxPaperPic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'taxPaperPic')}
                      />
                    </div>
                    {requestStep5Form.errors.taxPaperPic && requestStep5Form.touched.taxPaperPic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.taxPaperPic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.militaryCertificatePic"><FormattedMessage
                    id='Fields.label.militaryCertificatePic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['militaryCertificatePic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="militaryCertificatePic"
                        name="militaryCertificatePic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'militaryCertificatePic')}
                      />
                    </div>
                    {requestStep5Form.errors.militaryCertificatePic && requestStep5Form.touched.militaryCertificatePic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.militaryCertificatePic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className={formClasses.FormItem + ' ' + formClasses.FormRow}>
                  <InputLabel id="Request.Step5.drugAbusePic"><FormattedMessage
                    id='Fields.label.drugAbusePic'/></InputLabel>
                  <FormControl variant="outlined" margin="dense">
                    <div className={formClasses.fileUploadWrapper} data-text={filesNames['drugAbusePic']}>
                      <input
                        accept="image/*"
                        className={formClasses.fileUpload}
                        id="drugAbusePic"
                        name="drugAbusePic"
                        multiple
                        type="file"
                        onChange={(event) => handleFileChange(event, 'drugAbusePic')}
                      />
                    </div>
                    {requestStep5Form.errors.drugAbusePic && requestStep5Form.touched.drugAbusePic && (
                      <FormHelperText error={true}>{requestStep5Form.errors.drugAbusePic}</FormHelperText>
                    )}
                  </FormControl>
                </div>
                {/*<ReCaptcha action='requestStep5Form'*/}
                {/*           handleVerification={(response) => { requestStep4Form.setFieldValue('reCaptcha', response) }}/>*/}
                {/*{requestStep4Form.errors.reCaptcha && requestStep4Form.touched.reCaptcha && (*/}
                {/*  <FormHelperText error={true}>{requestStep4Form.errors.reCaptcha}</FormHelperText>*/}
                {/*)}*/}
                {!!requestStep5Form.isSubmitting && <FormLoader loading={true}/>}

                <div className={formClasses.FormSubmitRow}>
                  <Button type={'submit'} variant={'contained'} size={'large'} color={'primary'}>
                    <FormattedMessage id='requestStep.button.Next'/>
                  </Button>
                  <Button variant={'outlined'} size={'large'} color={'secondary'}
                          className={formClasses.RequestStepGoBack} onClick={handleBackStep}>
                    <FormattedMessage id='requestStep.button.previous'/>
                  </Button>
                </div>

              </form>
            </Grid>
          </Paper>
        </Fade>
      )}
    </RequestConsumer>
  )
}

export default RequestStep5
