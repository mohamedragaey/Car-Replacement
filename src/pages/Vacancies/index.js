import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {vacancies} from '../../utils/pages-meta'

const Vacancies = () => {
  return (
    <>
      <SEO title={vacancies.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={vacancies.image}
           description={vacancies.description}
      />
      <h1 style={{textAlign: 'center'}}>Work in Progress..........</h1>
    </>
  )
}

export default Vacancies
