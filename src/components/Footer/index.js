import React from 'react'
import {Container, Grid} from '@material-ui/core'
import FooterNavigation from './FooterNavigation'
import SocialMedia from './SocialMedia'
import CopyRights from './CopyRights'
import {useStyles} from './Styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={4} className={classes.footerGridItemNavigation}>
            <FooterNavigation/>
          </Grid>
          <Grid item xs={12} md={4} className={classes.footerGridItemInfo}>
            <CopyRights/>
            <SocialMedia/>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default Footer
