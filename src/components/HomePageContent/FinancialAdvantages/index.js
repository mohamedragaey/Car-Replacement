import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import InitiativeScope from './InitiativeScope'
import SectionTitle from '../../SectionTitle'

import {useStyles} from './Styles'

const FinancialAdvantages = () => {
  const classes = useStyles()

  return (
    <section className={classes.financialAdvantages}>
      <Container maxWidth="lg">
        <Grid container justify='space-between' alignItems='flex-start' spacing={4}>
          <Grid item xs={12} lg={3}>
            <InitiativeScope/>
          </Grid>
          <Grid item xs={12} lg={9}>
            <SectionTitle
              variant="h1"
              component="h2"
              title={<FormattedMessage id='financialAdvantages.SectionTitle.title'/>}
            />
            <div className={classes.financialAdvantagesItemContent}>
              <ol>
                <li>
                  <FormattedMessage id='financialAdvantages.list.item1'/>
                  <ul>
                    <li><FormattedMessage id='financialAdvantages.subList.item1'/></li>
                    <li><FormattedMessage id='financialAdvantages.subList.item2'/></li>
                    <li><FormattedMessage id='financialAdvantages.subList.item3'/></li>
                  </ul>
                </li>
                <li><FormattedMessage id='financialAdvantages.list.item2'/></li>
                <li><FormattedMessage id='financialAdvantages.list.item3'/></li>
                <li><FormattedMessage id='financialAdvantages.list.item4'/></li>
              </ol>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FinancialAdvantages
