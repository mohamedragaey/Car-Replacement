import {makeStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  latestNews: {
    marginBottom: theme.spacing(6)
  },
  latestNewsTitle: {
    padding: theme.spacing(1.25, 2.5),
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    background: theme.palette.tertiary.main
  },
  latestNewsItem: {
    display: 'flex',
    background: theme.palette.grey[200],
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  latestNewsItemMedia: {
    position: 'relative'
  },
  latestNewsItemMediaImg: {
    width: 250,
    height: 250,
    display: 'flex',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: fade(theme.palette.common.black, 0.3)
    },
    '& img': {
      objectFit: 'cover'
    }
  },
  latestNewsItemMediaContent: {
    position: 'absolute',
    bottom: 16,
    zIndex: 1,
    color: theme.palette.common.white,
    padding: theme.spacing(0, 2, 1),
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold
  },
  latestNewsItemMediaTitle: {},
  latestNewsItemMediaDate: {
    fontSize: theme.typography.pxToRem(12),
    marginTop: theme.spacing(1.25),
    float: 'left'
  },
  latestNewsItemMediaButton: {
    '&.MuiButton-root': {
      color: theme.palette.tertiary.main,
      background: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.5, 1),
      float: 'right'
    }
  },
  latestNewsItemList: {
    padding: theme.spacing(0, 2, 2)
  },
  latestNewsItemListTitle: {
    margin: theme.spacing(3, 'auto', 1),
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold
  },
  latestNewsItemListDate: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(11)
  },
  latestNewsItemListDescription: {
    fontSize: theme.typography.pxToRem(14)
  },
  latestNewsItemListButton: {
    '&.MuiButton-root': {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(0.25),
      marginTop: theme.spacing(2),
      float: 'right'
    }
  }
}))
