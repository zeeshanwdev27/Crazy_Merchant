import React from 'react'
import PwcmHeroSection from './PwcmHeroSection.jsx'
import WhyPartnerWithUs from './WhyPartnerWithUs.jsx'
import CMReferral from './CMReferral.jsx'
import MaxYourEarnings from './MaxYourEarnings.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function PartnerwithCrazyMerchant() {
  return (
    <>
     <Helmet>
        <title>Partner With Crazy Merchants</title>
        <meta 
          name="description" 
          content="Join forces with Crazy Merchants and unlock seamless payment solutions for your business. Discover partnership opportunities, tools, and support to help your business thrive." 
          />
      </Helmet>


    <PwcmHeroSection title1={<>PARTNER WITH CRAZY MERCHANTS GROW TOGETHER</>} description={'Join our network of payment processing partners and earn residual income.'}/>
    <WhyPartnerWithUs 
      title={<>Why Partner <span className='text-[#F29200]'>with Crazy Merchants </span>? </>}
      description={"Partner with us to access expert support, advanced technology, and reliable payment solutions that help you grow faster."}
    />
    <CMReferral/>
    <MaxYourEarnings/>
    <CallCenterReadyToStart/>
      
    </>
  )
}

export default PartnerwithCrazyMerchant
