import React from 'react'
import {useFormik} from 'formik'
import {NavLink} from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl'
import {Button, FormGroup, FormHelperText, TextField} from '@material-ui/core'
import {IntroFormValidation} from '../../../../utils/validationSchema'
import {FullBodyLoader} from '../../../Loader/FullBodyLoader'
import {NamedRoutes} from '../../../../routes'
import {useStyles} from './Styles'

const IntroForm = ({onSubmit, error, failure}) => {
  const classes = useStyles()
  const intl = useIntl()

  const formActions = useFormik({
    initialValues: {
      requestNumber: '',
      nationalId: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: IntroFormValidation,
    onSubmit: ((values, actions) => {
      onSubmit(values, actions)
    })
  })


  return (
    <section className={classes.introForm}>
      <NavLink to={NamedRoutes.requestRegistration} className={classes.introFormLink}>
        <FormattedMessage id='intro.Form.Link'/>
      </NavLink>
      <form onSubmit={formActions.handleSubmit} noValidate autoComplete="off" className={classes.formWrapper}>
        <h2 className={classes.formLabel}><FormattedMessage id='IntroForm.label'/></h2>
        <FormGroup row className={classes.formGroup}>
          <TextField
            required
            margin="dense"
            type="text"
            name='requestNumber'
            id='requestNumber'
            variant="outlined"
            label={intl.formatMessage({id: 'Fields.placeholder.requestNumber'})}
            onChange={formActions.handleChange}
            onBlur={formActions.handleBlur}
            value={formActions.values.requestNumber}
            helperText={formActions.errors.requestNumber && formActions.touched.requestNumber && formActions.errors.requestNumber}
            error={formActions.errors.requestNumber && formActions.touched.requestNumber !== undefined}
            inputProps={{
              autoComplete: 'new-requestNumber',
              form: {
                autoComplete: 'off'
              }
            }}
          />
          <TextField
            required
            margin="dense"
            type='text'
            name='nationalId'
            variant="outlined"
            id='nationalId'
            label={intl.formatMessage({id: 'Fields.placeholder.nationalId'})}
            onChange={formActions.handleChange}
            onBlur={formActions.handleBlur}
            value={formActions.values.nationalId}
            helperText={formActions.errors.nationalId && formActions.touched.nationalId && formActions.errors.nationalId}
            error={formActions.errors.nationalId && formActions.touched.nationalId !== undefined}
            InputProps={{ // <-- This is where the toggle button is added.
              autoComplete: 'new-nationalId',
              form: {
                autoComplete: 'off'
              }
            }}
          />
        </FormGroup>
        {!!failure && <FormHelperText error={true}>
          {!!error ? error : <FormattedMessage id='General.FormErrorAlert'/>}
        </FormHelperText>}
        <Button variant='contained' color='secondary' type="submit"
                disabled={formActions.isSubmitting || !formActions.isValid}
                className={classes.formAction}>
          <FormattedMessage id='IntroForm.Submit'/>
        </Button>
        <NavLink className={classes.formActionHelp} to={NamedRoutes.company}>
          <FormattedMessage id='IntroForm.help'/>
        </NavLink>
        {formActions.isSubmitting && <FullBodyLoader loading={true}/>}
      </form>
    </section>
  )
}

export default IntroForm
