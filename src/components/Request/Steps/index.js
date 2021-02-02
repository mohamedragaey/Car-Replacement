import React from 'react'
import { Button, Stepper, Step, StepButton, Typography } from '@material-ui/core'
import { useStyles } from './Styles'

const RequestSteps = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [stepsTrail, setStepsTrail] = React.useState(new Set())
  const [completed, setCompleted] = React.useState(new Set())
  const steps = getSteps()

  function getSteps () {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']
  }

  function getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...'
      case 1:
        return 'What is an ad group anyways?'
      case 2:
        return 'This is the bit I really care about!'
      default:
        return 'Unknown stepIndex'
    }
  }

  const handleNext = () => {
    const newCompleted = new Set(completed)
    newCompleted.add(activeStep)
    setCompleted(newCompleted)

    const newStepsTrail = new Set(stepsTrail)
    newStepsTrail.add(activeStep + 1)
    setStepsTrail(newStepsTrail)

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  function isStepComplete (step) {
    return completed.has(step)
  }

  function inStepsTrail (step) {
    return stepsTrail.has(step)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            {/*<StepLabel>{label}</StepLabel>*/}
            <StepButton
              onClick={handleStep(index)}
              completed={isStepComplete(index)}
              disabled={!(isStepComplete(index) || inStepsTrail(index))}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default RequestSteps
