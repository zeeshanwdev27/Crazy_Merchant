import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function LowRiskIndustries() {
  return (
    <div className="bg-[url('/Home/LowRiskIndustries/background.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden h-screen lg:h-[85vh] py-10 lg:py-30 px-5 md:px-20 lg:px-40 mx-auto">

        <div className='flex flex-col lg:flex-row gap-5 md:gap-20 lg:gap-80'>


            {/* first */}
            <div className='flex flex-col gap-10'>
                <h1 className='text-5xl lg:text-6xl font-bold text-white'>LOW <span className='text-[#F29200]'>RISK</span> <br /> <span className='text-[#F29200]'>INDUSTRIES</span> <br /> WE ACCEPT</h1>
                <p className='text-md lg:text-sm w-full lg:max-w-lg text-gray-300'>Our comprehensive SaaS solutions are tailored to streamline your operations and drive maximum revenue for your business.</p>
                 
            <div className='relative cursor-pointer group'>
                <img src="Home/LowRiskIndustries/Rectangle.png" alt="Rectangle_bg" className='w-120' />
             
                <h1 className='absolute left-10 top-3 text-4xl font-medium text-white'>Get Started <br /> Today!</h1>

                <div className='absolute right-5 md:right-40 lg:right-15 bottom-5 p-3 rounded-full bg-amber-500 group-hover:bg-amber-600'>
                  <ArrowUpRight className='w-8 h-8 text-white'/>
                </div>
             

            </div>
            </div>


            {/* Second */}
            <div className='grid grid-cols-2 gap-1 justify-center w-full max-w-xl'>
            
                        <div className='flex justify-center'>
                          <div className='bg-transparent hover:bg-amber-500 hover:text-white text-white w-50 flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
                          <img src="/Home/LowRiskIndustries/Vape.png" alt="img1" className='w-10 h-10 md:w-14 md:h-14 invert brightness-10' />
                          <p className=' font-bold text-md'>Vape Shops</p>
                         </div>
                        </div>
            
                        <div className='flex justify-center'>
                          <div className='bg-transparent hover:bg-amber-500 hover:text-white text-white w-50 flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
                          <img src="/Home/LowRiskIndustries/Groceries.png" alt="img1" className='w-10 h-10 md:w-14 md:h-14 invert brightness-10' />
                          <p className=' font-bold text-md'>Groceries</p>
                         </div>
                        </div>
            
                        <div className='flex justify-center'>
                          <div className='bg-transparent hover:bg-amber-500 hover:text-white text-white w-50 flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
                          <img src="/Home/LowRiskIndustries/Resturant.png" alt="img1" className='w-10 h-10 md:w-14 md:h-14 invert brightness-10' />
                          <p className=' font-bold text-md'>Restaurants</p>
                         </div>
                        </div>
            
                        <div className='flex justify-center'>
                          <div className='bg-transparent hover:bg-amber-500 hover:text-white text-white w-50 flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
                          <img src="/Home/LowRiskIndustries/GasStation.png" alt="img1" className='w-14 h-14 md:w-14 md:h-14 invert brightness-10' />
                          <p className=' font-bold text-md'>Gas Stations</p>
                         </div>
                        </div>
            
                        <div className='flex justify-center'>
                          <div className='bg-transparent hover:bg-amber-500 hover:text-white text-white  w-50 flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
                          <img src="/Home/LowRiskIndustries/Resturant.png" alt="img1" className='w-8 h-8 md:w-12 md:h-12 invert brightness-10' />
                          <p className=' font-bold text-md'>Restaurants</p>
                         </div>
                        </div>
            

                        <div className='relative flex justify-center cursor-pointer group pt-5'>
                          <img src="/Home/GetStarted/ViewIndustries.png" alt="ViewIndustries" className='w-60 h-30' />
                         
                            <h1 className='absolute left-10 top-8 text-2xl font-medium text-white'>View All <br /> Industries</h1>
            
                            <div className='absolute right-10 bottom-7 p-1 rounded-full bg-amber-500 group-hover:bg-amber-600'>
                              <ArrowUpRight className='w-7 h-7 text-white' strokeWidth={1.5}/>
                            </div>
                         
            
                        </div>
            
            
            
            
            
            </div>

        </div>

      
    </div>
  )
}

export default LowRiskIndustries
