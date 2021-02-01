import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  headerToolbar: {
    minHeight: theme.spacing(8.75),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0)
    }
  },
  headerDesktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1
  }
}))
