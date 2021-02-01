import {makeStyles} from '@material-ui/core/styles'
import {ArabicFont} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  languageSwitcherWrapper: {
    position: 'relative'
  },
  languageSwitcherButton: {
    color: theme.palette.common.white,
    backgroundColor: 'transparent',
    padding: theme.spacing(1),
    display: 'inline-block',
    border: 0,
    transition: 'all 0.3s ease-in-out',
    '&:not(:last-of-type)': {
      borderRight: `1px solid rgba(15, 3, 44, 0.35)`
    },
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
      outline: 'none'
    }
  },
  languageSwitcherButtonAr: {
    fontFamily: ArabicFont
  },
  active: {
    fontWeight: theme.typography.fontWeightBold
  },
  inActive: {
    opacity: 0.3,
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: theme.palette.primary.light,
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      opacity: 1,
      color: theme.palette.secondary.main
    }
  }
}))
