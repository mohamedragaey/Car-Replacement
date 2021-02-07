import React from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import {
  Button,
  Radio,
  Grid,
  FormControlLabel,
  Card, CardActions, CardContent, Typography
} from '@material-ui/core'
import { useStyles } from './Styles'
import { RequestConsumer } from '../../../../RequestContext'
import LazyImage from '../../../LazyImage'
import { parseLocaleNumber } from '../../../../utils/helpers'
import VehicleDetailsDialog from './VehicleDetailsDialog'

const RequestVehicleCard = ({ vehicle, asOption }) => {
  const classes = useStyles()

  const [viewVehicleDetailsDialog, setViewVehicleDetailsDialog] = React.useState(false)
  const [openVehicleDetailsDialog, setOpenVehicleDetailsDialog] = React.useState(false)
  const handleVehicleDetailsDialog = () => {
    if (!openVehicleDetailsDialog) {
      setViewVehicleDetailsDialog(true)
    } else {
      setTimeout(() => {
        setViewVehicleDetailsDialog(false)
      }, 500)
    }
    setOpenVehicleDetailsDialog(!openVehicleDetailsDialog)
  }
  return (
    <RequestConsumer>
      {({ getVehicleDetails }) => (
        <Grid item xs={12} sm={6} md={4} className={classes.VehicleCardGrid}>
          <div className={classes.VehicleCardWrapper}>
            <Card elevation={0} className={classes.root}>
              <div className={classes.VehicleCardImageWrapper}>
                <LazyImage src={vehicle.image} width={'100%'} className={classes.VehicleCardImage}
                           height={200} alt={vehicle.name}/>
              </div>
              <CardContent className={classes.VehicleCardContent}>
                <Typography gutterBottom variant="h6" component="h4">
                  {vehicle.name} <br/> {vehicle.title}
                </Typography>
                <div className={classes.VehicleCardDetailsWrapper}>
                  <div className={classes.VehicleCardDetailsPrice}>
                    <FormattedNumber value={parseLocaleNumber(vehicle.price)}/> <FormattedMessage
                    id='VehiclePrice.pound'/>
                  </div>
                  <Button size="medium" color="primary" variant={'contained'}
                          onClick={handleVehicleDetailsDialog}
                          className={classes.VehicleCardDetailsButton}>
                    <FormattedMessage id='VehicleCard.DetailsBtn'/>
                  </Button>
                  {!!viewVehicleDetailsDialog &&
                  <VehicleDetailsDialog
                    getVehicleDetails={() => getVehicleDetails(vehicle.id)}
                    handleVehicleDetailsDialog={handleVehicleDetailsDialog}
                    openVehicleDetailsDialog={openVehicleDetailsDialog}
                  />}
                </div>
              </CardContent>
              {!!asOption &&
              <CardActions className={classes.VehicleCardOption}>
                <Button fullWidth size={'medium'} color="secondary" variant={'contained'}
                        className={classes.VehicleCardSelectButton}>
                  <FormControlLabel value={vehicle.id.toString()}
                                    control={<Radio/>}
                                    label={<FormattedMessage id='VehicleCard.Select'/>}
                  />
                </Button>
              </CardActions>
              }
            </Card>
          </div>
        </Grid>
      )}
    </RequestConsumer>
  )
}

export default RequestVehicleCard
