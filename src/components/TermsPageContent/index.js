import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Box, Container, Grid, Tab, Tabs} from '@material-ui/core'
import TaxiTabContent from './TaxiTabContent'
import SectionTitle from '../SectionTitle'
import PrivateCar from './PrivateCar'
import {useStyles} from './Styles'

function TabPanel (props) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>{children}</Box>
      )}
    </div>
  )
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const TermsPageContent = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="lg" className={classes.fullHeight}>
      <Grid container justify='space-between' alignItems='flex-start' spacing={0} className={classes.fullHeight}>
        <Grid item xs={12} className={`${classes.aboutWrapperGrid} ${classes.fullHeight}`}>
          <SectionTitle
            variant="h1"
            component="h1"
            title={<FormattedMessage id='TermsPageContent.Title'/>}
          />
          <div className={classes.aboutWrapper}>
            <div className={classes.tabsWrapper}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                className={classes.tabs}
              >
                <Tab
                  label={<FormattedMessage id='TermsPageContent.itemOne'/>}
                  {...a11yProps(0)} />
                <Tab
                  label={<FormattedMessage id='TermsPageContent.itemTwo'/>}
                  {...a11yProps(1)} />
              </Tabs>
              <TabPanel value={value} index={0} className={classes.tabPanel}>
                <PrivateCar/>
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.tabPanel}>
                <TaxiTabContent/>
              </TabPanel>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TermsPageContent
