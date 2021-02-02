import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    '& svg': {
      fontSize: theme.typography.pxToRem(32),
      fontWeight: 600
    },
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: theme.palette.common.white,
      outline: 'none'
    }
  },
  navigationDrawerWrapper: {
    '& .MuiPaper-root': {
      background: 'transparent'
    }
  },
  navigationDrawer: {
    width: 300,
    minHeight: 560,
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing(10, 2),
    height: '100%',
    position: 'relative',
    '& nav': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: theme.spacing(1),
      '& a': {
        fontSize: theme.typography.pxToRem(20),
        margin: theme.spacing(0)
      }
    }
  },
  menuCloseButton: {
    color: theme.palette.common.white + ' !important',
    marginTop: theme.spacing(1) + 'px !important',
    position: 'absolute !important',
    top: 0,
    right: theme.spacing(2),
    '& svg': {
      fontSize: theme.typography.pxToRem(42),
      fontWeight: 600
    },
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: theme.palette.common.white,
      outline: 'none'
    }
  }
}))
