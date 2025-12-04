import React from 'react'
import CallCenterHeroSection from '../../Industries/CallCenters/CallCenterHeroSection.jsx'
import GetStartedSteps from '../../Industries/CallCenters/GetStartedSteps.jsx'
import RecurringFeatures from './RecurringFeatures.jsx'
import RecurringServices from './RecurringServices.jsx'
import RecurreingPaymentNeeds from './RecurreingPaymentNeeds.jsx'
import CallCenterReadyToStart from '../../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'


function Recurring_Payment() {
  return (
    <>
      <Helmet>
          <title>Recurring Billing Solutions - Crazy Merchants</title>
            <meta 
                name="description" 
                content="Simplify recurring billing with Crazy Merchants. Enjoy automated, secure payment processing, easy subscription management, and tools to streamline your business revenue." 
            />
      </Helmet>



    <CallCenterHeroSection 
     title={'Recurring Billing Solutions'} 
     description={'Our recurring payment processing solutions are designed to meet the complex needs of subscription-based businesses. Here’s what we offer:'}
     opt1={'Flexible billing cycles and payment options to suit various businesses'}
     opt2={'Automated billing processes to save time and reduce errors'}
     opt3={'Advanced subscription management tools for full lifecycle'}
     opt4={'Robust analytics and reporting for data-driven decision-making'}
     opt5={'Seamless integration with popular accounting and CRM systems'}
     opt6={'Customizable notifications and reminders to improve customer retention'}
     />
      <GetStartedSteps 
    title={<>Get Started with <span className='text-[#F29200]'>Automated Recurring</span> <br className='hidden lg:block' />Billing</>}
    description={'Set Up Your Merchant Account and recurring payment processing in Four Easy Steps'}
    card1={['Complete an Online Application', 'Begin with our straightforward online application so you can accept recurring payments.']}
    card2={['Submit Necessary Documentation', 'Provide essential documents to support your merchant account application.']}
    card3={["Work with Our Underwriting Team", 'Our experts guide you through the underwriting process.']}
    card4={['Start Processing Payments', 'Begin accepting subscription payments seamlessly and focus on growing your revenue.']}
    />
    <RecurringFeatures/>
    <RecurringServices/>
    <RecurreingPaymentNeeds/>
    <CallCenterReadyToStart/>







    
    </>
  )
}

export default Recurring_Payment
