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
  }
}))
