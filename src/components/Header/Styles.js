import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  header: {
    transition: 'all 0.5s ease-in-out',
    '&.MuiAppBar-root': {
      backgroundColor: '#f1f1f1',
      '&.inverse-Header': {
        backgroundColor: theme.palette.common.white,
        '& $headerDesktop': {
          alignItems: 'center'
        }
      }
    },
    '&.shrink': {
      boxShadow: '0 0 5px hsl(0, 0%, 85%)',
      transition: 'all 0.5s ease-in-out',
      padding: theme.spacing(0)
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
    flexGrow: 1
  },
  headerGridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'nowrap'
    }
  }
}))
