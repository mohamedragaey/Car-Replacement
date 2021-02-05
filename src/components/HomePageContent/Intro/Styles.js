import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  intro: {
    background: theme.palette.colors.offWhite,
    marginBottom: theme.spacing(2)
  },
  introBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  introBannerCaption: {
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      position: 'absolute',
      alignItems: 'center',
      display: 'flex'
    }
  },
  introBannerCaptionInner: {},
  introBannerCaptionTitle: {
    position: 'relative',
    fontSize: theme.typography.pxToRem(26),
    textAlign: 'center',
    maxWidth: 440,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: 24,
      width: 24,
      borderLeft: `3px solid ${theme.palette.tertiary.main}`,
      borderTop: `3px solid ${theme.palette.tertiary.main}`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: 24,
      width: 24,
      borderRight: `3px solid ${theme.palette.tertiary.main}`,
      borderBottom: `3px solid ${theme.palette.tertiary.main}`
    }
  },
  introBannerCaptionDescription: {
    fontSize: theme.typography.pxToRem(16),
    textAlign: 'center',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5)
  }
}))
