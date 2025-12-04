import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import EcommerceHighRisk from './EcommerceHighRisk.jsx'
import EcommercePaymentGateways from './EcommercePaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function Ecommerce_Websites() {
  return (
    <>
     <Helmet>
        <title>E-Commerce Websites Merchant Account - Crazy Merchants</title>
        <meta 
          name="description" 
           content="Secure a merchant account for your e-commerce website with Crazy Merchants. Enjoy fast, reliable payment processing, easy integrations, and tools to grow your online store." 
        />
    </Helmet>

    <CallCenterHeroSection 
       title={'Merchant Account for E-Commerce Websites'} 
       description={"E-commerce businesses operate in a highly competitive and fast-moving environment where managing online payments can be complex. With higher fraud risks, card-not-present transactions, and fluctuating order volumes, many traditional processors hesitate to support e-commerce merchants. At Crazy Merchants, we provide specialized e-commerce merchant accounts designed to handle high-risk online transactions while ensuring smooth, secure, and reliable payment processing for your digital store."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>E-Commerce</span> Payment</>}
       description={'Follow these simple steps to set up your E-Commerce merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your E-Commerce business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your E-Commerce merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for E-Commerce businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your E-Commerce services and watch your business thrive.']}
    />
    <EcommerceHighRisk/>
    <EcommercePaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>



    </>
  )
}

export default Ecommerce_Websites
