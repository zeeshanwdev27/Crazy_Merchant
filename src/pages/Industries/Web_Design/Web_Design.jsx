import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import WebDesignSolutions from './WebDesignSolutions.jsx'
import WDHighRiskDesgination from './WDHighRiskDesgination.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import BestWebDesign from './BestWebDesign.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'



function Web_Design() {
  return (
    <>
    <CallCenterHeroSection 
       title={'Merchant Account for SEO & Web Design'} 
       description={"A high-risk merchant account is essential for web design and SEO businesses. These specialized payment processing accounts are designed for merchants classified in high-risk categories, providing the necessary solutions for online credit card processing in the web design and SEO industry. At Crazy Merchant, we serve search engine optimization merchants, providing customized merchant account services and payment processing solutions. Choose a company with years of experience and over 20 financial partners."}
       opt1={'Dedicated Account Managers'}
       opt2={'Recurring Billing Options'}
       opt3={'Years High-Risk Experience'}
       opt4={'20+ Financial Partners'}
       opt5={'Fast and Easy Application Process'}
       opt6={'Chargeback Mitigation'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Web Design & SEO </span>Payment Processing</>}
       description={'Follow these simple steps to set up your web design and SEO merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your web design and SEO business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your web design and SEO merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for web design and SEO businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your web design and SEO services and watch your business thrive.']}
    />
    <WebDesignSolutions/>
    <WDHighRiskDesgination/>
    <CallCenterServices/>
    <BestWebDesign/>
    <CallCenterReadyToStart/>




    </>
  )
}

export default Web_Design
