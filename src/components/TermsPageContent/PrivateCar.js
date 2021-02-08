import React from 'react'
import {FormattedMessage} from 'react-intl'

const PrivateCar = () => {

  return (
    <>
      <p><FormattedMessage id='PrivateCar.firstParagraph'/></p>
      <h2><FormattedMessage id='PrivateCar.firstTitle'/></h2>
      <ol>
        <li><FormattedMessage id='PrivateCar.list.firstItem'/></li>
        <li><FormattedMessage id='PrivateCar.list.secondItem'/></li>
        <li><FormattedMessage id='PrivateCar.list.thirdItem'/></li>
        <li><FormattedMessage id='PrivateCar.list.fourthItem'/></li>
      </ol>
      <h3><FormattedMessage id='PrivateCar.secondTitle'/></h3>
      <ol>
        <li><FormattedMessage id='PrivateCar.list.second.firstItem'/></li>
        <li><FormattedMessage id='PrivateCar.list.second.secondItem'/></li>
        <li><FormattedMessage id='PrivateCar.list.second.thirdItem'/></li>
      </ol>
    </>
  )
}

export default PrivateCar
