import React from 'react'
import {FormattedMessage} from 'react-intl'

const SecondLaw = () => {

  return (
    <>
      <p><FormattedMessage id='SecondLaw.firstParagraph'/></p>
      <h2><FormattedMessage id='SecondLaw.firstTitle'/></h2>
      <ol>
        <li><FormattedMessage id='SecondLaw.list.firstItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.secondItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.thirdItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.fourthItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.fifthItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.sixItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.seventhItem'/></li>
      </ol>
      <h3><FormattedMessage id='SecondLaw.secondTitle'/></h3>
      <ol>
        <li><FormattedMessage id='SecondLaw.list.second.firstItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.second.secondItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.second.thirdItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.second.fourthItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.second.fifthItem'/></li>
        <li><FormattedMessage id='SecondLaw.list.second.sixItem'/></li>
      </ol>
    </>
  )
}

export default SecondLaw
