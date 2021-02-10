import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  pdfWrapper: {
    overflow: 'hidden',
    '& .react-pdf__Page': {
      marginTop: 10
    },
    '& .react-pdf__Page__annotations.annotationLayer': {
      padding: 20
    },
    '& .react-pdf__Page__canvas': {
      margin: '0 auto',
      boxShadow: `0 0 5px 1px #ccc`,
      borderRadius: 5
    }
  },
  buttonActionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiButton-root': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      textTransform: 'capitalize'
    },
    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(1, 1.75)
    }
  },
  pageNumbersWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))
