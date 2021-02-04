import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    transition: 'all 0.5s ease-in-out',
    '.shrink &': {},
    [theme.breakpoints.up('lg')]: {
      // paddingRight: theme.spacing(8),
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
    objectFit: 'contain',
    transition: 'all 0.5s ease-in-out',
    '.shrink &': {
      width: 50
    }
  },
  tamweelLogo: {
    width: 100,
    transition: 'all 0.5s ease-in-out',
    '.shrink &': {
      width: 90
    }
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
