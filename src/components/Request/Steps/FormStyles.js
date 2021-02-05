import { makeStyles } from '@material-ui/core/styles'

export const formStyles = makeStyles((theme) => ({
  formWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%'
  },
  FormItem: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap'
    },
    [theme.breakpoints.up('md')]: {
      width: '47%'
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        margin: 0,
        minHeight: 40,
        minWidth: '25%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(2)
      }
    },
    '& .MuiOutlinedInput-root': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    },
    '& .MuiFormControl-root': {
      flex: '1 1 auto'
    },
    '& .MuiFormGroup-root[role="radiogroup"]': {
      flexDirection: 'row',
      '& .MuiFormControlLabel-root': {
        marginBottom: theme.spacing(0)
      }
    },
    '& a': {
      display: 'block',
      width: '100%',
      textAlign: 'right'
    }
  },
  FormItemSelect: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  },
  FormRow: {
    width: '100%'
  },
  FormLicenseNumberRow: {
    justifyContent: 'center'
  },
  FormLettersControls: {
    '& .MuiFormControl-root': {
      minWidth: 100,
      marginRight: theme.spacing(2)
    }
  },
  FormNumbersWrapper: {
    width: 150,
    flexGrow: '0 !important',
    '&.onlyNumbers': {
      width: 200
    },
    '& .MuiFormControl-marginDense': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0)
    }
  },
  PhoneInputButton: {},
  PhoneInputWrapper: {
    direction: 'rtl',
    textAlign: 'right',
    flex: '1 1 auto',
    // width: '100%',
    '& .react-tel-input': {
      fontFamily: 'inherit',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.5)
    },
    '& .react-tel-input .form-control': {
      width: '100%',
      paddingTop: theme.spacing(1.325),
      paddingBottom: theme.spacing(1.125),
      paddingRight: theme.spacing(5.625),
      '&[disabled]': {
        backgroundColor: theme.palette.colors.body
      }
    },
    '& $PhoneInputButton': {
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.5),
      '& .react-tel-input': {
        fontFamily: 'inherit',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0)
      }
    },
    '& .country-list': {
      direction: 'ltr',
      textAlign: 'left',

      '& .search': {
        paddingLeft: theme.spacing(1.25)
      },
      '& .search-box': {
        marginLeft: theme.spacing(1)
      },
      '& .country-name': {
        marginRight: theme.spacing(1)
      },
      '& .dial-code': {
        direction: 'rtl',
        textAlign: 'right',
        display: 'inline-block'
      }
    }
  },

  FormLetterOption: {
    [theme.breakpoints.up('sm')]: {
      minHeight: 40
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
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing(2),
      color: theme.palette.common.white,
      minWidth: '22.5%'
    }
  }
}))
