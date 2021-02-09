import {makeStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  newsWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  newsWrapper: {
    height: 'calc(100% - 100px)',
    display: 'flex',
    padding: theme.spacing(5.5),
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  fullHeight: {
    height: '100%'
  },
  cardItem: {
    padding: theme.spacing(0, 2.5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
      padding: theme.spacing(0),
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardItemImage: {
    '& img': {
      width: 345,
      height: 200,
      objectFit: 'cover'
    }
  },
  cardItemTitle: {
    color: theme.palette.tertiary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14)
  },
  cardItemDate: {
    color: theme.palette.tertiary.main,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14)
  },
  cardItemShort: {},
  cardItemLinkWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardItemLink: {
    color: theme.palette.common.white,
    background: theme.palette.tertiary.main,
    padding: theme.spacing(0.5, 5),
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: theme.typography.pxToRem(12),
    '&:hover,&:focus': {
      color: theme.palette.common.white,
      background: fade(theme.palette.tertiary.main, 0.75)
    }
  }
}))
