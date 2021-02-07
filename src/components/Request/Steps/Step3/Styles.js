import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  RequestStep3Wrapper: {
    width: '100%',
    padding: theme.spacing(3, 3, 5),
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  newVehicleWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    position: 'relative'
  },
  newVehicleIdError: {
    width: '100%',
    textAlign: 'center'
  },
  VehicleSelectMessage: {
    fontSize: theme.typography.pxToRem(18)
  }
}))
