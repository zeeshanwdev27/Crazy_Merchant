import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import DigitalBookHighRisk from './DigitalBookHighRisk.jsx'
import DigitalBookPaymentGateways from './DigitalBookPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Digital_Books() {
  return (
    <>
    <Helmet>
        <title>Digital Books Merchant Account - Crazy Merchants</title>
        <meta 
          name="description" 
          content="Get a merchant account for selling digital books with Crazy Merchants. Enjoy fast, secure payment processing, easy integrations, and tools to grow your online book business." 
        />
    </Helmet>

    <CallCenterHeroSection 
       title={'Merchant Account for Digital Books'} 
       description={"Digital book businesses operate in a fast-growing, competitive market where managing payments can be complex. Due to higher chargeback risks and subscription variability, many traditional processors hesitate to support digital content merchants. At Crazy Merchants, we provide specialized merchant accounts for digital books, designed to handle high-risk operations while ensuring smooth, secure, and reliable payment processing."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Digital Books </span>Payment Processing</>}
       description={'Follow these simple steps to set up your Digital Books merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your Digital Booksbusiness.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your Digital Books merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for Digital Books businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your Digital Books services and watch your business thrive.']}
    />
    <DigitalBookHighRisk/>
    <DigitalBookPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>
      
    </>
  )
}

export default Digital_Books
