import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import HighRiskFeatures from './HighRiskFeatures.jsx'
import HRMAbout from './HRMAbout.jsx'
import CallCenterServices from '../../Industries/CallCenters/CallCenterServices.jsx'
import HRMTraditionalMerchant from './HRMTraditionalMerchant.jsx'
import HRMFAQs from './HRMFAQs.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function HighRiskMerchant() {
  return (
    <>
    <Helmet>
        <title>High Risk Merchant Account Solutions - Crazy Merchants</title>
          <meta 
              name="description" 
              content="Get tailored high-risk merchant account solutions with Crazy Merchants. Enjoy secure, reliable payment processing and tools designed to manage high-risk business transactions efficiently."    
          />
    </Helmet>


    <CallCenterHeroSection 
     title={'High Risk Merchant Account Solutions'} 
     description={'Tired of being rejected by payment processors? You’ve found your solution. As the #1 rated high-risk merchant account provider, we’ve helped over 10,000 businesses process $2+ billion annually. Our 98% approval rate and deep industry expertise mean you can start processing payments within 24-48 hours, even if other providers have turned you down. Plus, our dedicated account managers ensure your business keeps processing without interruption.'}
     opt1={'Dedicated Account Managers'}
     opt2={'Fast and Easy Application Process'}
     opt3={'Years High-Risk Experience'}
     opt4={'20+ Financial Partners'}
     opt5={'Chargeback Mitigation'}
     opt6={'Recurring Billing Options'}
     />
      <GetStartedSteps 
    title={<>How to <span className='text-[#F29200]'>Get Your</span> <br className='hidden lg:block' />High Risk <span className='text-[#F29200]'>Merchant Account</span></>}
    description={'Simple, Transparent Process – No Hidden Requirements'}
    card1={['Fast-Track Application', 'Complete our streamlined application in just 10 minutes. We’ve eliminated unnecessary paperwork and complex forms. You’ll know exactly what’s needed upfront, and our team pre-reviews everything to ensure quick approval. Most merchants get approved within 24 hours of submitting their application.']}
    card2={['Expert Document Review', 'Our approval specialists handle the heavy lifting. We’ll help gather and review your documents before submission, ensuring nothing delays your approval. Our relationships with 15+ banks means we know exactly what they need to see. This insider knowledge leads to our 98% approval rate.']}
    card3={['Guaranteed Approval', 'Our 15+ banking partnerships mean we can approve businesses that others reject. We know how to present your application to highlight your strengths. Even if you have processing history issues or past challenges, we have solutions. You’ll get live updates as we secure your approval.']}
    card4={['Same-Day Processing', 'Start processing payments within 24 hours of approval. Our team handles all technical setup and testing to ensure smooth operations from day one. You get a dedicated account manager who knows your business and industry. Plus, 24/7 support ensures you never miss a transaction.']}
    />
    <HighRiskFeatures/>
    <HRMAbout/>
    <CallCenterServices/>
    <HRMTraditionalMerchant/>
    <HRMFAQs/>
    <CallCenterReadyToStart/>
    
    </>
  )
}

export default HighRiskMerchant
