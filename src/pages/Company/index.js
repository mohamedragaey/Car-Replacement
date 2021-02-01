import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {company} from '../../utils/pages-meta'

const Company = () => {
  return (
    <>
      <SEO title={company.title}
           pathname={window.location.origin}
           titleTemplate='United OFOQ'
           image={company.image}
           description={company.description}
      />
      <h1 style={{textAlign: 'center'}}>Work in Progress..........</h1>
    </>
  )
}

export default Company
