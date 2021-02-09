import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {news} from '../../utils/pages-meta'
import NewsPageContent from '../../components/NewsPageContent'

const News = () => {
  return (
    <>
      <SEO title={news.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={news.image}
           description={news.description}
      />
      <NewsPageContent/>
    </>
  )
}

export default News
