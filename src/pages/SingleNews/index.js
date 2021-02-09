import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {singleNews} from '../../utils/pages-meta'
import SingleNewsPageContent from '../../components/SingleNewsPageContent'

const SingleNews = () => {
  return (
    <>
      <SEO title={singleNews.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={singleNews.image}
           description={singleNews.description}
      />
      <SingleNewsPageContent/>
    </>
  )
}

export default SingleNews
