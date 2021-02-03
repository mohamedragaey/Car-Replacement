import React from 'react'
import HomePageContent from '../../components/HomePageContent'
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
      <HomePageContent/>
    </>
  )
}

export default Home
