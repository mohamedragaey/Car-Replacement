import React from 'react'
import {useParams} from 'react-router-dom'
import SingleNewsPageContent from '../../components/SingleNewsPageContent'
import {singleNews} from '../../utils/pages-meta'
import {NewsProvider} from '../../NewsContext'
import {SEO} from '../../components/Seo/seo'

const SingleNews = () => {
  const {id} = useParams()

  return (
    <>
      <SEO title={singleNews.title}
           pathname={window.location.origin}
           titleTemplate='Car Replacement'
           image={singleNews.image}
           description={singleNews.description}
      />
      <NewsProvider id={id}>
        <SingleNewsPageContent/>
      </NewsProvider>
    </>
  )
}

export default SingleNews
