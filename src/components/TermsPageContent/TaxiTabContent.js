import React from 'react'
import {FormattedMessage} from 'react-intl'

const TaxiTabContent = () => {

  return (
    <>
      <p><FormattedMessage id='TaxiTabContent.firstParagraph'/></p>
      <h2><FormattedMessage id='TaxiTabContent.firstTitle'/></h2>
      <ol>
        <li><FormattedMessage id='TaxiTabContent.list.firstItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.secondItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.thirdItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.fourthItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.fifthItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.sixItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.seventhItem'/></li>
      </ol>
      <h3><FormattedMessage id='TaxiTabContent.secondTitle'/></h3>
      <ol>
        <li><FormattedMessage id='TaxiTabContent.list.second.firstItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.second.secondItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.second.thirdItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.second.fourthItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.second.fifthItem'/></li>
        <li><FormattedMessage id='TaxiTabContent.list.second.sixItem'/></li>
      </ol>
    </>
  )
}

export default TaxiTabContent
