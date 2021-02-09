import React from 'react'
import {useStyles} from './Styles'
import LazyImage from '../LazyImage'

const NewsDetails = ({title, date, full, image}) => {
  const classes = useStyles()

  return (
    <section className={classes.newsDetails}>
      <div className={classes.newsDetailsImage}>
        <LazyImage src={image} alt={title}/>
      </div>
      <div className={classes.newsDetailsInner}>
        <h2 className={classes.newsDetailsTitle}>{title}</h2>
        <span className={classes.newsDetailsDate}>{date}</span>
        <p className={classes.newsDetailsShort}>{full}</p>
      </div>
    </section>
  )
}

export default NewsDetails
