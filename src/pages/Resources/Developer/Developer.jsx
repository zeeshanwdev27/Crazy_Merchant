import React from 'react'
import PwcmHeroSection from '../PartnerwithCrazyMerchant/PwcmHeroSection.jsx'
import DeveloperPartherWithUs from './DeveloperPartherWithUs.jsx'
import DeveloperReferral from './DeveloperReferral.jsx'
import EarnWithDeveloper from './EarnWithDeveloper.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Developer() {
  return (
    <>
    <Helmet>
      <title>DEVELOPER RESOURCES - Crazy Merchants</title>
      <meta 
      name="description" 
      content="Explore developer resources at Crazy Merchants. Find guides, FAQs, and tools to integrate our services, manage high-risk merchant accounts, and grow your business efficiently." 
      />
    </Helmet>

    <PwcmHeroSection title1={<>DEVELOPER RESOURCES BUILD WITH CRAZY MERCHANT</>} description={'Access our comprehensive suite of tools and documentation to integrate Crazy Merchant payment solutions into your applications.'}/>
    <DeveloperPartherWithUs 
      title={<>Why Develop <span className='text-[#F29200]'>with Crazy Merchants </span>? </>}
      description={"Partner with us to access expert support, advanced technology, and reliable payment solutions that help you grow faster."}
    />
    <DeveloperReferral/>
    <EarnWithDeveloper/>
    <CallCenterReadyToStart/>

      
    </>
  )
}

export default Developer
