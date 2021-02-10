import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import {NewsConsumer, NewsProvider} from '../../NewsContext'
import SectionTitle from '../SectionTitle'
import {useStyles} from './Styles'
import CardItem from './CardItem'

const NewsPageContent = () => {
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
            <Grid container justify='center' alignItems='flex-start' spacing={0} className={classes.fullHeight}>
              <NewsProvider>
                <NewsConsumer>{({newsList}) => (
                  <>
                    {newsList.map((item) => (
                      <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CardItem
                          id={item.id}
                          title={item.title}
                          date={item.date}
                          image={item.image}
                          short={item.short}
                        />
                      </Grid>
                    ))}
                  </>
                )}
                </NewsConsumer>
              </NewsProvider>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewsPageContent
