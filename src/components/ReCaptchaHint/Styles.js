import {fade, makeStyles} from '@material-ui/core/styles'
import {textColor} from '../../utils/colors'

export const useStyles = makeStyles((theme) => ({
  ReCaptchaHint: {
    fontSize: theme.typography.pxToRem(12),
    color: fade(textColor, 0.5),
    padding: theme.spacing(1, 0),
    textAlign: 'center',
    '& a': {
      display: 'inline-block',
      color: textColor,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0, 0.5)
    }
  }
}))
