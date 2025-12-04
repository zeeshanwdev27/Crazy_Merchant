import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import OutBoundHighRisk from './OutBoundHighRisk.jsx'
import OutBoundPaymentGateways from './OutBoundPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function OutBound() {
  return (
    <>
    <Helmet>
        <title>Outbound Product Selling Merchant Account - Crazy Merchants</title>
        <meta 
           name="description" 
          content="Get a merchant account for outbound product selling with Crazy Merchants. Enjoy fast, secure payment processing, seamless integrations, and tools to expand your sales globally." 
        />
    </Helmet>


    <CallCenterHeroSection 
        title={'Merchant Account for Outbound Product Selling'} 
        description={"Outbound product selling businesses operate in a fast-paced environment where managing payments can be challenging. Due to higher chargeback risks and fluctuating sales campaigns, many traditional processors hesitate to support outbound sellers. At Crazy Merchants, we provide specialized merchant accounts for outbound product selling, designed to handle high-risk operations while ensuring smooth, secure, and reliable payment processing."}
        opt1={'High-Risk Approval Specialists'}
        opt2={'Recurring & Subscription Billing Support'}
        opt3={'Multiple Domestic & International Banking Partners'}
        opt4={'Chargeback Mitigation Tools'}
        opt5={'High Volume Transaction Capabilities'}
        opt6={'Dedicated Account Manager'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Outbound Product</span> <br className='hidden lg:block' />Selling <span className='text-[#F29200]'>Payment Processing</span></>}
       description={'Follow these simple steps to set up your Outbound Product Selling merchant account'}
       card1={['Complete an Online Application', 'Start your journey with a simple online application process for your Outbound Product Selling business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your Outbound Product Selling merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for Outbound Product Selling businesses.']}
       card4={['Start Processing & Growing Revenue', 'Start your journey with a simple online application process for your Outbound Product Selling business.']}
    />
    <OutBoundHighRisk/>
    <OutBoundPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>
    </>
  )
}

export default OutBound
