import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { useStyles } from './Styles'

const SectionTitle = ({ variant, component, title }) => {
  const classes = useStyles()
  return (
    <div className={classes.sectionTitleWrapper}>
      <Typography className={classes.sectionTitle} variant={variant} component={component || variant}>
        {title}
        <span className={classes.sectionTitleBorder}></span>
      </Typography>
    </div>
  )
}

SectionTitle.propTypes = {
  variant: PropTypes.string.isRequired,
  component: PropTypes.string,
  title: PropTypes.any.isRequired
}

export default SectionTitle
