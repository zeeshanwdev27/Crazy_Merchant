import React from 'react'

function PaymentSteps() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 md:px-20 lg:px-40 flex flex-col gap-20'>
            
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-5xl lg:text-6xl font-black'>Crazy <span className='text-[#F29200]'>Merchants</span> Integrations</h1>
            <p className='text-md text-gray-600 font-medium flex items-center w-full max-w-4xl lg:text-center '>Effortlessly integrate with a range of platforms to enhance your business operations. Connect with leading payment gateways, shopping carts, and essential tools to streamline your payment processing.</p>
        </div>

        <div className='w-full md:max-w-7xl mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-center gap-5 mx-auto w-full'>


        {/* Payment Gateways */}
        <div className='flex flex-col gap-4 border border-gray-200 rounded-2xl w-full md:max-w-xs justify-center items-center bg-[#FAFAFA] shadow py-8'>
            <img src="/Home/PaymentSteps/card.png" alt="card_icon" className='w-12 h-10' />
            <p className='p-1 px-5 rounded-full border-3 border-[#FE8833]/30 text-sm font-bold'>01</p>
            <h3 className='text-2xl font-bold'>Payment Gateways</h3>
            <div className='flex flex-col gap-2 text-center'>
                <p>Authorize.net</p>
               <p>NMI</p>
               <p>USAePay</p>
            </div>
        </div>

        {/* Shopping Carts*/}
        <div className='flex flex-col gap-4 border border-gray-200 rounded-2xl w-full md:max-w-xs justify-center items-center bg-[#FAFAFA] shadow py-8'>
            <img src="/Home/PaymentSteps/shop.png" alt="shop_icon" className='w-12 h-10' />
            <p className='p-1 px-5 rounded-full border-3 border-[#FE8833]/30 text-sm font-bold'>02</p>
            <h3 className='text-2xl font-bold'>Shopping Carts</h3>
            <div className='flex flex-col gap-2 text-center'>
                <p>WooCommerce</p>
               <p>Shopify</p>
               <p>Magneto</p>
            </div>
        </div>

        {/* API Integration */}
        <div className='flex flex-col gap-4 border border-gray-200 rounded-2xl w-full md:max-w-xs justify-center items-center bg-[#FAFAFA] shadow py-8'>
            <img src="/Home/PaymentSteps/setting.png" alt="api_icon" className='w-10 h-10' />
            <p className='p-1 px-5 rounded-full border-3 border-[#FE8833]/30 text-sm font-bold'>03</p>
            <h3 className='text-2xl font-bold'>API Integration</h3>
            <div className='flex flex-col gap-2 text-center'>
                <p>REST API</p>
               <p>SDK</p>
               <p>Custom</p>
            </div>
        </div>

        {/* CMS Platforms */}
        <div className='flex flex-col gap-4 border border-gray-200 rounded-2xl w-full md:max-w-xs justify-center items-center bg-[#FAFAFA] shadow py-8'>
            <img src="/Home/PaymentSteps/cms.png" alt="cms_icon" className='w-20 h-8' />
            <p className='p-1 px-5 rounded-full border-3 border-[#FE8833]/30 text-sm font-bold'>04</p>
            <h3 className='text-2xl font-bold'>CMS Platforms</h3>
            <div className='flex flex-col gap-2 text-center'>
                <p>Wordpress</p>
               <p>Drupal</p>
               <p>Joomla</p>
            </div>
        </div>




        </div>
        </div>

        </div>


       {/* Bottom Div */}
        <div className="bg-linear-to-b from-[#F29200]/5 to-[#F29200]/40 py-5 px-5 md:px-20  lg:px-40">
        <div className='flex flex-col gap-10 lg:gap-0 md:flex-row justify-between items-center'>

            <h1 className='text-3xl text-center md:text-start lg:text-4xl font-black!'>OUR <span className='text-[#F29200]'>CHARGEBACK</span> <br /> <span className='text-[#F29200]'>PROTECTION</span> PARTNERS</h1>
            
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 items-center'>
            <img src="/Home/PaymentSteps/chargeback.png" alt="chargebacklogo" className='w-50 h-10 lg:w-80 lg:h-10' />
            <img src="/Home/PaymentSteps/disputifier.png" alt="disputifierlogo" className='w-50 h-10 lg:w-70 lg:h-14' />
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default PaymentSteps
