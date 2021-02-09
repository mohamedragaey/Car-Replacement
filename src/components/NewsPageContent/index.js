import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import {useStyles} from './Styles'
import CardItem from './CardItem'

import newsItemOne from '../../images/news/newsItemOne.jpg'
import newsItemTwo from '../../images/news/newsItemTwo.jpg'
import newsItemThree from '../../images/news/newsItemThree.jpg'

const newsList = [
  {
    id: 0,
    title: 'وزيرة الصناعة عن إحلال السيارات القديمة:القسط من 1500 جنيه',
    date: '29-12-2020',
    image: newsItemOne,
    short: 'كشفت الدكتورة نيفين جامع وزيرة الصناعة والتجارةتفاصيل مشروع تحويل السيارات للعمل بالغاز الطبيعي مؤك... '
  },
  {
    id: 1,
    title: '12 نقطة.. تعرف علي تفاصيل مشروع إحلال السيارات(شروط جديدة)',
    date: '31-12-2020',
    image: newsItemTwo,
    short: 'كشفت الدكتورة نيفين جامع وزيرة الصناعة والتجارةتفاصيل مشروع تحويل السيارات للعمل بالغاز الطبيعي مؤك... '
  },
  {
    id: 2,
    title: '20 معلومة عن شروط إحلال السيارات للعمل بالغاز 15يناير',
    date: '02-01-2021',
    image: newsItemThree,
    short: ' انتشر مؤخرا لغط وتساؤلات كثيرة حول تحويل السيارات للعمل بالغاز الطبيعى وإحلال المركبات القديمة، وهو.'
  }
]
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
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewsPageContent
