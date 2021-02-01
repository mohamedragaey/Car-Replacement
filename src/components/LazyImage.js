import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const LazyImage = ({caption, alt, height, width, src, className}) => (
  <>
    <LazyLoadImage
      effect="blur"
      className={className}
      src={src} // use normal <img> attributes as props
      alt={alt}
      height={height}
      width={width}/>
    {!!caption &&
    <span>{caption}</span>
    }
  </>
)

export default LazyImage
