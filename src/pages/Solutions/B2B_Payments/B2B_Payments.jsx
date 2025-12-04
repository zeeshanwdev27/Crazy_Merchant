import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import B2BFeatures from './B2BFeatures.jsx'
import B2BServices from './B2BServices.jsx'
import B2BAbout from './B2BAbout.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'


function B2B_Payments() {
  return (
    <>
    <CallCenterHeroSection 
     title={'B2B Merchant Accounts & Payment Solutions'} 
     description={'A robust payment processing system is crucial in the world of B2B credit card transactions. Crazy Merchant offers tailored merchant account solutions that address the unique challenges of B2B payments, including high-volume transactions, recurring billing, and complex payment terms. Choose a partner who offers multiple banks and secure payments for B2B business models.'}
     opt1 = {'Streamline high-volume B2B transactions for faster processing'}
     opt2 = {'Support multiple payment methods including ACH, wire, and corporate cards'}
     opt3 = {'Automate invoicing and recurring payment schedules'}
     opt4 = {'Enable detailed reporting for better financial visibility'}
     opt5 = {'Ensure compliance with industry-specific B2B regulations'}
     opt6 = {'Reduce operational errors with advanced data validation tools'}

     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>B2B Payment</span> <br className='hidden lg:block' />Processing</>}
    description={'Follow these steps to set up your B2B merchant account'}
    card1={['Complete our Online Application', 'Begin with our straightforward online application process designed for B2B businesses.']}
    card2={['Provide necessary documentation', 'Submit the required documents to support your B2B merchant account application.']}
    card3={["Leverage our underwriting expertise", 'Our experienced team will guide you through the underwriting process for B2B businesses.']}
    card4={['Start processing B2B payments', 'Begin accepting payments for your B2B services and watch your business grow.']}
    />
    <B2BFeatures/>
    <B2BServices/>
    <B2BAbout/>
    <CallCenterReadyToStart/>







    
    </>
  )
}

export default B2B_Payments
