import React from 'react'
import { SEO } from '../../../components/Seo/seo'
import { requestRegistration } from '../../../utils/pages-meta'
import { useIntl } from 'react-intl'
import RequestRegistrationContent from '../../../components/Request/RegistrationContent'

const RequestRegistration = () => {
  const intl = useIntl()
  return (
    <>
      <SEO title={intl.formatMessage({ id: 'CarReplacement.request.registration.title' })}
           pathname={window.location.origin}
           titleTemplate={intl.formatMessage({ id: 'CarReplacement' })}
           image={requestRegistration.image}
           description={intl.formatMessage({ id: 'CarReplacement.request.registration.title' })}
      />
      <RequestRegistrationContent/>
    </>
  )
}

export default RequestRegistration
