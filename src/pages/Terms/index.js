import React from 'react'
import TermsPageContent from '../../components/TermsPageContent'
import {SEO} from '../../components/Seo/seo'
import {terms} from '../../utils/pages-meta'

const Terms = () => {
  return (
    <>
      <SEO title={terms.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={terms.image}
           description={terms.description}
      />
      <TermsPageContent/>
    </>
  )
}

export default Terms
