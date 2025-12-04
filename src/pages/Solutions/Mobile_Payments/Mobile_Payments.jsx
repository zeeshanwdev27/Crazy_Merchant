import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import MobileFeatures from './MobileFeatures.jsx'
import MobileServices from './MobileServices.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'



function Mobile_Payments() {
  return (
    <>
    <CallCenterHeroSection 
     title={'Mobile Merchant Payment Solutions'} 
     description={'Our mobile payment processing services are designed to meet the demands of today’s mobile-centric consumers while providing businesses with secure and efficient payment processing. Here’s what we offer:'}
     opt1={'Support for major mobile wallets and contactless payment methods'}
     opt2={'Secure in-app payment integration for seamless mobile experiences'}
     opt3={'Mobile point-of-sale (mPOS) systems for on-the-go transactions'}
     opt4={'Advanced security features including encryption and tokenization'}
     opt5={'Customizable solutions to fit your specific business needs'}
     opt6={'Real-time transaction tracking and reporting for mobile payments'}
     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>Mobile Payment</span> <br className='hidden lg:block' />Processing</>}
    description={'Set Up Your Merchant Account in Four Easy Steps'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application. Our user-friendly form typically takes less than 10 minutes to fill out, asking for essential information about your business to expedite the approval process.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application. Our team will guide you through the required documents, ensuring a smooth process. We’ll help you gather everything from business licenses to financial statements, making this step as effortless as possible.']}
    card3={["Work with Our Underwriting Team", 'Our experts guide you through the underwriting process. We’ll review your application and documentation to ensure a smooth and secure setup. This step is crucial for verifying your business and ensuring compliance with industry standards.']}
    card4={['Start Processing Payments', 'Begin accepting payments seamlessly and focus on growing your revenue. With your merchant account now active, you can start processing payments and focus on expanding your business, improving customer experience, and maximizing profitability.']}
    />
    <MobileFeatures/>
    <MobileServices/>
    <CallCenterReadyToStart/>







    
    </>
  )
}

export default Mobile_Payments
