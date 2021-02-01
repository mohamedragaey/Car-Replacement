import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {posts} from '../../utils/pages-meta'

const Posts = () => {
  return (
    <>
      <SEO title={posts.title}
           pathname={window.location.origin}
           titleTemplate='United OFOQ'
           image={posts.image}
           description={posts.description}
      />
      <h1 style={{textAlign: 'center'}}>Work in Progress..........</h1>
    </>
  )
}

export default Posts
