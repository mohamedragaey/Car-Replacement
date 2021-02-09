import React from 'react'
import {FormattedMessage} from 'react-intl'
import {useStyles} from './Styles'
import LazyImage from '../LazyImage'
import {NavLink} from 'react-router-dom'
import {NamedRoutes} from '../../routes'
import {formatRoute} from 'react-router-named-routes'

const CardItem = ({id, title, date, short, image}) => {
  const classes = useStyles()

  return (
    <section className={classes.cardItem}>
      <div className={classes.cardItemImage}>
        <LazyImage src={image} alt={title}/>
      </div>
      <h2 className={classes.cardItemTitle}>{title}</h2>
      <span className={classes.cardItemDate}>{date}</span>
      <p className={classes.cardItemShort}>{short}</p>
      <div className={classes.cardItemLinkWrapper}>
        <NavLink to={formatRoute(NamedRoutes.singleNews, {id: id})} className={classes.cardItemLink}>
          <FormattedMessage id='CardItem.Link.more'/>
        </NavLink>
      </div>
    </section>
  )
}

export default CardItem
