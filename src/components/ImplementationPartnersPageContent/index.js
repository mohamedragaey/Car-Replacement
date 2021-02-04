import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import LazyImage from '../LazyImage'
import {useStyles} from './Styles'

import central_bank from './../../images/partners/central_bank.webp'
import development from './../../images/partners/development.webp'
import Dmedia from './../../images/partners/Dmedia.webp'
import environment from './../../images/partners/environment.webp'
import finance from './../../images/partners/finance.webp'
import hEducation from './../../images/partners/h-education.webp'
import military_production from './../../images/partners/military_production.webp'
import misr from './../../images/partners/misr.webp'
import petrol from './../../images/partners/petrol.webp'
import police from './../../images/partners/police.webp'
import trade_and_industry from './../../images/partners/trade_and_industry.webp'
import transport from './../../images/partners/transport.webp'

const list = [
  {
    id: 0,
    src: central_bank,
    alt: 'central bank'
  },
  {
    id: 1,
    src: development,
    alt: 'development'
  },
  {
    id: 2,
    src: Dmedia,
    alt: 'D-media Advertising'
  },
  {
    id: 3,
    src: environment,
    alt: 'environment'
  },
  {
    id: 4,
    src: finance,
    alt: 'finance'
  },
  {
    id: 5,
    src: hEducation,
    alt: 'h-Education'
  },
  {
    id: 6,
    src: military_production,
    alt: 'military_production'
  },
  {
    id: 7,
    src: misr,
    alt: 'misr'
  },
  {
    id: 8,
    src: petrol,
    alt: 'petrol'
  },
  {
    id: 9,
    src: police,
    alt: 'police'
  },
  {
    id: 10,
    src: trade_and_industry,
    alt: 'trade_and_industry'
  },
  {
    id: 11,
    src: transport,
    alt: 'transport'
  }
]

const ImplementationPartnersPageContent = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container justify='space-between' alignItems='flex-start' spacing={0}>
        <Grid item xs={12}>
          <h1 className={classes.partnersTitle}><FormattedMessage id='ImplementationPartnersPageContent.Title'/></h1>
          <div className={classes.partnersWrapper}>
            {list.map((item) => (
              <div className={classes.partnersItem} key={item.id}>
                <LazyImage src={item.src} alt={item.alt}/>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ImplementationPartnersPageContent
