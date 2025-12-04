import React, { useState } from 'react'
import { ArrowLeft, ArrowBigRightDash   } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Blog1() {

    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen flex flex-col gap-15 pt-25 lg:pt-30 xl:pt-30 pb-20 px-4 sm:px-6 md:px-8 xl:px-70 bg-[url('/Blogs/blogsbackground.png')] bg-cover bg-no-repeat overflow-hidden text-white">
    <div className='flex flex-col gap-8 sm:gap-12 lg:gap-10'>
                


        {/* Header Section */}
        <div className='flex flex-col gap-10'>
            
            <button onClick={()=> navigate('/blogs')}  className='flex gap-2 py-2 sm:py-3 px-4 items-center rounded-2xl text-sm sm:text-base font-medium cursor-pointer hover:border-amber-500 hover:bg-white hover:text-amber-500 bg-amber-500 text-white transition-colors duration-300 w-30 sm:w-40 justify-center mt-2'>
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Go Back</span>
            </button>
            
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full max-w-5xl">
                What Are High-Risk Merchant Accounts and Do You Need One?
            </h1>
        </div>


        
        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full">
            
            {/* Highlight Box */}
            <div className='p-4 border-l-4 border-[#F29200] bg-[#FFFFFF]/5 rounded-lg py-6 sm:py-8 lg:py-5 px-5 sm:px-6 lg:px-10 w-full max-w-4xl lg:max-w-5xl'>
                <p className='text-sm sm:text-md lg:text-lg leading-6 font-medium'>
                    If you run a business in industries like vape, travel, digital services, or credit repair, traditional payment processors may reject your account. That's where <span className='text-[#F29200]'>high-risk merchant</span> accounts come in.
                </p>
            </div>
            
            {/* Content 1 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    What is a High-Risk Merchant Account?
                </h1>
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    A high-risk merchant account is a type of bank account that allows businesses with higher exposure to chargebacks, fraud, or regulatory scrutiny to accept credit card payments safely. These accounts are specially designed to protect both the merchant and the payment processor.
                </p>
            </div>
            
            {/* Content 2 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Who Needs a High-Risk Merchant Account?
                </h1>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Vape and e-cigarette shops
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Travel agencies and booking services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Call centers and tech support services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Credit repair businesses
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        E-commerce stores selling regulated or niche products
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Digital products and subscription services
                    </li>
                </ul>
            </div>

            {/* Content 3 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Benefits of High-Risk Merchant Accounts
                </h1>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Fast approval even if other processors decline you
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Chargeback protection and fraud monitoring
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Secure payment processing for sensitive industries
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#F29200]' strokeWidth={3} />
                        Integration with popular e-commerce platforms
                    </li>
                </ul>
            </div>

            {/* Content 4 */}
            <div className='flex flex-col gap-4 sm:gap-5 lg:gap-7 p-3 sm:p-4 border-l-4 border-[#F29200] bg-[#FFFFFF]/5 rounded-lg py-4 sm:py-6 lg:py-5 px-4 sm:px-5 lg:px-10 w-full max-w-full lg:max-w-5xl'>
              <h1 className='text-base sm:text-lg lg:text-3xl leading-5 sm:leading-6 lg:leading-6 font-medium'>
                Supported E-commerce Platforms
            </h1>
            
            <div className='flex flex-wrap gap-3 sm:gap-4 lg:gap-5'>
                <a href='https://www.shopify.com/' className='bg-[#FFFFFF]/10 cursor-pointer rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium text-amber-500 border-2 border-[#FFFFFF]/10 hover:border-amber-500 p-2 sm:p-3 lg:p-4 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300 w-full sm:w-auto flex-1 min-w-[120px] sm:min-w-0'>
                Shopify
                </a>
                
                <a href='https://woocommerce.com/' className='bg-[#FFFFFF]/10 cursor-pointer rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium text-amber-500 border-2 border-[#FFFFFF]/10 hover:border-amber-500 p-2 sm:p-3 lg:p-4 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300 w-full sm:w-auto flex-1 min-w-[120px] sm:min-w-0'>
                WooCommerce
                </a>
                
                <a href='https://business.adobe.com/products/commerce.html' className='bg-[#FFFFFF]/10 cursor-pointer rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium text-amber-500 border-2 border-[#FFFFFF]/10 hover:border-amber-500 p-2 sm:p-3 lg:p-4 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300 w-full sm:w-auto flex-1 min-w-[120px] sm:min-w-0'>
                Magento
                </a>
                
                <a href='https://wordpress.org/' className='bg-[#FFFFFF]/10 cursor-pointer rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium text-amber-500 border-2 border-[#FFFFFF]/10 hover:border-amber-500 p-2 sm:p-3 lg:p-4 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300 w-full sm:w-auto flex-1 min-w-[120px] sm:min-w-0'>
                WordPress
                </a>
            </div>

            </div>


            {/* Content 5 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   How to Apply
                </h1>
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Getting approved is simple with the right provider. Ensure you have your business license, bank details, and product information ready. A trusted provider like Crazy Merchants can help you get approved within 24 hours.
                </p>
            </div>

            {/* Content 6 */}
            <div className='flex flex-col items-center justify-center rounded-lg bg-[#F29200] gap-3 sm:gap-4 lg:gap-5 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 w-full max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl text-gray-900 font-bold text-center px-2'>
                    Ready to Get Started?
                </h1>
                
                <p className='text-sm sm:text-base lg:text-lg text-gray-900 font-medium text-center px-2'>
                    Join thousands of satisfied merchants today!
                </p>
                
                <button className='p-3 sm:p-4 lg:p-5 px-6 sm:px-8 lg:px-10 text-center text-sm sm:text-base lg:text-xl font-semibold bg-black hover:bg-white/80 cursor-pointer rounded-lg sm:rounded-xl text-[#F29200] border w-full sm:w-auto transition-colors duration-300'>
                   Apply Now for High-Risk Merchant Account
                </button>
            </div>

        </div>




    </div>
    </div>
  )
}

export default Blog1
