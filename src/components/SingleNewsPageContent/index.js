import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import {useStyles} from './Styles'
import NewsDetails from './NewsDetails'
import newsDetailsImage from './../../images/news/newsItemTwo.jpg'

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
            <NewsDetails
              title={'وزيرة الصناعة عن إحلال السيارات القديمة: القسط من 1500 جنيه '}
              image={newsDetailsImage}
              date={'2020-12-29'}
              full={'كشفت الدكتورة نيفين جامع وزيرة الصناعة والتجارة تفاصيل مشروع تحويل السيارات للعمل بالغاز الطبيعي مؤكدة أنه مشروع قومي يحظى باهتمام الرئيس السيسي.\n\n وقالت الوزيرة خلال مداخلة مع الإعلامي أحمد موسى ببرنامج على مسئوليتي، إن المشروع يعتمد على إحلال السيارات بأخرى للعمل بالغاز الطبيعي وقبل العمل على المشروع تم التأكد من توفر البنية التحتية ووجود المحطات لتلبية طلبات البرنامج القومي \n\n وأضافت الوزيرة أن عملية الإحلال تستهدف 250 ألف سيارة والبداية بـ70 ألف منهم 55 الف أجرة وملاكي و15 ألف ميكروباص والسيارة يكون مر على صناعتها 20 عام مشيرة إلى أن الإحلال اقتصادي وموفر للمواطن.'}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SingleNewsPageContent
