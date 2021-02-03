import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  initiativeCarsHeader: {
    background: theme.palette.tertiary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2),
    borderTopRightRadius: theme.spacing(0.5),
    borderTopLeftRadius: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
      maxWidth: 300,
      margin: 'auto'
    }
  },
  initiativeCarsItem: {
    position: 'relative',
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
  initiativeCarsItemTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16)
  }
}))
