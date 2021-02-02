/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import {useStyles} from './Styles'

const SocialMedia = () => {
  const classes = useStyles()

  return (
    <div className={classes.socialMediaWrapper} role="group" aria-label="Social Media Wrapper">
      <a href="#" className={`${classes.socialMediaLink} linkedIn`} target='_blank' rel="noopener">
        <i className='icon-linkedin'/>
      </a>
      <a href="#" className={`${classes.socialMediaLink} twitter`} target='_blank' rel="noopener">
        <TwitterIcon/>
      </a>
      <a href="#" className={`${classes.socialMediaLink} youTube`} target='_blank' rel="noopener">
        <YouTubeIcon/>
      </a>
      <a href="#" className={`${classes.socialMediaLink} facebook`} target='_blank' rel="noopener">
        <i className='icon-facebook'/>
      </a>
    </div>
  )
}
export default SocialMedia
