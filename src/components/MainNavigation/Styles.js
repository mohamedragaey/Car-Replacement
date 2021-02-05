import {fade, makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  mainNavigationWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center'
  },
  mainNavigation: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      position: 'relative',
      paddingRight: 43,
      paddingLeft: 43,
      '&:before': {
        content: '""',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: `0 43px 43px 0`,
        borderColor: `transparent ${theme.palette.tertiary.main} transparent transparent`,
        position: 'absolute',
        left: 0
      },
      '&:after': {
        content: '""',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: `43px 43px 0 0`,
        borderColor: `${theme.palette.tertiary.main} transparent transparent transparent`,
        position: 'absolute',
        right: 0,
        '.inverse-Header &': {
          width: '100%',
          height: '100%',
          left: 'calc(100% - 43px)'
        }
      }
    },
    '& ul': {
      listStyle: 'none',
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        backgroundColor: theme.palette.tertiary.main
      }
    },
    '& a': {
      color: theme.palette.common.white,
      padding: theme.spacing(1.5, 3),
      display: 'inline-block',
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'capitalize',
      textDecoration: 'none',
      lineHeight: 1.36,
      '&.active': {
        backgroundColor: fade(theme.palette.common.black, 0.1)
      },
      '&:hover, &:focus': {
        color: theme.palette.common.white,
        backgroundColor: fade(theme.palette.common.black, 0.1)
      }
    }
  }
}))
