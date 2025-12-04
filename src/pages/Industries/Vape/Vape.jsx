import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import VapeSolutions from './VapeSolutions.jsx'
import HighRiskDesignation from './HighRiskDesignation.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import VapeHighRisk from './VapeHighRisk.jsx'
import SecurePayment from './SecurePayment.jsx'
import VapePaymentProcessing from './VapePaymentProcessing.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'



function Vape() {
  return (
    <>
    <Helmet>
        <title>Vape Credit Card Processing Merchant Account - Crazy Merchants</title>
          <meta 
              name="description" 
              content="Get a merchant account for vape businesses with Crazy Merchants. Enjoy secure, fast credit card processing, seamless integrations, and tools to grow your vape business efficiently." 
          />
    </Helmet>


    <CallCenterHeroSection 
       title={'Vape Credit Card Processing and Merchant Account'} 
       description={"E-cigarette and vape merchants face unique challenges in the payment processing world. As a high-risk industry, many traditional banks and payment processors are hesitant to work with vape merchants. At Crazy Merchant, we specialize in providing merchant accounts and payment processing tailored to the specific needs of the vape industry, ensuring you can process payments securely and efficiently."}
       opt1={'Dedicated Account Managers'}
       opt2={'Recurring Billing Options'}
       opt3={'Years High-Risk Experience'}
       opt4={'20+ Financial Partners'}
       opt5={'Fast and Easy Application Process'}
       opt6={'Chargeback Mitigation'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Vape Payment </span> Processing</>}
       description={'Follow these simple steps to set up your vape or e-cigarette merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your pawn shop business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your vape merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for vape businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your vape products and watch your business thrive.']}
    />
    <VapeSolutions/>
    <HighRiskDesignation/>
    <CallCenterServices/>
    <VapeHighRisk/>
    <SecurePayment/>
    <VapePaymentProcessing/>
    <CallCenterReadyToStart/>



    </>
  )
}

export default Vape
