import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import {NewsConsumer} from '../../NewsContext'
import SectionTitle from '../SectionTitle'
import NewsDetails from './NewsDetails'
import {useStyles} from './Styles'

const SingleNewsPageContent = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.fullHeight}>
      <Grid container justify='space-between' alignItems='flex-start' spacing={0} className={classes.fullHeight}>
        <Grid item xs={12} className={`${classes.newsWrapperGrid} ${classes.fullHeight}`}>
          <SectionTitle
            variant="h1"
            component="h1"
            title={<FormattedMessage id='NewsPageContent.Title'/>}
          />
          <div className={classes.newsWrapper}>
            <NewsConsumer>{({newsDetails}) => (
              <NewsDetails
                key={newsDetails.id}
                title={newsDetails.title}
                image={newsDetails.image}
                date={newsDetails.date}
                full={newsDetails.full}
              />
            )}</NewsConsumer>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SingleNewsPageContent
