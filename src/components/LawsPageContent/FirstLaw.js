import React from 'react'
import {FormattedMessage} from 'react-intl'

const FirstLaw = () => {

  return (
    <>
      <p><FormattedMessage id='FirstLaw.firstParagraph'/></p>
      <h2><FormattedMessage id='FirstLaw.firstTitle'/></h2>
      <ol>
        <li><FormattedMessage id='FirstLaw.list.firstItem'/></li>
        <li><FormattedMessage id='FirstLaw.list.secondItem'/></li>
        <li><FormattedMessage id='FirstLaw.list.thirdItem'/></li>
        <li><FormattedMessage id='FirstLaw.list.fourthItem'/></li>
      </ol>
      <h3><FormattedMessage id='FirstLaw.secondTitle'/></h3>
      <ol>
        <li><FormattedMessage id='FirstLaw.list.second.firstItem'/></li>
        <li><FormattedMessage id='FirstLaw.list.second.secondItem'/></li>
        <li><FormattedMessage id='FirstLaw.list.second.thirdItem'/></li>
      </ol>
    </>
  )
}

export default FirstLaw
