import {makeStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  introForm: {
    maxWidth: 424,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8)
    }
  },
  introFormLink: {
    width: '100%',
    padding: theme.spacing(1, 10),
    fontSize: theme.typography.pxToRem(14),
    background: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    lineHeight: '1.5',
    borderRadius: theme.spacing(0.6),
    color: theme.palette.common.white,
    display: 'inline-block',
    textDecoration: 'none',
    textAlign: 'center',
    '&:hover,&:focus': {
      color: theme.palette.common.white,
      background: theme.palette.secondary.dark
    }
  },
  formLabel: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.tertiary.main,
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing(5)
  },
  formAction: {
    '&.MuiButton-root': {
      width: '100%',
      padding: theme.spacing(1, 10),
      fontSize: theme.typography.pxToRem(14),
      background: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      lineHeight: '1.5',
      borderRadius: theme.spacing(0.6),
      color: theme.palette.common.white,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    '&.MuiButton-contained.Mui-disabled': {
      color: fade(theme.palette.common.black, 0.26),
      backgroundColor: fade(theme.palette.common.black, 0.12)
    }
  },
  formGroup: {
    flexWrap: 'nowrap',
    '& .MuiFormControl-marginDense': {
      '&:not(:last-of-type)': {
        marginRight: theme.spacing(1)
      }
    }
  },
  formActionHelp: {
    textDecoration: 'none',
    display: 'inline-block',
    color: theme.palette.common.black,
    fontSize: theme.typography.pxToRem(10)
  }
}))
