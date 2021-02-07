import React from 'react'
import {Grid,Fade, Paper} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { useStyles } from './Styles'

const RequestStep6 = () => {
  const classes = useStyles()

  return (
    <Fade in={true}>
      <Paper elevation={4} className={classes.RequestStep6Wrapper}>
        <Grid item xs={12} lg={8}>
          <div className={classes.confirmationWrapper}>
            <Alert variant="filled" severity="success" className={classes.successAlert}>
              تم تقديم الطلب بنجاح
            </Alert>

            <div className={classes.requestNumber}>رقم الطلب 120186</div>
            <ul className={classes.nextStepsWrapper}>
              <li>
                برجاء الإحتفاظ برقم الطلب لاستخدامه في الإستعلام ومعرفه حالة الطلب الخاص بك
              </li>
              <li>
                سيتم ارسال طلبك الى شركة السيارات وبمجرد الموافقة عليه ، سيتم إرساله إلى البنك.
              </li>
              <li>
                بمجرد قبول طلبك مبدئيا من البنك ، سيتم إخطارك لإكمال الإجراءات مع البنك الذي اخترته
              </li>
              <li>
                بمجرد موافقة البنك على القرض الخاص بك وتحويل الأموال إلى شركة السيارات
                ستقوم شركة السيارات بتسليم سيارتك إليك في غضون 10 أيام
              </li>
            </ul>

          </div>
        </Grid>
      </Paper>
    </Fade>
  )
}

export default RequestStep6
