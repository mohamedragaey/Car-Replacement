import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  RequestStep2Wrapper: {
    width: '100%',
    padding: theme.spacing(3, 3, 5),
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  RequestStep2TableWrapper: {
    border: `1px solid ${theme.palette.colors.border}`,
    '& h3': {
      backgroundColor: theme.palette.colors.table,
      margin: theme.spacing(0),
      padding: theme.spacing(1.5, 2),
      color: theme.palette.tertiary.main,
      borderBottom: `1px solid ${fade(theme.palette.colors.border, 0.5)}`
    }
  },
  licenceAttrWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      '&:nth-child(2n+2)': {
        backgroundColor: theme.palette.colors.table
      }
    },
    [theme.breakpoints.only('sm')]: {
      '&:nth-child(4n+3),&:nth-child(4n+4)': {
        backgroundColor: theme.palette.colors.table
      }
    },
    [theme.breakpoints.up('md')]: {
      '&:nth-child(6n+4),&:nth-child(6n+5),&:nth-child(6n+6)': {
        backgroundColor: theme.palette.colors.table
      }
    }
  },
  licenceAttrLabel: {
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: theme.spacing(2)
  }
}))
