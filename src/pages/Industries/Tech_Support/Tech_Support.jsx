import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import TechSupportHighRisk from './TechSupportHighRisk.jsx'
import TechSupportPaymentGateways from './TechSupportPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Tech_Support() {
  return (
    <>
    <Helmet>
        <title>Tech Support Businesses Merchant Account - Crazy Merchants</title>
        <meta 
           name="description" 
           content="Get a merchant account for your tech support business with Crazy Merchants. Enjoy secure, fast payment processing, seamless integrations, and tools to grow your service efficiently."
        />
    </Helmet>

    <CallCenterHeroSection 
       title={'Merchant Account for Tech Support Business'} 
       description={"Tech support businesses operate in a highly dynamic environment where reliable payment processing is essential. With remote services, global customers, and diverse billing models, many traditional processors struggle to support the unique needs of tech support merchants. At Crazy Merchants, we provide specialized merchant account solutions tailored specifically for tech support companies, ensuring smooth, secure, and uninterrupted payment processing. Our services are designed to handle high-volume transactions, remote billing, subscription-based payments, and the operational demands of technical service providers — so you can focus on delivering fast, effective customer support while we take care of your payment needs."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Tech Support Business </span>Payment Processing</>}
       description={'Follow these simple steps to set up your tech support business merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your tech support business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your tech support business merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for tech support business businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your tech support business services and watch your business thrive.']}
    />
    <TechSupportHighRisk/>
    <TechSupportPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>

      
    </>
  )
}

export default Tech_Support
