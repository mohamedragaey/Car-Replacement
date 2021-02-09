import React from 'react'
import {useFormik} from 'formik'
import {Alert} from '@material-ui/lab'
import {FormattedMessage} from 'react-intl'
import {Button, FormControl, InputLabel, TextField, FormHelperText} from '@material-ui/core'
import {contactFormValidation} from '../../../utils/validationSchema'
import {FormLoader} from '../../Loader/FormLoader'
import ReCaptcha from '../../../utils/ReCaptcha'
import {useStyles} from './Styles'

const ContactForm = ({onSubmit, failure, success}) => {
  const classes = useStyles()
  const formActions = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: contactFormValidation,
    onSubmit: ((values, actions) => {
      onSubmit(values, actions)
    })
  })

  return (
    <form onSubmit={formActions.handleSubmit} noValidate autoComplete="off" className={classes.formWrapper}>
      {!!failure && <Alert severity="error"><FormattedMessage id='ContactForm.FormErrorAlert'/></Alert>}
      {!!success && <Alert severity="success"><FormattedMessage id='ContactForm.FormSuccessAlert'/></Alert>}
      <h2 className={classes.FormTitle}><FormattedMessage id='ContactForm.title'/></h2>
      <div className={classes.FormItem}>
        <InputLabel htmlFor="name" id="ContactForm.name">
          <FormattedMessage id='Fields.label.name'/>
        </InputLabel>
        <FormControl variant="outlined">
          <TextField
            id="name"
            type={'text'}
            margin="dense"
            variant="outlined"
            name='name'
            onChange={formActions.handleChange}
            onBlur={formActions.handleBlur}
            value={formActions.values.name}
            helperText={formActions.errors.name && formActions.touched.name && formActions.errors.name}
            error={formActions.errors.name && formActions.touched.name !== undefined}
          />
        </FormControl>
      </div>
      <div className={classes.FormItem}>
        <InputLabel htmlFor="email" id="ContactForm.email">
          <FormattedMessage id='Fields.label.email'/>
        </InputLabel>
        <FormControl variant="outlined">
          <TextField
            id="email"
            type={'email'}
            margin="dense"
            variant="outlined"
            name='email'
            onChange={formActions.handleChange}
            onBlur={formActions.handleBlur}
            value={formActions.values.email}
            helperText={formActions.errors.email && formActions.touched.email && formActions.errors.email}
            error={formActions.errors.email && formActions.touched.email !== undefined}
          />
        </FormControl>
      </div>
      <div className={classes.FormItem}>
        <InputLabel htmlFor="message" id="ContactForm.message">
          <FormattedMessage id='Fields.label.message'/>
        </InputLabel>
        <FormControl variant="outlined">
          <TextField
            multiline
            rows={4}
            id="message"
            type={'text'}
            margin="dense"
            variant="outlined"
            name='message'
            onChange={formActions.handleChange}
            onBlur={formActions.handleBlur}
            value={formActions.values.message}
            helperText={formActions.errors.message && formActions.touched.message && formActions.errors.message}
            error={formActions.errors.message && formActions.touched.message !== undefined}
          />
        </FormControl>
      </div>

      <ReCaptcha action='formActions'
                 handleVerification={(response) => { formActions.setFieldValue('reCaptcha', response) }}/>
      {formActions.errors.reCaptcha && formActions.touched.reCaptcha && (
        <FormHelperText error={true}>{formActions.errors.reCaptcha}</FormHelperText>
      )}

      <div className={classes.FormSubmitRow}>
        <Button type={'submit'} variant={'contained'} size={'large'} color={'primary'} disabled={!formActions.isValid}>
          <FormattedMessage id='ContactForm.button.submit'/>
        </Button>
      </div>
      {formActions.isSubmitting && <FormLoader loading={true}/>}
    </form>
  )
}

export default ContactForm
