import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button, Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'

import carAd from './../../../images/carAd.png'

const LatestNews = () => {
  const classes = useStyles()

  return (
    <section className={classes.latestNews}>
      <Container maxWidth="lg">
        <Grid container justify='space-between' alignItems='flex-start' spacing={4}>
          <Grid item xs={12} lg={9}>
            <div className={classes.latestNewsTitle}>
              <FormattedMessage id='latestNews.Title'/>
            </div>
            <div className={classes.latestNewsItem}>
              <div className={classes.latestNewsItemMedia}>
                <div className={classes.latestNewsItemMediaImg}>
                  <img src="https://media.gemini.media/img/large/2019/12/6/2019_12_6_11_22_56_529.jpg" alt='a'/>
                </div>
                <div className={classes.latestNewsItemMediaContent}>
                  <div className={classes.latestNewsItemMediaTitle}>
                    <FormattedMessage id='latestNews.ItemMedia.Title'/>
                  </div>
                  <div className={classes.latestNewsItemMediaDate}>
                    <FormattedMessage id='latestNews.ItemMedia.date'/>
                  </div>
                  <Button type="button" className={classes.latestNewsItemMediaButton}>
                    <FormattedMessage id='latestNews.ItemMedia.more'/>
                  </Button>
                </div>
              </div>
              <div className={classes.latestNewsItemList}>
                <h6 className={classes.latestNewsItemListTitle}>
                  <FormattedMessage id='latestNews.Item.List.Title'/>
                </h6>
                <div className={classes.latestNewsItemListDate}>
                  <FormattedMessage id='latestNews.Item.List.date'/>
                </div>
                <div className={classes.latestNewsItemListDescription}>
                  <FormattedMessage id='latestNews.Item.List.Description'/>
                </div>
                <Button type="button" className={classes.latestNewsItemListButton}>
                  <FormattedMessage id='latestNews.Item.List.button'/>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img src={carAd} alt={'ss'}/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LatestNews
