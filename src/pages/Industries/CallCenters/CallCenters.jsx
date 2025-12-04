import React from 'react'
import CallCenterHeroSection from './CallCenterHeroSection.jsx'
import GetStartedSteps from './GetStartedSteps.jsx'
import CallCenterHighRisk from './CallCenterHighRisk.jsx'
import CallCenterPaymentGateways from './CallCenterPaymentGateways.jsx'
import CallCenterServices from './CallCenterServices.jsx'
import CallCenterReadyToStart from './CallCenterReadyToStart.jsx'


function CallCenters() {
  return (
    <>
    <CallCenterHeroSection 
    title={'Merchant Account For Call Centers'} 
    description={'Call centers handle large volumes of transactions and recurring billing, which often leads traditional processors to label them as high-risk. This creates hurdles like declined payments, chargebacks, and compliance issues. At Crazy Merchants, we offer specialized Call Center Merchant Accounts built to support your operational needs. Our tailored solutions ensure secure, reliable payment processing with enhanced fraud prevention, smoother customer transactions, and optimized approval rates—so your business runs without interruptions.'}
     opt1={'High-Risk & High-Volume Processing Expertise'}
     opt2={'Recurring & Subscription Billing Support'}
     opt3={'High-Risk Approval Specialists'}
     opt4={'Multiple Domestic & International Banking Partners'}
     opt5={'Chargeback Mitigation Tools'}
     opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>Call Center</span> <br className='hidden lg:block' />Payment Processing</>}
    description={'Follow these simple steps to set up your call centers merchant account'}
    card1={['Complete an Online Application', 'Start your journey with a simple online application process for your call centers business.']}
    card2={['Submit necessary documentation', 'Provide the required documents to support your call centers merchant account application.']}
    card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for call centers businesses.']}
    card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your call centers services and watch your business thrive.']}
    />
    <CallCenterHighRisk/>
    <CallCenterPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>
    </>
  )
}

export default CallCenters