import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  initiativeScope: {
    background: '#1D1717',
    position: 'relative',
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(1.25)
  },
  initiativeScopeHeader: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      maxWidth: 300,
      margin: 'auto',
      width: '100%'
    }
  },
  initiativeScopeItem: {
    width: `calc(100% + 32px)`,
    border: `4px solid #D2902C`,
    height: 170,
    color: theme.palette.common.white,
    padding: theme.spacing(4, 3),
    marginLeft: theme.spacing(-2),
    [theme.breakpoints.down('md')]: {
      maxWidth: 300,
      margin: 'auto'
    },
    '& a': {
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.tertiary.main}`
    },
    '& img': {
      height: '100%',
      objectFit: 'cover'
    }
  },
  initiativeScopeItemTitle: {
    marginTop: theme.spacing(0)
  }
}))
