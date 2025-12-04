import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import VirtualFeatures from './VirtualFeatures.jsx'
import VirtualTerminalServices from './VirtualTerminalServices.jsx'
import WhatVirtualTerminal from './WhatVirtualTerminal.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'


function Virtual_Terminal() {
  return (
    <>
    <CallCenterHeroSection 
     title={'Empower Your Business with Advanced Virtual Terminal Capabilities'} 
     description={'Our virtual terminal solutions are designed to meet the diverse needs of modern businesses. Accept payments anywhere with our virtual credit card terminal. We’ll get you set up to accept credit card payments quickly. Here’s what we offer:'}
     opt1={'Process payments from anywhere with just an internet connection'}
     opt2={'Accept various payment types including credit cards, ACH, and eChecks'}
     opt3={'Set up recurring payments for subscription-based services'}
     opt4={'Set up recurring payments for subscription-based services'}
     opt5={'Access detailed reporting and analytics for better financial management'}
     opt6={'Integrate seamlessly with your existing accounting and CRM systems'}
     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>our Virtual Terminal</span> <br className='hidden lg:block' />Solutions</>}
    description={'Follow these steps to set up your virtual terminal for credit and debit card payments.'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application.']}
    card3={["Work with Our Underwriting Team", 'Our experts guide you through the underwriting process.']}
    card4={['Start Processing Payments', 'Begin accepting Level 2 and 3 transactions seamlessly between bank accounts and focus on growing your revenue.']}
    />
    <VirtualFeatures/>
    <VirtualTerminalServices/>
    <WhatVirtualTerminal/>
    <CallCenterReadyToStart/>








    
    </>
  )
}

export default Virtual_Terminal
