import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {positions} from '../../utils/pages-meta'

const Positions = () => {
  return (
    <>
      <SEO title={positions.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={positions.image}
           description={positions.description}
      />
      <h1 style={{textAlign: 'center'}}>Work in Progress..........</h1>
    </>
  )
}

export default Positions
