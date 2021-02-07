import { makeStyles } from '@material-ui/core/styles'

export const dialogStyles = makeStyles((theme) => ({
  DialogPaper: {
    borderRadius: 0
  },
  DialogContent: {
    padding: '0 !important',
    position: 'relative'
  },
  DialogClose: {
    position: 'absolute',
    zIndex: 10,
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
    color: theme.palette.primary.dark
  },
  // DialogHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   background: FilterBackground,
  //   border: `1px solid ${FilterBorder}`,
  //   '& .MuiTypography-root': {
  //     color: theme.palette.primary.light,
  //     fontWeight: theme.typography.fontWeightBold
  //   }
  // },
  DialogFooter: {
    padding: theme.spacing(2)
  },
}))
