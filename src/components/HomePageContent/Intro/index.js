import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'
// import IntroForm from './Form'

import intro from './../../../images/intro.png'

const Intro = () => {
  const classes = useStyles()

  return (
    <section className={classes.intro}>
      <Container maxWidth="lg">
        <Grid container justify='space-between' alignItems='flex-start' spacing={0}>
          <Grid item xs={12}>
            <div className={classes.introBanner}>
              <img src={intro} alt={'ss'}/>
              <div className={classes.introBannerCaption}>
                <div className={classes.introBannerCaptionInner}>
                  <h1 className={classes.introBannerCaptionTitle}><FormattedMessage id='intro.Banner.Caption.Title'/>
                  </h1>
                  <p className={classes.introBannerCaptionDescription}>
                    <FormattedMessage id='intro.Banner.Caption.Description'/>
                  </p>
                </div>
                {/*<IntroForm/>*/}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Intro
