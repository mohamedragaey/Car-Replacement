import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Box, Button, Dialog, DialogContent, DialogActions, Slide, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { dialogStyles } from '../DialogStyles'
import { useStyles } from './Styles'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const VehicleSubmitDialog = ({ handleVehicleSubmit, handleVehicleSubmitDialog, openVehicleSubmitDialog }) => {
  const classes = useStyles()
  const dialogClasses = dialogStyles()
  return (
    <Dialog
      keepMounted
      fullWidth
      maxWidth={'xs'}
      open={openVehicleSubmitDialog}
      classes={{ paper: dialogClasses.DialogPaper }}
      TransitionComponent={Transition}
      onClose={handleVehicleSubmitDialog}
      aria-labelledby="BasicInfoDialog"
      aria-describedby="BasicInfoDialog"
    >

      <DialogContent className={dialogClasses.DialogContent}>
        <IconButton
          edge={false}
          className={dialogClasses.DialogClose}
          color="inherit"
          aria-label="close dialog"
          onClick={handleVehicleSubmitDialog}
        >
          <CloseIcon/>
        </IconButton>
        <Box p={5} pb={2}>
          <p align={'center'} className={classes.VehicleSelectMessage}><FormattedMessage
            id='VehicleSelect.Dialog.Message'/></p>
        </Box>
      </DialogContent>
      <DialogActions className={dialogClasses.DialogFooter}>
        <Button variant={'contained'} size={'large'} color={'primary'}
                onClick={handleVehicleSubmit}>
          <FormattedMessage id='VehicleSelect.DialogActions.Submit'/>
        </Button>
        <Button variant={'contained'} size={'large'} color={'secondary'}
                onClick={handleVehicleSubmitDialog}>
          <FormattedMessage id='VehicleSelect.DialogActions.Cancel'/>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default VehicleSubmitDialog
