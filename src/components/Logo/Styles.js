import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 109,
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8),
      '&.inner': {
        paddingRight: theme.spacing(0)
      }
    },
    '& a': {
      display: 'flex',
      flex: '0 0 100'
    }
  },
  ministryLogo: {
    marginRight: theme.spacing(2)
  },
  ministryLogoImage: {
    width: 80,
    objectFit: 'contain'
  },
  tamweelLogo: {
    width: 100
  },
  innerLogo: {
    maxWidth: 220,
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    textDecoration: 'none',
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      '.inner &': {
        display: 'none'
      }
    }
  }
}))
