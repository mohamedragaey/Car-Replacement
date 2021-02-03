import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  header: {
    '&.MuiAppBar-root': {
      backgroundColor: '#f1f1f1',
      padding: theme.spacing(1, 0),
      '&.inverse-Header': {
        backgroundColor: theme.palette.common.white,
        '& $headerDesktop': {
          alignItems: 'center'
        }
      }
    }
  },
  headerToolbar: {
    minHeight: theme.spacing(8.75),
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0)
    }
  },
  headerDesktop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexGrow: 1,
    marginTop: theme.spacing(-1)
  },
  headerGridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'nowrap'
    }
  }
}))
