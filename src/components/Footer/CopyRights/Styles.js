import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  copyRights: {},
  copyRightsTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular
  },
  copyRightsSmall: {
    textAlign: 'center',
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(10),
  }
}))
