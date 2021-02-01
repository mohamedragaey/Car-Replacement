/**
 * Not Found component
 */

import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { FormattedMessage } from 'react-intl'
import { useStyles } from './Styles'
import { Fade } from 'react-reveal'
import {Link} from 'react-router-dom'

const NotFound = () => {
  const classes = useStyles()
  return (
    <Fade>
      <section>
        <Container maxWidth="lg">
          <Grid container justify='center'>
            <Grid item xs={12}>
              <div className={classes.notFoundWrapper}>
                <span className={classes.notFoundNumber}>404</span>
                <h1><FormattedMessage id='not_found'/></h1>
                <div className='item-cta-wrapper'>
                  <Link to='/' className='item-cta item-cta-primary'>
                    <FormattedMessage id='notFound.link.ItemCta'/></Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fade>
  )
}

export default NotFound
