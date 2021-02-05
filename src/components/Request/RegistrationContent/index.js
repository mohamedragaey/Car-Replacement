import React from 'react'
import { Container } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'
import SectionTitle from '../../SectionTitle'
import RequestSteps from '../Steps'
import { RequestProvider } from '../../../RequestContext'
import { useStyles } from './Styles'

const RequestRegistrationContent = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg" className={classes.RequestWrapper}>
        <SectionTitle variant="h1" component="h2"
                      title={<FormattedMessage id='CarReplacement.request.registration.title'/>}/>
        <RequestProvider>
          <RequestSteps/>
        </RequestProvider>
      </Container>
    </>
  )
}

export default RequestRegistrationContent
