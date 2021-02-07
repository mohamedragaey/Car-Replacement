import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Slide, IconButton,
  Typography,Grid
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { dialogStyles } from '../DialogStyles'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import { SearchLoader } from '../../../Loader/SearchLoader'
import LazyImage from '../../../LazyImage'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const VehicleDetailsDialog = ({ handleVehicleDetailsDialog, openVehicleDetailsDialog, getVehicleDetails }) => {
  const classes = useStyles()
  const dialogClasses = dialogStyles()
  React.useEffect(() => {
    getVehicleDetails()
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
  return (
    <Dialog
      keepMounted
      fullWidth
      maxWidth={'md'}
      open={openVehicleDetailsDialog}
      classes={{ paper: dialogClasses.DialogPaper }}
      TransitionComponent={Transition}
      onClose={handleVehicleDetailsDialog}
      aria-labelledby="BasicInfoDialog"
      aria-describedby="BasicInfoDialog"
    >

      <DialogContent className={dialogClasses.DialogContent}>
        <IconButton
          edge={false}
          className={dialogClasses.DialogClose}
          color="inherit"
          aria-label="close dialog"
          onClick={handleVehicleDetailsDialog}
        >
          <CloseIcon/>
        </IconButton>
        <Box pt={6} pl={3} p={5}>
          <RequestConsumer>
            {({ requestVehicleDetails, requestVehicleDetailsLoading }) => (
              <>
                {!!requestVehicleDetailsLoading && <SearchLoader loading={true}/>}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5} md={4}>
                    <Typography gutterBottom variant="h6" component="h4">
                      {requestVehicleDetails.name} <br/> {requestVehicleDetails.title}
                    </Typography>
                    <div className={classes.VehicleCardImageWrapper}>
                      <LazyImage src={requestVehicleDetails.image} width={'100%'} className={classes.VehicleCardImage}
                                 height={200} alt={requestVehicleDetails.name}/>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={7} md={8}>
                    <div className={classes.VehicleDetailsTableWrapper}>
                      {!!requestVehicleDetails.power && !!Object.keys(requestVehicleDetails.power).length &&
                      <>
                        <h4><FormattedMessage id='VehicleDetails.power.title'/></h4>
                        {Object.keys(requestVehicleDetails.power).map((VehicleDetailsAttr, index) => (
                          <Grid item key={index} className={classes.VehicleDetailsAttrWrapper}>
                            <Grid item xs={12} sm={8} md={6} className={classes.VehicleDetailsAttrLabel}>
                              <FormattedMessage id={`Fields.label.view.power.${VehicleDetailsAttr}`}/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} className={classes.VehicleDetailsAttrValue}>
                              {requestVehicleDetails.power[VehicleDetailsAttr]}
                            </Grid>
                          </Grid>
                        ))}
                      </>
                      }
                      {!!requestVehicleDetails.specs && !!Object.keys(requestVehicleDetails.specs).length &&
                      <>
                        <h4><FormattedMessage id='VehicleDetails.specs.title'/></h4>
                        {Object.keys(requestVehicleDetails.specs).map((VehicleDetailsAttr, index) => (
                          <Grid item key={index} className={classes.VehicleDetailsAttrWrapper}>
                            <Grid item xs={12} sm={8} md={6} className={classes.VehicleDetailsAttrLabel}>
                              <FormattedMessage id={`Fields.label.view.specs.${VehicleDetailsAttr}`}/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} className={classes.VehicleDetailsAttrValue}>
                              {requestVehicleDetails.specs[VehicleDetailsAttr]}
                            </Grid>
                          </Grid>
                        ))}
                      </>
                      }
                    </div>
                  </Grid>
                </Grid>
              </>
            )}
          </RequestConsumer>
        </Box>
      </DialogContent>
      <DialogActions className={dialogClasses.DialogFooter}>
        <Button variant={'contained'} size={'large'} color={'primary'}
                onClick={handleVehicleDetailsDialog}>
          <FormattedMessage id='VehicleDetails.DialogActions.Close'/>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default VehicleDetailsDialog
