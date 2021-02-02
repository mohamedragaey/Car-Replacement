/**
 * General Styles For The Layout
 * @type {function(*): {}}
 */
import {ArabicFont, EnglishFont} from '../../utils/Fonts'
import {fade} from '@material-ui/core'

export const useStyles = ((theme) => ({
  '@global': {
    html: {height: '100%'},
    body: {
      height: '100%',
      backgroundColor: theme.palette.common.white
    },
    '#root': {
      height: '100%',
      whiteSpace: 'pre-line'
    },
    'a': {
      transition: 'all 0.3s ease-in-out',
      '&:hover, &:focus': {
        color: theme.palette.secondary.main
      }
    },
    'button': {
      fontFamily: theme.direction === 'ltr' ? EnglishFont : ArabicFont,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      outline: 'none !important'
    },
    'img': {
      maxWidth: '100%',
      height: 'auto',
      display: 'inline-block'
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: theme.direction === 'ltr' ? EnglishFont : ArabicFont,
      fontWeight: 'bold'
    },
    '.grecaptcha-badge': {
      visibility: 'hidden'
    },
    '.MuiDrawer-paper': {
      backgroundColor: theme.palette.common.black
    },
    '.MuiBackdrop-root': {
      backgroundColor: fade(theme.palette.common.black, 0.75),
      backdropFilter: 'blur(2px)'
    }
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    flex: '1 1 auto',
    paddingTop: theme.spacing(15.625)
  }
}))
