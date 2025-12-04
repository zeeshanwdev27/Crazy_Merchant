import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import OnlineFeatures from './OnlineFeatures.jsx'
import OnlinePaymentServices from './OnlinePaymentServices.jsx'
import PaymentProcessing from './PaymentProcessing.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Online_Payment() {
  return (
    <>
      <Helmet>
            <title>E-commerce Credit Card Solutions - Crazy Merchants</title>
              <meta 
                   name="description" 
                    content="Get reliable e-commerce credit card solutions with Crazy Merchants. Enjoy fast, secure payment processing, seamless integrations, and tools to grow your online business." 
              />
      </Helmet>


    <CallCenterHeroSection 
     title={'E-commerce Credit Card Processing Solutions'} 
     description={'Our e-commerce payment solutions are tailored to meet the diverse needs of e-commerce businesses. Here’s what we offer:'}
     opt1={'Advanced fraud prevention tools to protect your business and customers'}
     opt2={'Comprehensive reporting and analytics for better business insights'}
     opt3={'Seamless integration with popular e-commerce platforms and carts'}
     opt4={'Fast and secure transaction processing with high uptime'}
     opt5={'Support for multiple payment types and currencies'}
     opt6={'Dedicated customer support to assist with any payment or technical issues'}
     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>E-Commerce Payment</span> <br className='hidden lg:block' />Processing</>}
    description={'Follow these simple steps to set up your online merchant account'}
    card1={['Complete an Online Application', 'Start your journey with a simple online application process for your e-commerce business']}
    card2={['Submit Necessary Documentation', 'Provide the required documents to support your e-commerce payment processing application.']}
    card3={["Benefit from our underwriting team's assistance", 'Our expert team will guide you through the underwriting process for e-commerce businesses.']}
    card4={['Start processing payments and growing your revenue', 'Begin accepting payments and watch your business thrive.']}
    />
    <OnlineFeatures/>
    <OnlinePaymentServices/>
    <PaymentProcessing/>
    <CallCenterReadyToStart/>









    
    </>
  )
}

export default Online_Payment
