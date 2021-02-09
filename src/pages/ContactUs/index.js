import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {contactUs} from '../../utils/pages-meta'
import ContactUsPageContent from '../../components/ContactUsPageContent'

const ContactUs = () => {
  return (
    <>
      <SEO title={contactUs.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={contactUs.image}
           description={contactUs.description}
      />
      <ContactUsPageContent/>
    </>
  )
}

export default ContactUs
