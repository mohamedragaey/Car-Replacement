import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  RequestStep1Wrapper: {
    width: '100%',
    padding: theme.spacing(3, 3, 5),
    display: 'flex',
    justifyContent: 'center'
  },
  ChangePhoneDialogPaper: {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.colors.body
  },
  ChangePhoneDialogContent: {
    padding: '0 !important',
    position: 'relative'
  },
  ChangePhoneDialogClose: {
    position: 'absolute',
    zIndex: 10,
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.primary.dark
  },
  ChangePhoneDialogFooter: {
    padding: theme.spacing(2)
  },
  ChangePhoneVerify: {
    display: 'flex',
    justifyContent: 'center',
    direction: 'rtl',
    '& > .MuiFormControl-root': {
      width: 45,
      margin: theme.spacing(0, 1),
      '& input': {
        textAlign: 'center'
      }
    }
  },
  requireError: {
    textAlign: 'center'
  }
}))
