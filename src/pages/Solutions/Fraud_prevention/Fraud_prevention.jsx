import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import FPFeatures from './FPFeatures.jsx'
import FPServices from './FPServices.jsx'
import FPTransactions from './FPTransactions.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Fraud_prevention() {
  return (
    <>
    <Helmet>
        <title>Fraud Prevention - Crazy Merchants</title>
          <meta 
              name="description" 
              content="Protect your business with Crazy Merchants' fraud prevention solutions. Ensure secure transactions, detect suspicious activity, and minimize risks for your payments."   
          />
    </Helmet>


    <CallCenterHeroSection 
     title={'Safeguard Your Business with Intelligent Fraud Prevention'} 
     description={'In an era of increasingly sophisticated cyber threats, robust fraud prevention is essential for protecting your business and customers. Protect your business from fraudulent transactions with intelligent fraud detection and prevention from Crazy Merchants. Our comprehensive approach combines cutting-edge technology with industry expertise:'}
     opt1={'Real-time transaction monitoring and risk assessment'}
     opt2={'Machine learning algorithms for adaptive fraud detection'}
     opt3={'Multi-factor authentication and identity verification'}
     opt4={'Behavioral analytics to identify suspicious patterns'}
     opt5={'Customizable rule sets tailored to your business needs'}
     opt6={'Tokenization and end-to-end encryption for secure data protection'}
     />
      <GetStartedSteps 
    title={<>Get Started with  <span className='text-[#F29200]'>Intelligent Merchant</span> <br className='hidden lg:block' />Fraud Protection</>}
    description={'Get started with our merchant fraud protection by setting up a merchant account in Four Easy Steps'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application.']}
    card3={["Work with Our Underwriting Team", 'Our experts guide you through the underwriting process.']}
    card4={['Start Processing Payments', 'Begin accepting subscription payments seamlessly and focus on growing your revenue.']}
    />
    <FPFeatures/>
    <FPTransactions/>
    <FPServices/>
    <CallCenterReadyToStart/>




    
    </>
  )
}

export default Fraud_prevention
