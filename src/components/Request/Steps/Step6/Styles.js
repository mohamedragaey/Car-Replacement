import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  RequestStep6Wrapper: {
    width: '100%',
    padding: theme.spacing(5, 3),
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  confirmationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  successAlert: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    maxWidth: '100%',
    padding: theme.spacing(0.375, 2),
    marginBottom: theme.spacing(3),
    fontSize: theme.typography.pxToRem(16)
  },
  requestNumber: {
    background: '#392626',
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1.25, 3),
    borderRadius: theme.spacing(0.625),
    marginBottom: theme.spacing(2)
  },
  nextStepsWrapper: {
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.7,
    '& li': {
      marginBottom: theme.spacing(0.5)
    }
  }
}))
