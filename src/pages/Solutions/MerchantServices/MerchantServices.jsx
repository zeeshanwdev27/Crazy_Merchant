import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import MerchantFeatures from './MerchantFeatures.jsx'
import OurServices from './OurServices.jsx'
import MerchantAbout from './MerchantAbout.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'




function MerchantServices() {
  return (
    <>
    <CallCenterHeroSection 
     title={'Complete Merchant Services Solutions'} 
     description={'Our merchant services provide everything you need to process payments and grow your business. Here’s what you get:'}
     opt1={'Dedicated Account Managers'}
     opt2={'Next-day merchant funding'}
     opt3={'Complete merchant toolkit'}
     opt4={'24/7 merchant support'}
     opt5={'Comprehensive transaction management'}
     opt6={'Recurring Billing Options'}
     />
      <GetStartedSteps 
    title={<>Get Started with  <span className='text-[#F29200]'>Merchant</span> <br className='hidden lg:block' />Services</>}
    description={'Simple process to set up your merchant account'}
    card1={['Merchant Consultation', 'Connect with our merchant services experts to find the right solution for your business.']}
    card2={['Account Setup', 'Quick merchant account application with dedicated support throughout.']}
    card3={['Service Integration', 'Complete setup of your merchant services and payment processing.']}
    card4={['Ongoing Support', '24/7 access to our merchant support team whenever you need assistance.']}
    />
    <MerchantFeatures/>
    <MerchantAbout/>
    <OurServices/>
    <CallCenterReadyToStart/>

    
    </>
  )
}

export default MerchantServices
