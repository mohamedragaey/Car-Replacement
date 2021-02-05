import { makeStyles, withStyles } from '@material-ui/core/styles'
import { StepConnector } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  StepperWrapper:{
    backgroundColor: 'transparent'
  }
}))

export const requestStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    minWidth: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    padding: 0,
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgba(210,144,44,1) 0%, rgba(181,19,24,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgba(210,144,44,1) 0%, rgba(181,19,24,1) 100%)'
  }
})

export const RequestStepsConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line:before': {
      width: '100%'
    }
  },
  completed: {
    '& $line:before': {
      width: '100%'
    }
  },
  line: {
    height: 4,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    position: 'relative',
    '&:before': {
      content: '""',
      width: 0,
      left: 0,
      top: 0,
      display: 'block',
      height: '100%',
      zIndex: 0,
      transition: 'all 0.3s ease-in-out',
      backgroundImage: 'linear-gradient( 95deg,rgba(210,144,44,1) 0%, rgba(181,19,24,1) 100%)'
    }
  }
})(StepConnector)