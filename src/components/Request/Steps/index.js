import React from 'react'
import { Grid, Stepper, Step, StepButton, StepContent, StepLabel } from '@material-ui/core'
import { sm } from '../../../utils/ResponsiveUtility'
import { RequestConsumer } from '../../../RequestContext'
import { useStyles, RequestStepsConnector, requestStepIconStyles } from './Styles'

const RequestSteps = () => {
  const classes = useStyles()
  let [width, setWidth] = React.useState(document.body.clientWidth)
  let Mobile = (width < sm)

  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  const requestStepIcon = (props, icon) => {
    const classes = requestStepIconStyles()
    const { active, completed } = props
    let iconClasses = [classes.root]
    if (!!active) iconClasses.push(classes.active)
    if (!!completed) iconClasses.push(classes.completed)
    return (
      <div className={iconClasses.join(' ')}>
        {icon}
      </div>
    )
  }

  return (
    <RequestConsumer>
      {({
          requestActiveStep, requestSteps, getRequestStepContent, handleNextStep, handleBackStep, handleGoToStep,
          isRequestStepComplete, inRequestStepsTrail
        }) => (
        <>
          <Stepper className={classes.StepperWrapper}
                   activeStep={requestActiveStep} {...!!Mobile ? { orientation: 'vertical' } : {
            connector: <RequestStepsConnector/>, alternativeLabel: true
          }}>
            {requestSteps.map((step, index) => (
              <Step key={step.key}>
                <StepButton
                  disableRipple
                  onClick={() => handleGoToStep(index)}
                  completed={isRequestStepComplete(index)}
                  disabled={!(isRequestStepComplete(index) || inRequestStepsTrail(index))}
                >
                  <StepLabel
                    StepIconComponent={(props) => requestStepIcon(props, step.icon)}>{step.title}</StepLabel>
                </StepButton>
                {!!Mobile &&
                <StepContent>
                  {getRequestStepContent(index)}
                  {/*<div className={classes.actionsContainer}>*/}
                  {/*  <div>*/}
                  {/*    <Button*/}
                  {/*      disabled={requestActiveStep === 0}*/}
                  {/*      onClick={handleBackStep}*/}
                  {/*      className={classes.backButton}*/}
                  {/*    >*/}
                  {/*      Back*/}
                  {/*    </Button>*/}
                  {/*    <Button*/}
                  {/*      variant="contained"*/}
                  {/*      color="primary"*/}
                  {/*      onClick={handleNextStep}*/}
                  {/*      className={classes.button}*/}
                  {/*    >*/}
                  {/*      {requestActiveStep === requestSteps.length - 1 ? 'Finish' : 'Next'}*/}
                  {/*    </Button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </StepContent>
                }
              </Step>
            ))}
          </Stepper>
          <Grid container>
            {getRequestStepContent(requestActiveStep)}
          </Grid>
        </>
      )}
    </RequestConsumer>
  )
}
export default RequestSteps
