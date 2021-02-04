import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {implementationPartners} from '../../utils/pages-meta'
import ImplementationPartnersPageContent from '../../components/ImplementationPartnersPageContent'

const ImplementationPartners = () => {
  return (
    <>
      <SEO title={implementationPartners.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={implementationPartners.image}
           description={implementationPartners.description}
      />
      <ImplementationPartnersPageContent/>
    </>
  )
}

export default ImplementationPartners
