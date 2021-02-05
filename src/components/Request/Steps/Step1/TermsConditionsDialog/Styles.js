import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  TermsConditionsDialogPaper: {
    borderRadius: 0
  },
  TermsConditionsDialogContent: {
    padding: '0 !important',
    position: 'relative',
    '& p': {
      marginBottom: theme.spacing(1)
    }
  },
  TermsConditionsDialogHeader: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.colors.body,
    border: `1px solid ${theme.palette.colors.border}`,
    '& .MuiTypography-root': {
      color: theme.palette.primary.light,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  NewOrderOkAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TermsConditionsDialogFooter: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 2, 2, 4),
    boxShadow: `0px 0px 24px -14px ${fade(theme.palette.common.black, 0.8)}`
  },
  AcceptTermsConditionsTitle: {
    fontSize: theme.typography.pxToRem(20)
  }
}))
