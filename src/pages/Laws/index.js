import React from 'react'
import LawsPageContent from '../../components/LawsPageContent'
import {SEO} from '../../components/Seo/seo'
import {laws} from '../../utils/pages-meta'

const Laws = () => {
  return (
    <>
      <SEO title={laws.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={laws.image}
           description={laws.description}
      />
      <LawsPageContent/>
    </>
  )
}

export default Laws
