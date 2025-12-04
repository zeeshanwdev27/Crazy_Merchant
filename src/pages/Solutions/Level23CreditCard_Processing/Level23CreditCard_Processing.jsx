import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import LevelFeatures from './LevelFeatures.jsx'
import LevelServices from './LevelServices.jsx'
import LevelAbout from './LevelAbout.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Level23CreditCard_Processing() {
  return (
    <>
    <Helmet>
        <title>Maximize Savings & Level 2, 3 Data Processing - Crazy Merchants</title>
          <meta 
              name="description" 
              content="Maximize savings with Crazy Merchants' Level 2 and Level 3 data processing. Enjoy optimized payment processing, reduced transaction costs, and enhanced business efficiency."    
          />
    </Helmet>


    <CallCenterHeroSection 
     title={'Maximize Savings and Insights with Level 2 & 3 Data Processing'} 
     description={'Every credit card transaction is considered a level 1, level 2, or level 3 transaction. The level increases depending on how much card data is passed. The higher the level, the more data needed to complete the transactions. Level 2 & 3 data processing is essential for businesses engaged in B2B credit card transactions. Our advanced solutions offer numerous benefits:'}
     opt1={'Qualify for lower interchange rates and reduce processing fees'}
     opt2={'Automate the capture and submission of detailed transaction data'}
     opt3={'Enhance reconciliation and expense management processes'}
     opt4={'Gain deeper insights into business spending patterns'}
     opt5={'Improve compliance with tax and auditing requirements'}
     opt6={'Increase processing accuracy by minimizing manual data entry errors'}
     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>Level 2 & 3</span> <br className='hidden lg:block' />Payment Processing</>}
    description={'Set up your merchant account and payment processing in Four Easy Steps'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application.']}
    card3={["Work with Our Underwriting Team", 'Our experts guide you through the underwriting process.']}
    card4={['Start Processing Payments', 'Begin accepting Level 2 and 3 transactions seamlessly between bank accounts and focus on growing your revenue.']}
    />
    <LevelFeatures/>
    <LevelServices/>
    <LevelAbout/>
     <CallCenterReadyToStart/>






    
    </>
  )
}

export default Level23CreditCard_Processing
