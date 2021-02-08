import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import LazyImage from '../LazyImage'
import {useStyles} from './Styles'

import car from './../../images/about/about-car.jpg'

const AboutPageContent = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.fullHeight}>
      <Grid container justify='space-between' alignItems='flex-start' spacing={0} className={classes.fullHeight}>
        <Grid item xs={12} className={`${classes.aboutWrapperGrid} ${classes.fullHeight}`}>
          <SectionTitle
            variant="h1"
            component="h1"
            title={<FormattedMessage id='AboutPageContent.Title'/>}
          />
          <div className={classes.aboutWrapper}>
            <Grid container justify='center' alignItems='flex-start' spacing={4}>
              <Grid item xs={12} md={4} lg={3} className={classes.aboutImage}>
                <LazyImage src={car} alt='About page asset'/>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <p><FormattedMessage id='AboutPageContent.content'/></p>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutPageContent
