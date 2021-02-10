import React, {useState} from 'react'
import {Document, pdfjs, Page} from 'react-pdf'
import {Button, TextField} from '@material-ui/core'
import {useStyles} from './Styles'
import {FormattedMessage} from 'react-intl'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const SinglePagePDFViewer = (props) => {
  const classes = useStyles()
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  const handleCurrentPageChange = (event) => {
    let value = parseInt(event.target.value)
    setPageNumber(value)
  }

  const {pdf} = props

  return (
    <div className={classes.pdfWrapper}>
      <Document
        file={pdf}
        options={{workerSrc: '/pdf.worker.js'}}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}/>
      </Document>
      <div className={classes.pageNumbersWrapper}>
        <p> Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p>
      </div>
      <div className={classes.buttonActionWrapper}>
        <Button
          color='primary'
          variant='contained'
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <FormattedMessage id='SinglePagePDFViewer.Button.Next'/>
        </Button>
        <TextField
          type='number'
          variant='outlined'
          onChange={(event) => handleCurrentPageChange(event)}
          InputProps={{
            inputProps: {min: 1, max: numPages}
          }}
        />
        <Button type="button" disabled={pageNumber <= 1} onClick={previousPage} variant='contained' color='primary'>
          <FormattedMessage id='SinglePagePDFViewer.Button.Previous'/>
        </Button>
      </div>
    </div>
  )
}

export default SinglePagePDFViewer
