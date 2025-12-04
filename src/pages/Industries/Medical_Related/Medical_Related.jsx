import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import MedicalHighRisk from './MedicalHighRisk.jsx'
import MedicalPaymentGateways from './MedicalPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Restaurants() {
  return (
    <>
    <Helmet>
        <title>Medical and Healthcare Payment Processing - Crazy Merchants</title>
        <meta 
           name="description" 
           content="Streamline medical and healthcare payment processing with Crazy Merchants. Enjoy secure, compliant transactions, seamless integrations, and tools to manage patient payments efficiently." 
        />
    </Helmet>


    <CallCenterHeroSection 
       title={'Simplify Medical and Healthcare Businesses Payment Processing'} 
       description={"Medical and healthcare businesses operate in a fast-paced environment where managing payments can be challenging. Due to higher chargeback risks, insurance complexities, and regulatory requirements, many traditional processors hesitate to support healthcare merchants. At Crazy Merchants, we provide specialized merchant accounts for medical and healthcare businesses, designed to handle high-risk operations while ensuring smooth, secure, and reliable payment processing."}
       opt1={'Fast Underwriting & Quick Approvals'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Medical and Healthcare Businesses </span>Payment Processing</>}
       description={'Follow these simple steps to set up your Medical and Healthcare Businesses merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your medical & healthcare business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your medical & healthcare business merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for medical & healthcare business.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your medical & healthcare business services and watch your business thrive.']}
    />
    <MedicalHighRisk/>
    <MedicalPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>

      
    </>
  )
}

export default Restaurants
