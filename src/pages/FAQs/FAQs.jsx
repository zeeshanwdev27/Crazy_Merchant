import React from 'react'
import FaqsHeroSection from './FaqsHeroSection.jsx'
import FaqsSection from './FaqsSection.jsx'
import CallCenterReadyToStart from '../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function FAQs() {
  return (
    <>
    <Helmet>
        <title>FAQS - Crazy Merchants</title>
        <meta
          name="FAQS - Crazy Merchants"
          content="Find answers to frequently asked questions about Crazy Merchants, our services, high-risk merchant accounts, and how we can help your business."
        />
    </Helmet>

    <FaqsHeroSection/>
    <FaqsSection/>
    <CallCenterReadyToStart/>
    </>
  )
}

export default FAQs
