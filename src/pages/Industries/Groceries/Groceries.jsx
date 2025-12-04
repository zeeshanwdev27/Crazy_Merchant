import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import GroceriesHighRisk from './GroceriesHighRisk.jsx'
import GroceriesPaymentGateways from './GroceriesPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Groceries() {
  return (
    <>
    <Helmet>
        <title>Grocery Stores Merchant Account - Crazy Merchants</title>
        <meta 
           name="description" 
           content="Get a merchant account for your grocery store with Crazy Merchants. Benefit from fast, secure payment processing, seamless integrations, and tools to grow your business efficiently." 
        />
    </Helmet>

    <CallCenterHeroSection 
       title={'Merchant Account for Grocery Stores'} 
       description={"Grocery store businesses operate in a fast-moving retail environment where managing payments can be challenging. Due to higher transaction volumes, seasonal fluctuations, and occasional chargeback risks, many traditional processors hesitate to support grocery merchants. At Crazy Merchants, we provide specialized merchant accounts for grocery stores, designed to handle high-volume operations while ensuring smooth, secure, and reliable payment processing."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Grocery Stores </span>Payment Processing</>}
       description={'Follow these simple steps to set up your Grocery Stores merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your Grocery Stores business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your Grocery Stores merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for Grocery Stores businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your Grocery Stores services and watch your business thrive']}
    />
    <GroceriesHighRisk/>
    <GroceriesPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>


    </>
  )
}

export default Groceries
