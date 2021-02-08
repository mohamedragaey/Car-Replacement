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
    padding: theme.spacing(4, 0),
    height: 'calc(100% - 100px)',
    background: theme.palette.common.white
  },
  partnersWrapperInner: {
    width: '100%',
    maxWidth: 819,
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
    margin: theme.spacing(2),
    '& img': {
      width: 123,
      height: 123,
      objectFit: 'contain'
    }
  },
  fullHeight: {
    height: '100%'
  }
}))
