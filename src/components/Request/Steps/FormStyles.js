import { fade, makeStyles } from '@material-ui/core/styles'

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
      flex: '1 1 auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
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
  FormInner: {
    justifyContent: 'center',
    '& $FormItem': {
      [theme.breakpoints.up('md')]: {
        width: '67%'
      }
    }
  },

  FormUpload: {
    justifyContent: 'center',
    '& $FormItem': {
      [theme.breakpoints.up('md')]: {
        width: '100%'
      },
      '& .MuiInputLabel-root': {
        [theme.breakpoints.up('sm')]: {
          minWidth: '36%'
        }
      }
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
        cursor: 'pointer'
        // backgroundColor: theme.palette.colors.body
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
  RequestStepGoBack: {},
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
      '&:not($RequestStepGoBack)': {
        color: theme.palette.common.white,
        minWidth: '22.5%'
      }
    }
  },
  fileUploadWrapper: {
    position: 'relative',
    width: '100%',
    height: 40,
    boxShadow: `0px 0px 5px 2px ${fade(theme.palette.colors.border, 0.2)}`,
    borderRadius: theme.spacing(0.75),

    '&:after': {
      content: 'attr(data-text)',
      fontSize: theme.typography.pxToRem(14),
      position: 'absolute',
      top: 0,
      left: 0,
      background: theme.palette.common.white,
      padding: theme.spacing(1.25, 2),
      display: 'block',
      width: 'calc(100% - 40px)',
      pointerEvents: 'none',
      zIndex: 20,
      height: 40,
      lineHeight: theme.typography.pxToRem(18),
      color: '#999',
      borderRadius: theme.spacing(0.625, 1.25, 1.25, 0.625),
      fontWeight: theme.typography.fontWeightRegular
    },
    '&:before': {
      content: `${theme.direction === 'ltr' ? '\'Upload\'' : '\'إرفاق\''}`,
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'inline-block',
      height: 40,
      transition: 'all 0.3s ease-in-out',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      zIndex: 25,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(38),
      padding: theme.spacing(0, 3),
      textTransform: 'uppercase',
      pointerEvents: 'none',
      borderRadius: theme.spacing(0, 0.625, 0.625, 0)
    },

    '&:hover': {
      '&:before': {
        background: theme.palette.primary.dark
      }
    },
    '& input': {
      opacity: 0,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 99,
      height: 40,
      margin: 0,
      padding: 0,
      display: 'block',
      cursor: 'pointer',
      width: '100%'
    }
  }
}))
