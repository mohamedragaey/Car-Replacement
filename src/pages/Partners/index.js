import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {partners} from '../../utils/pages-meta'
import PartnersPageContent from '../../components/PartnersPageContent'

const Partners = () => {
  return (
    <>
      <SEO title={partners.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={partners.image}
           description={partners.description}
      />
      <PartnersPageContent/>
    </>
  )
}

export default Partners
