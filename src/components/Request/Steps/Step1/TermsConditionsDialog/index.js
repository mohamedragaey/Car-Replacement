import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Slide,
  Typography, Checkbox, FormControlLabel
} from '@material-ui/core'
import { useStyles } from './Styles'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const TermsConditionsDialog = ({ handleAcceptTermsConditions, openTermsConditionsDialog }) => {
  const classes = useStyles()
  const [isAcceptTermsConditions, setIsAcceptTermsConditions] = React.useState(false)
  const handleAcceptTermsConditionsChange = (event) => {
    setIsAcceptTermsConditions(event.target.checked)
  }
  return (
    <Dialog
      keepMounted
      fullWidth
      maxWidth={'md'}
      disableEscapeKeyDown
      disableBackdropClick
      open={openTermsConditionsDialog}
      classes={{ paper: classes.TermsConditionsDialogPaper }}
      TransitionComponent={Transition}
      onClose={handleAcceptTermsConditions}
      aria-labelledby="BasicInfoDialog"
      aria-describedby="BasicInfoDialog"
    >
      <DialogTitle disableTypography className={classes.TermsConditionsDialogHeader}>
        <Typography variant="h5"><FormattedMessage id='TermsConditionsDialog.Title'/></Typography>
      </DialogTitle>
      <DialogContent className={classes.TermsConditionsDialogContent}>
        <Box py={1} px={4}>
          <div dangerouslySetInnerHTML={{
            __html: `
              <p>لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن
                بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا
                لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم
                ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
              <ul>
                <li>ها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لمن.</li>
                <li> نتيجة لظروف ما قد تكمن السعاده فيما نتحمله م</li>
                <li> الألم الذي ربما تنجم عنه بعض ا.</li>
              </ul>
              `
          }}></div>
        </Box>
      </DialogContent>
      <DialogActions className={classes.TermsConditionsDialogFooter}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAcceptTermsConditions}
              onChange={handleAcceptTermsConditionsChange}
              color="primary"
            />
          }
          label={<span className={classes.AcceptTermsConditionsTitle}><FormattedMessage
            id='TermsConditionsDialog.AcceptTitle'/></span>}
        />
        <Button variant={'contained'} size={'large'} color={'primary'}
                disabled={!isAcceptTermsConditions}
                onClick={handleAcceptTermsConditions}>
          <FormattedMessage id='ChangePhone.DialogActions.verify'/>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TermsConditionsDialog
