import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {home} from '../../utils/pages-meta'

const Home = () => {
  return (
    <>
      <SEO title={home.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={home.image}
           description={home.description}
      />
      <h1 style={{textAlign: 'center'}}>Welcome To Car Replacement</h1>
    </>
  )
}

export default Home
