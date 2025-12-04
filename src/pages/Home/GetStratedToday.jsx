import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function GetStratedToday() {
  return (
    <div className='h-full  min-h-[80vh]'>


      <div className='py-20 px-5 md:px-20 lg:px-40 flex flex-col gap-20'>

        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between'>
            <h1 className='text-5xl lg:text-6xl font-black lg:leading-15'>HIGH - <span className='text-[#F29200]'>RISK <br /> INDUSTRIES</span> <br /> WE ACCEPT</h1>
            <p className='text-md text-gray-600 font-medium flex items-center w-full lg:max-w-lg'>No matter how your customers want to pay, we can help you find the right solution for your business. No matter how your customers want to pay, we can help you find the right solution for your business</p>
        </div>


        <div className='flex flex-col lg:flex-row gap-10 w-full'>

            <div className='relative w-full md:w-100 lg:w-170 lg:h-100 cursor-pointer group'>
                 <img  src="/Home/GetStarted/GetStarted.png" alt="GetStarted" />
             
                <h1 className='absolute left-10 top-10 text-5xl lg:text-6xl text-white'>Get <br /> Started <br /> Today!</h1>

                <div className='absolute right-8 bottom-8 lg:-bottom-10 lg:p-8 p-5 rounded-full bg-amber-500 group-hover:bg-amber-600'>
                  <ArrowUpRight className='w-12 h-12 text-white'/>
                </div>
            </div>

          

          <div className='grid grid-cols-2 md:grid-cols-3 gap-1 justify-center w-full'>

            <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img1.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Travel Agencies</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img2.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Tech Support</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img3.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Call Centers</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img4.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Outbound Product <br /> Selling</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img5.png" alt="img1" className='w-12 h-12 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Insurance Quote / <br /> Registered Agents</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img6.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Medical Related <br /> Campaigns</p>
             </div>
            </div>

                        <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img7.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>E-commerce <br /> Websites</p>
             </div>
            </div>

            <div className='flex justify-center'>
              <div className='bg-white hover:bg-amber-500 hover:text-white w-full max-w-xs flex flex-col gap-4 justify-center items-center rounded-3xl group py-5'>
              <img src="/Home/GetStarted/img8.png" alt="img1" className='w-14 h-14 group-hover:invert group-hover:brightness-20' />
              <p className=' font-bold text-md'>Digital Books / Design / <br /> Marketing / SEO</p>
             </div>
            </div>

            
            <div className='relative flex justify-center cursor-pointer group col-span-2 md:col-span-1'>
              <img src="/Home/GetStarted/ViewIndustries.png" alt="ViewIndustries" className='w-80 h-40 md:w-40 md:h-35 lg:w-80 lg:h-50' />
             
                <h1 className='absolute left-15 md:left-8 lg:left-10 top-3 md:top-5 lg:top-3 text-3xl md:text-xl lg:text-4xl text-white'>View <br /> All Industries</h1>

                <div className=' absolute  right-12 lg:right-10 md:right-7 bottom-5 md:bottom-7 lg:bottom-5 p-3 rounded-full bg-amber-500 group-hover:bg-amber-600'>
                  <ArrowUpRight className='w-8 h-8 md:w-5 md:h-5 lg:w-8 lg:h-8 text-white'/>
                </div>
             
            </div>





          </div>

        </div>





       </div>
      



    </div>
  )
}

export default GetStratedToday
