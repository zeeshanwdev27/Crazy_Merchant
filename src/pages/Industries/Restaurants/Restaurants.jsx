import React from 'react'
import CallCenterHeroSection from '../CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../CallCenters/GetStartedSteps.jsx'
import ResturantHighRisk from './ResturantHighRisk.jsx'
import RestaurantPaymentGateways from './RestaurantPaymentGateways.jsx'
import CallCenterServices from '../CallCenters/CallCenterServices.jsx'
import CallCenterReadyToStart from '../CallCenters/CallCenterReadyToStart.jsx'

function Restaurants() {
  return (
    <>
    <CallCenterHeroSection 
       title={'Merchant Account for Resturant Business'} 
       description={"Restaurant businesses operate in a dynamic and fast-paced environment where managing payments efficiently is essential. With high customer traffic, peak-hour rush, and diverse payment methods, many traditional processors struggle to meet the unique needs of restaurant merchants. At Crazy Merchants, we offer specialized merchant account solutions tailored specifically for restaurants, ensuring smooth, secure, and reliable payment processing. Our services are designed to handle high-volume transactions, quick payment turnarounds, and the operational demands of the food service industry — so you can focus on delivering exceptional dining experiences while we take care of your payment needs."}
       opt1={'High-Risk & High-Volume Processing Expertise'}
       opt2={'Recurring & Subscription Billing Support'}
       opt3={'High-Risk Approval Specialists'}
       opt4={'Multiple Domestic & International Banking Partners'}
       opt5={'Chargeback Mitigation Tools'}
       opt6={'High Volume Transaction Capabilities'}
     />
    <GetStartedSteps 
       title={<>Get Started with <span className='text-[#F29200]'>Resturant Business</span> <br className='hidden lg:block' /><span className='text-[#F29200]'>Payment Processing</span></>}
       description={'Follow these simple steps to set up your resturant business merchant account'}
       card1={['Complete an online application', 'Start your journey with a simple online application process for your resturant business.']}
       card2={['Submit necessary documentation', 'Provide the required documents to support your resturant business merchant account application.']}
       card3={['Benefit from Our Expert Team', 'Our expert team will guide you through the underwriting process for resturant business businesses.']}
       card4={['Start Processing & Growing Revenue', 'Begin accepting payments for your resturant business services and watch your business thrive.']}
    />
    <ResturantHighRisk/>
    <RestaurantPaymentGateways/>
    <CallCenterServices/>
    <CallCenterReadyToStart/>
      
    </>
  )
}

export default Restaurants
