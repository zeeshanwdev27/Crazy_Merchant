import React from 'react'
import { FileText, CircleCheckBig, Share, Users, Zap } from 'lucide-react';

function GetStartedSteps({title, description, card1, card2, card3, card4}) {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-8 lg:gap-20'>
            
        <div className='flex flex-col items-center gap-6 lg:gap-5'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black w-full max-w-5xl text-center leading-normal lg:leading-13'>{title}</h1>
            <p className='text-sm sm:text-md text-gray-600 font-medium w-full lg:max-w-3xl text-center px-4 sm:px-0'>
              {description}
            </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 px-0 lg:px-20'>

            <div className='p-4 rounded-2xl border-2 border-[#F29200]/40 shadow-md w-full max-w-xs mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        <FileText className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>

                    <div className='bg-[#F29200] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-[#F29200] text-sm sm:text-base'>
                        <span>1</span>
                    </div>
              </div>
              <h1 className='font-bold text-lg sm:text-xl'>{card1[0]}</h1>
              <p className='text-xs font-medium'>{card1[1]}</p>
              <CircleCheckBig className='w-5 h-5 text-[#F29200] group-hover:text-white' />
            </div>

            <div className='p-4 rounded-2xl border-2 border-[#F29200]/40 shadow-md w-full max-w-xs mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        <Share  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>

                    <div className='bg-[#F29200] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-[#F29200] text-sm sm:text-base'>
                        <span>2</span>
                    </div>
              </div>
              <h1 className='font-bold text-lg sm:text-xl'>{card2[0]}</h1>
              <p className='text-xs font-medium'>{card2[1]}</p>
              <CircleCheckBig className='w-5 h-5 text-[#F29200] group-hover:text-white' />
            </div>

            <div className='p-4 rounded-2xl border-2 border-[#F29200]/40 shadow-md w-full max-w-xs mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        <Users  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>

                    <div className='bg-[#F29200] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-[#F29200] text-sm sm:text-base'>
                        <span>3</span>
                    </div>
              </div>
              <h1 className='font-bold text-lg sm:text-xl'>{card3[0]}</h1>
              <p className='text-xs font-medium'>{card3[1]}</p>
              <CircleCheckBig className='w-5 h-5 text-[#F29200] group-hover:text-white' />
            </div>

            <div className='p-4 rounded-2xl border-2 border-[#F29200]/40 shadow-md w-full max-w-xs mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        <Zap className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>

                    <div className='bg-[#F29200] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-[#F29200] text-sm sm:text-base'>
                        <span>4</span>
                    </div>
              </div>
              <h1 className='font-bold text-lg sm:text-xl'>{card4[0]}</h1>
              <p className='text-xs font-medium'>{card4[1]}</p>
              <CircleCheckBig className='w-5 h-5 text-[#F29200] group-hover:text-white' />
            </div>

        </div>

        </div>


        <div className="bg-linear-to-b from-[#F29200]/5 to-[#F29200]/40 py-5 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
            <h1 className='text-xl sm:text-2xl lg:text-4xl font-black text-center md:text-left'>OUR <span className='text-[#F29200]'>OFFICIAL GATEWAY</span> <br className='hidden md:block' />  PARTNERS</h1>
            <img src="/Home/WhyChooseUs/nmilogo.png" alt="nmilogo" className='w-24 sm:w-30 md:w-40 h-auto max-h-12 sm:max-h-15' />
        </div>
        </div>

    </div>
  )
}

export default GetStartedSteps