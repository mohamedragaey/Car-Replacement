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
  partnersWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  partnersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(4, 0),
    background: theme.palette.common.white
  },
  partnersWrapperInner: {
    width: '100%',
    maxWidth: 819,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  partnersItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
    '& img': {
      width: 123,
      height: 123,
      objectFit: 'contain'
    }
  }
}))
