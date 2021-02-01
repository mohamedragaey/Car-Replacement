import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  notFoundWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(5, 1)
  },
  notFoundNumber: {
    color: theme.palette.primary.main,
    display: 'block',
    fontSize: '6rem',
    letterSpacing: '1rem',
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      fontSize: '12rem',
      letterSpacing: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20rem',
      letterSpacing: '4rem'
    }
  }
}))
