import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  aboutWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  aboutWrapper: {
    height: 'calc(100% - 100px)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(3, 4),
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3)
    }
  },
  aboutImage: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  fullHeight: {
    height: '100%'
  }
}))
