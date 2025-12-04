import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import MotoFeatures from './MotoFeatures.jsx'
import MotoServices from './MotoServices.jsx'
import MotoAbout from './MotoAbout.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'



function MOTO_Processing() {
  return (
    <>
    <CallCenterHeroSection 
     title={'Streamline Your MOTO Payment Processing'} 
     description={'A MOTO (Mail Order/Telephone Order) merchant account is essential for businesses that process card-not-present transactions through mail or phone orders. Our specialized solutions offer comprehensive benefits for MOTO businesses:'}
     opt1={'Secure virtual terminal for phone order processing'}
     opt2={'Advanced fraud prevention tools'}
     opt3={'Competitive processing rates'}
     opt4={'PCI compliant payment solutions'}
     opt5={'Dedicated customer support'}
     opt6={'Real-time transaction reporting and analytics for better business oversight'}
     />
      <GetStartedSteps 
    title={<>Get Your  <span className='text-[#F29200]'>MOTO Merchant</span> <br className='hidden lg:block' />Account</>}
    description={'Start processing mail and telephone orders in Four Simple Steps'}
    card1={['Submit Your Application', 'Complete our streamlined online application process.']}
    card2={['Provide Documentation', 'Submit required business documents for verification.']}
    card3={["Underwriting Review", 'Our expert team evaluates your application.']}
    card4={['Begin Processing', 'Start accepting mail and telephone orders with your new merchant account and focus on growing your business.']}
    />
    <MotoFeatures/>
    <MotoServices/>
    <MotoAbout/>
    <CallCenterReadyToStart/>





    
    </>
  )
}

export default MOTO_Processing
