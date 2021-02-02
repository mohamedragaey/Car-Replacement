import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.colors.footer,
    padding: theme.spacing(4, 0)
  },
  footerGridItemNavigation: {},
  footerNavigation: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      margin: 'auto',
      marginBottom: theme.spacing(4)
    },
    '& ul': {
      listStyle: 'none',
      margin: theme.spacing(0),
      padding: theme.spacing(0)
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.5),
      display: 'inline-block',
      '&:hover,&:focus': {
        opacity: 0.75,
        color: theme.palette.common.white
      }
    }
  },
  footerGridItemInfo: {}
}))
