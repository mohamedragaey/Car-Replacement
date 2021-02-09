import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import {useStyles} from './Styles'

const ContactUsPageContent = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.fullHeight}>
      <Grid container justify='space-between' alignItems='flex-start' spacing={0} className={classes.fullHeight}>
        <Grid item xs={12} className={`${classes.newsWrapperGrid} ${classes.fullHeight}`}>
          <SectionTitle
            variant="h1"
            component="h1"
            title={<FormattedMessage id='ContactUsPageContent.Title'/>}
          />
          <div className={classes.newsWrapper}>
            Content
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactUsPageContent
