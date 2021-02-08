import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  sectionTitleWrapper: {
    padding: theme.spacing(0.625)
  },
  sectionTitle: {
    display: 'inline-block',
    padding: theme.spacing(0.625, 5, 0.625, 1.25),
    color: theme.palette.common.white,
    position: 'relative',
    maxWidth: 250,
    width: '100%',
    fontSize: theme.typography.pxToRem(16),
    background: `linear-gradient(-45deg, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.main} calc(100% - 8px), ${fade(theme.palette.common.white, 0)} 0, ${fade(theme.palette.common.white, 0)})`,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% - 4px)',
      height: 8,
      borderTop: `1px solid ${theme.palette.colors.border}`,
      borderLeft: `1px solid ${theme.palette.colors.border}`,
      top: -5,
      left: -5
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: -8,
      right: 2,
      height: 20,
      width: 1,
      transform: 'rotate(-45deg)',
      backgroundColor: theme.palette.colors.border
    }
  },
  sectionTitleBorder: {
    position: 'absolute',
    width: 'calc(100% + 10px)',
    height: 8,
    borderTop: `1px solid ${theme.palette.colors.border}`,
    borderLeft: `1px solid ${theme.palette.colors.border}`,
    bottom: -12,
    left: -5,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: -2,
      right: -3,
      height: 8,
      transform: 'rotate(-45deg)',
      width: 1,
      backgroundColor: theme.palette.colors.border
    }
  }
}))
