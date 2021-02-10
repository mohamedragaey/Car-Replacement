import React from 'react'
import {FormattedMessage} from 'react-intl'

const LawIntroText = () => {

  return (
    <>
      <h2><FormattedMessage id='LawIntroText.firstParagraph'/></h2>
      <ol>
        <li><FormattedMessage id='LawIntroText.list.firstItem'/></li>
        <li><FormattedMessage id='LawIntroText.list.secondItem'/></li>
        <li><FormattedMessage id='LawIntroText.list.thirdItem'/></li>
      </ol>
    </>
  )
}

export default LawIntroText
