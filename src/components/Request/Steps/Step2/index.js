import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Grid, Fade, Paper } from '@material-ui/core'
import { FormLoader } from '../../../Loader/FormLoader'
import { formStyles } from '../FormStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'

const RequestStep2 = ({ onSubmit }) => {
  const classes = useStyles()
  const formClasses = formStyles()

  return (
    <RequestConsumer>
      {({ requestDataStep2, handleBackStep, requestStep2Loading }) => (
        <Fade in={true}>
          <Paper elevation={4} className={classes.RequestStep2Wrapper}>
            <Grid item xs={12} lg={11}>
              <div className={classes.RequestStep2TableWrapper}>
                <h3><FormattedMessage id='requestSteps.step2.title'/></h3>
                <Grid container>
                  {!!Object.keys(requestDataStep2).length && Object.keys(requestDataStep2).map((licenceAttr, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} className={classes.licenceAttrWrapper}>
                      <Grid item xs={12} sm={5} className={classes.licenceAttrLabel}>
                        <FormattedMessage id={`Fields.label.view.${licenceAttr}`}/>
                      </Grid>
                      <Grid item xs={12} sm={7} className={classes.licenceAttrValue}>
                        {requestDataStep2[licenceAttr]}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div className={formClasses.FormSubmitRow}>
                <Button variant={'contained'} size={'large'} color={'primary'}
                        onClick={onSubmit}>
                  <FormattedMessage id='requestStep.button.Next'/>
                </Button>
                <Button variant={'outlined'} size={'large'} color={'secondary'}
                        className={formClasses.RequestStepGoBack} onClick={handleBackStep}>
                  <FormattedMessage id='requestStep.button.previous'/>
                </Button>
              </div>
              {!!requestStep2Loading && <FormLoader loading={true}/>}
            </Grid>
          </Paper>
        </Fade>
      )}
    </RequestConsumer>
  )
}

export default RequestStep2
