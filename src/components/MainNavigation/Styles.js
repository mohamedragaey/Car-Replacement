import {fade, makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  mainNavigation: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      paddingLeft: theme.spacing(2)
    },
    '& a': {
      color: theme.palette.common.white,
      padding: theme.spacing(0.875, 3, 1.125),
      margin: theme.spacing(0, 2),
      display: 'inline-block',
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      textDecoration: 'none',
      lineHeight: 1.36,
      borderRadius: theme.spacing(1),
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
