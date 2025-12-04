import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import WhyChooseCM from './WhyChooseCM.jsx'
import WhyTravelHighRisk from './WhyTravelHighRisk.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import HighRiskDesignation from './HighRiskDesignation.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'



function Travel() {
  return (
    <>
    <CallCenterHeroSection 
       title={'Set Up a High-Risk Travel Merchant Account'} 
       description={"Travel businesses face unique challenges in the payment processing world. As a high-risk industry, many traditional banks and payment processors are hesitant to work with travel merchants. At Crazy Merchants, we specialize in providing merchant accounts tailored to the specific needs of the travel industry, ensuring you can process payments securely and efficiently."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Travel Payment</span> Payment</>}
       description={'Follow these simple steps to set up your travel merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your travel business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your travel merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for travel businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your travel services and watch your business thrive.']}
    />
    <WhyChooseCM/>
    <WhyTravelHighRisk/>
    <CallCenterServices/>
    <HighRiskDesignation/>
    <CallCenterReadyToStart/>





    </>
  )
}

export default Travel
