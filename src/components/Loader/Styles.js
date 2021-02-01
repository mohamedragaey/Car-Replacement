import {fade, makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  loaderWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    background: theme.palette.common.white
  },
  formLoaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: fade(theme.palette.common.white, 0.5)
  },
  buttonLoaderWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullBodyLoaderWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1999,
    backgroundColor: fade(theme.palette.common.white, 0.5)
  },
  SearchLoaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 999,
    height: 300,
    backgroundColor: fade(theme.palette.common.white, 0.5)
  }
}))
