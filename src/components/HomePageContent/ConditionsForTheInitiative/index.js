import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import InitiativeCars from './InitiativeCars'
import SectionTitle from '../../SectionTitle'

import {useStyles} from './Styles'
import ownCar from './../../../images/car.png'
import validId from './../../../images/car-id.png'
import years from './../../../images/years.png'

const ConditionsForTheInitiative = () => {
  const classes = useStyles()

  return (
    <section className={classes.conditionsForTheInitiative}>
      <Container maxWidth="lg">
        <Grid container justify='space-between' alignItems='flex-end' spacing={4}>
          <Grid item xs={12} lg={9}>
            <SectionTitle variant="h1" component="h2"
                          title={<FormattedMessage id='ConditionsForTheInitiative.SectionTitle.title'/>}/>
            <div className={classes.conditionsForTheInitiativeItemContent}>
              <div className={classes.conditionsForTheInitiativeItemCircle}>
                <img src={ownCar} alt='icon'/>
                <span className={classes.conditionsForTheInitiativeItemCircleTitle}>
                  <FormattedMessage id='ConditionsForTheInitiative.ItemCircle.title.ownCar'/>
                </span>
              </div>
              <div className={classes.conditionsForTheInitiativeItemCircle}>
                <img src={years} alt='icon'/>
                <span className={classes.conditionsForTheInitiativeItemCircleTitle}>
                  <FormattedMessage id='ConditionsForTheInitiative.ItemCircle.title.years'/>
                </span>
              </div>
              <div className={classes.conditionsForTheInitiativeItemCircle}>
                <img src={validId} alt='icon'/>
                <span className={classes.conditionsForTheInitiativeItemCircleTitle}>
                  <FormattedMessage id='ConditionsForTheInitiative.ItemCircle.title.validId'/>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <InitiativeCars/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ConditionsForTheInitiative
