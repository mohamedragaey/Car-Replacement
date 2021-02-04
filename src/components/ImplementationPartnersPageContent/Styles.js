import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  partnersTitle: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightRegular,
    borderBottom: `1px solid ${theme.palette.tertiary.main}`,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(0)
  },
  partnersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(4, 0)
  },
  partnersItem: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    width: 250,
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.grey[200]}`,
    margin: theme.spacing(2),
    '& img': {
      width: 150,
      height: 150,
      objectFit: 'contain'
    }
  }
}))
