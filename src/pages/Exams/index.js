import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {exams} from '../../utils/pages-meta'

const Exams = () => {
  return (
    <>
      <SEO title={exams.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={exams.image}
           description={exams.description}
      />
      <h1 style={{textAlign: 'center'}}>Work in Progress..........</h1>
    </>
  )
}

export default Exams
