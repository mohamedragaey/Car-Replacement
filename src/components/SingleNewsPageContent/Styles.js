import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  newsWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  newsWrapper: {
    height: 'calc(100% - 100px)',
    display: 'flex',
    padding: theme.spacing(5.5),
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  fullHeight: {
    height: '100%'
  },
  newsDetails: {
    display: 'flex',
    padding: theme.spacing(0, 2.5),
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
      padding: theme.spacing(0, 1.5),
    }
  },
  newsDetailsImage: {
    flex: '0 0 auto',
    textAlign: 'center',
    '& img': {
      width: 345,
      height: 200,
      objectFit: 'cover'
    }
  },
  newsDetailsInner:{
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(5),
    }
  },
  newsDetailsTitle: {
    color: theme.palette.tertiary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    marginTop:theme.spacing(0)
  },
  newsDetailsDate: {
    color: theme.palette.tertiary.main,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14)
  },
  newsDetailsLinkWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
}))
