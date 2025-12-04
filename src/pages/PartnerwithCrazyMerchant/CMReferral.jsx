import React from 'react'
import { FileText } from 'lucide-react';

function CMReferral() {

    const cardsData = [
        {
            title : 'Sign Up',
            description: 'Register Today as a referral partner through our simple online form.'
        },
        {
            title : 'Get Verified',
            description: 'Start referring businesses to Crazy Merchants and earn commissions.'
        },
        {
            title : 'Learn',
            description: 'Access state-of-the-art payment processing solutions for your clients.'
        },
        {
            title : 'Refer Clients',
            description: 'Start referring businesses to Crazy Merchants and earn commissions.'
        }
    ]

    return (
        <div className="bg-[url('/PartnerwithCrazyMerchant/background.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden h-auto sm:h-auto md:h-[85vh] lg:h-[95vh] py-15 md:py-30 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-8 sm:gap-10 md:gap-20 py-10 sm:py-15 md:py-0'>

                <div className='flex flex-col gap-4 sm:gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Become a <span className='text-[#F29200]'>Crazy Merchants</span> Referral Partner in <span className='text-[#F29200]'>4 Easy Steps</span>
                    </h1>
                    <p className='text-sm sm:text-md'>We integrate secure payment gateways to ensure safe and reliable transactions:</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full max-w-8xl gap-6 sm:gap-8 md:gap-10 lg:gap-10'>

                    {cardsData.map((data, index)=>(
                        <div key={index} className="py-6 sm:py-7 md:py-8 px-4 sm:px-5 flex flex-col gap-3 sm:gap-4 border-3 border-[#F29200]/40 rounded-2xl w-full h-full justify-between bg-[#FFFFFF]/5 shadow hover:bg-[#F29200] hover:text-white group">
                            <div className='flex gap-4 sm:gap-5 text-start items-center'>
                                <div className="bg-[#F29200]/20 p-2 sm:p-2 rounded-xl w-14 sm:w-16 md:w-18 flex justify-center items-center group-hover:bg-white text-[#F29200] text-base sm:text-lg font-bold">
                                    {index + 1}
                                </div>
                                <h1 className="text-xl sm:text-2xl font-bold w-full">{data.title}</h1>
                            </div>
                            <p className="text-xs sm:text-sm text-start">{data.description}</p>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default CMReferral;