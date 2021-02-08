import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  partnersWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  partnersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(14, 0, 4),
    height: 'calc(100% - 100px)',
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0)
    }
  },
  partnersWrapperInner: {
    width: '100%',
    maxWidth: 870,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  partnersItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 3, 9.5),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2)
    },
    '& img': {
      width: 126,
      height: 126,
      objectFit: 'contain'
    }
  },
  fullHeight: {
    height: '100%'
  }
}))
