import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import PGFeatures from './PGFeatures.jsx'
import PGServices from './PGServices.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function Payment_Gateways() {
  return (
    <>
      <Helmet>
          <title>Payment Gateways Solutions in North America - Crazy Merchants</title>
            <meta 
                name="description" 
                content="Discover reliable payment gateway solutions in North America with Crazy Merchants. Enjoy secure, fast transactions, seamless integrations, and tools to grow your business." 
            />
      </Helmet>


    <CallCenterHeroSection 
     title={'High Risk Payment Gateway in North America'} 
     description={'High-risk industries in the US and Canada require specialized payment solutions to navigate unique challenges. Our high-risk payment gateway is designed to address these specific needs:'}
     opt1={'Advanced fraud prevention tailored to high-risk transactions in North America'}
     opt2={'Customizable risk management strategies for US and Canadian markets'}
     opt3={'Higher approval rates through optimized processing for North American transactions'}
     opt4={'Support for USD and CAD transactions'}
     opt5={'Compliance with US and Canadian industry-specific regulations'}
     opt6={'Seamless integration with major North American payment gateways and processors'}
     />
     <PGFeatures/>
     <PGServices/>
    <CallCenterReadyToStart/>






    
    </>
  )
}

export default Payment_Gateways
