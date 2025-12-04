import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import CBFeatures from './CBFeatures.jsx'
import CBServices from './CBServices.jsx'
import CBWhyChargeBack from './CBWhyChargeBack.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'



function ChargerBack_Management() {
  return (
    <>
    <Helmet>
        <title>Chargeback Management Payment Gateway - Crazy Merchants</title>
          <meta 
              name="description" 
              content="Protect your business with Crazy Merchants' chargeback management payment gateway. Enjoy secure transactions, effective dispute handling, and tools to reduce payment risks."  
          />
    </Helmet>


    <CallCenterHeroSection 
     title={'Advanced Chargeback Management Payment Gateway'} 
     description={'Chargeback management is crucial for maintaining a healthy business in the world of e-commerce and card-not-present transactions. Our comprehensive approach helps you tackle chargebacks effectively:'}
     opt1={'Proactive fraud prevention to reduce chargeback incidents'}
     opt2={'Streamlined dispute resolution process to recover lost revenue'}
     opt3={'Real-time monitoring and alerts for suspicious activity'}
     opt4={'Detailed analytics to identify chargeback patterns and trends'}
     opt5={'Customized strategies to address your specific chargeback challenges'}
     opt6={'Automated chargeback management to minimize revenue loss and operational effort.'}
     />
      <GetStartedSteps 
    title={<>Get Started with  <span className='text-[#F29200]'>Chargeback Prevention</span> <br className='hidden lg:block' />Payment Processing</>}
    description={'Follow these simple steps to set up your online merchant account.Simple process to set up your merchant account'}
    card1={['Complete an Online Application', 'Start your journey with a simple online application process for your business']}
    card2={['Submit Necessary Documentation', 'Provide the required documents to support your high-risk payment processing application.']}
    card3={["Benefit from our underwriting team's assistance", 'Our expert team will guide you through the underwriting process.']}
    card4={['Start processing payments and growing your revenue', 'Begin accepting payments and watch your business thrive.']}
    />
    <CBFeatures/>
    <CBServices/>
    <CBWhyChargeBack/>
    <CallCenterReadyToStart/>



    
    </>
  )
}

export default ChargerBack_Management
