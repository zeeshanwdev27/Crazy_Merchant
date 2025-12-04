import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import TSFeatures from './TSFeatures.jsx'
import TSServices from './TSServices.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function ThreedSecure() {
  return (
    <>
      <Helmet>
          <title>3D Secure Payment Gateway - Crazy Merchants</title>
            <meta 
                name="description" 
                content="Protect your online transactions with Crazy Merchants' 3D Secure payment gateway. Enjoy enhanced security, fast processing, and tools to manage payments confidently."  
            />
      </Helmet>


    <CallCenterHeroSection 
     title={'3D Secure Payment Gateway and Payment Processing'} 
     description={'If you process online payments, you’ve heard of 3D Secure. But what is it? In short, 3D Secure (sometimes called Visa Secure) is an additional authentication process created by Visa and MasterCard to add an additional layer of security for Card Not Present (CNP) merchants. Moreover, 3D Secure ties the financial authorization process with online authentication based on a three-domain model (3D). The three domains consist of:'}
     opt1={'Acquirer Domain (the bank and the merchant to which the money is being paid)'}
     opt2={'Issuer Domain (the bank which issued the card being used)'}
     opt3={'Interoperability Domain (Visa & MasterCard)'}
     opt4={'Payment Gateway Domain (handles secure transmission of payment data)'}
     opt5={'Processor Domain (routes transactions for authorization and settlement)'}
     opt6={'Fraud & Security Domain (3D Secure, tokenization, and fraud prevention systems)'}
     />
      <GetStartedSteps 
    title={<>Get Started with  <span className='text-[#F29200]'>3D Secure</span> <br className='hidden lg:block' />Payment Processing</>}
    description={'Set Up Your Merchant Account in Four Easy Steps'}
    card1={['Complete an Online Application', 'Submit your application to get started with 3D Secure payment processing.']}
    card2={['Submit Necessary Documentation', 'Submit the required documentation to complete the application process.']}
    card3={["Work with Our Underwriting Team", 'Our underwriting team will review your application and documentation.']}
    card4={['Get Approved and Activate Your Account', 'Once approved, you can activate your account and start accepting payments.']}
    />
    <TSFeatures/>
    <TSServices/>
    <CallCenterReadyToStart/>




    
    </>
  )
}

export default ThreedSecure
