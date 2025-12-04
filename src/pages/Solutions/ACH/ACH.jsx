import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import ACHFeatures from './ACHFeatures.jsx'
import ACHServices from './ACHServices.jsx'
import ACHDifference from './ACHDifference.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function ACH() {
  return (
    <>
     <Helmet>
         <title>ACH Solutions Payment Processing - Crazy Merchants</title>
            <meta 
                name="description" 
                content="Simplify ACH payment processing with Crazy Merchants. Enjoy fast, secure transactions, seamless integrations, and tools to efficiently manage your business payments."  
            />
      </Helmet>

    <CallCenterHeroSection 
     title={'Optimize Your Payment Processing with ACH Solutions'} 
     description={'ACH payment processing offers a secure and cost-effective way to handle transactions. This electronic network facilitates fund transfers between banks without the need for paper checks, credit card networks, wire transfers, or cash. Here’s what you need to know about ACH transactions:'}
     opt1={'ACH payments enable fast, direct bank-to-bank transfers.'}
     opt2={'ACH transfers have lower fees than credit card payments.'}
     opt3={'ACH is ideal for recurring or high-volume transactions.'}
     opt4={'ACH debits provide strong security for sensitive financial data.'}
     opt5={'ACH processing settles payments faster than traditional checks.'}
     opt6={'ACH payments reduce manual processing and streamline cash flow management.'}
     />
      <GetStartedSteps 
    title={<>Get Started with  <span className='text-[#F29200]'>ACH Payment</span> <br className='hidden lg:block' />Processing</>}
    description={'Set Up Your Merchant Account and ACH payment processing in Four Easy Steps'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application so you can accept ACH payments.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application.    ']}
    card3={['Work with Our Underwriting Team', 'Our experts guide you through the underwriting process.']}
    card4={['Start Processing Payments', 'Begin accepting ACH transactions seamlessly between bank accounts and focus on growing your revenue.']}
    />
    <ACHFeatures/>
    <ACHServices/>
    <ACHDifference/>
    <CallCenterReadyToStart/>


    
    </>
  )
}

export default ACH
