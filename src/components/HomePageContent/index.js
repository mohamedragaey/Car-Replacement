import React from 'react'
import ConditionsForTheInitiative from './ConditionsForTheInitiative'
import FinancialAdvantages from './FinancialAdvantages'
import LatestNews from './LatestNews'
import Intro from './Intro'

const HomePageContent = () => {
  return (
    <>
      <Intro/>
      <FinancialAdvantages/>
      <ConditionsForTheInitiative/>
      <LatestNews/>
    </>
  )
}

export default HomePageContent
