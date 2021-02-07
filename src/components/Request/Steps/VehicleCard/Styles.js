import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  VehicleCardGrid: {
    padding: theme.spacing(2)
  },
  VehicleCardImageWrapper: {
    height: 200,
    '& .lazy-load-image-background': {
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    '& img': {
      // minHeight: '100%',
      // maxHeight: '100%'
      minWidth: '100%',
      width: 'auto'
    }
  },
  VehicleCardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.colors.body
  },
  VehicleCardDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(1.5),
    flex: '0 0 auto'
  },
  VehicleCardDetailsPrice: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(0.75, 1.5),
    marginBottom: theme.spacing(1)
  },
  VehicleCardDetailsButton: {
    borderRadius: 0
  },
  VehicleCardOption: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(0)
  },
  VehicleCardSelectButton: {
    padding: theme.spacing(0),
    '& label': {
      width: '100%',
      height: '100%',
      display: 'flex',
      textAlign: 'center',
      color: theme.palette.common.white,
      justifyContent: 'center',
      margin: theme.spacing(0),
      padding: theme.spacing(1.5),
      '& .MuiRadio-root': {
        display: 'none'
      }
    }
  },
  VehicleDetailsTableWrapper: {
    '& h4': {
      backgroundColor: theme.palette.colors.table,
      margin: theme.spacing(0),
      padding: theme.spacing(1, 2),
      color: theme.palette.tertiary.main,
      borderBottom: `1px solid ${fade(theme.palette.colors.border, 0.3)}`
    }
  },
  VehicleDetailsAttrWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    // fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(1, 2),
    '&:nth-child(2n+1)': {
      backgroundColor: theme.palette.colors.body
    }
  },
  VehicleDetailsAttrLabel: {
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: theme.spacing(2)
  }
}))
