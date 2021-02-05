import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  financialAdvantages: {
    marginBottom: theme.spacing(6)
  },
  financialAdvantagesItemContent: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    '& ul': {
      marginTop: theme.spacing(1.5)
    },
    '& li': {
      marginBottom: theme.spacing(1)
    }
  }
}))
