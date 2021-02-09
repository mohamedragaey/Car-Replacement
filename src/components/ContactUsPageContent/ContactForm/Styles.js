import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(9.125)
    }
  },
  FormTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5.5),
    color: theme.palette.tertiary.main,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold
  },
  FormItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap'
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        margin: 0,
        minHeight: 40,
        minWidth: '30%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(2)
      }
    },
    '& .MuiOutlinedInput-root': {
      width: 343,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    '& .MuiFormControl-root': {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  },
  FormSubmitRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(3),
    '&.center': {
      justifyContent: 'center'
    },
    '& button': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      width: 343,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}))
