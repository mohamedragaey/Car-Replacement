import React from 'react'
import { Container } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'
import SectionTitle from '../../SectionTitle'
import RequestSteps from '../Steps'

const RequestRegistrationContent = () => {
  return (
    <>
      <Container maxWidth="lg">
        <SectionTitle variant="h1" component="h2" title={<FormattedMessage id='CarReplacement.request.registration.title'/>}/>
        <RequestSteps/>
      </Container>
    </>
  )
}

export default RequestRegistrationContent
