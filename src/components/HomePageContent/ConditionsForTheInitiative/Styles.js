import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  conditionsForTheInitiative: {},
  conditionsForTheInitiativeItemContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
    backgroundColor: theme.palette.grey[200]
  },
  conditionsForTheInitiativeItemCircle: {
    width: 240,
    height: 240,
    margin: 'auto',
    borderRadius: '50%',
    background: '#F8F8F8',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& img': {
      minHeight: 100,
      objectFit: 'scale-down'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  },
  conditionsForTheInitiativeItemCircleTitle: {
    fontWeight: theme.typography.fontWeightBold
  }
}))
