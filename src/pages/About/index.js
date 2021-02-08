import React from 'react'
import AboutPageContent from '../../components/AboutPageContent'
import {SEO} from '../../components/Seo/seo'
import {about} from '../../utils/pages-meta'

const About = () => {
  return (
    <>
      <SEO title={about.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={about.image}
           description={about.description}
      />
      <AboutPageContent/>
    </>
  )
}

export default About
