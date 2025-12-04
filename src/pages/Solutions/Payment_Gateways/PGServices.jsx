import React from 'react'

function PGServices() {

    const cardsData = [
        {
            url : '/Home/PaymentSolutions/card.png',
            title: 'Enhanced Security',
            lists: ['Advanced fraud detection algorithms', 'Multi-layer authentication protocols', 'Real-time transaction monitoring', 'Chargeback prevention tools', 'PCI DSS Level 1 compliance', 'Encrypted data transmission']
        },
        {
            url : '/Home/PaymentSolutions/card.png',
            title: 'Tailored Solutions',
            lists: ['Industry-specific risk management', 'Customizable payment flows', 'Flexible pricing models', 'USD and CAD support', 'High-volume transaction processing', 'Recurring billing options']
        },
                {
             url : '/Home/PaymentSolutions/support.png',
            title: 'North American Coverage',
            lists: ['Comprehensive US and Canadian payment processing', 'Compliance with US and Canadian regulations', 'Integration with popular North American payment methods', 'Regional fraud screening', 'Support for US and Canadian businesses', 'Expertise in North American high-risk industries']
        }
    ]


  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-10 lg:gap-20'>

            <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
                <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold'>Our <span className='text-[#F29200]'>Services</span></h1>
                <p className='text-base sm:text-lg font-medium w-full max-w-sm'>Secure, reliable, and tailored payment processing solutions for your high-risk business needs</p>
            </div>


            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 lg:gap-10 px-0 lg:px-30'>

                        {cardsData.map((data, index) => (
                                <div key={index} className="h-full w-full flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl bg-white shadow py-5 px-5 hover:bg-[#F29200] hover:text-white group">
                                    <div className="bg-[#F29200]/20 p-2 rounded-xl w-15 flex justify-center items-center group-hover:bg-white">
                                        <img src={data.url} alt={data.title} className="w-8 h-8" />
                                    </div>

                                    <h1 className="text-xl sm:text-2xl font-bold">{data.title}</h1>
                                    <ul className="flex flex-col gap-1 text-sm list-disc pl-5">
                                        {
                                            data.lists.map((list, index)=>(
                                                <li key={index}>{list}</li>
                                            ))
                                        }
                                    </ul>
                                    <button className='mt-auto p-2 bg-[#F29200] text-white rounded-lg group-hover:bg-white group-hover:text-black hover:bg-black hover:text-white cursor-pointer'>Learn More</button>
                                </div>
                        ))}

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 p-4 shadow-lg border-l-4 border-[#F29200] rounded-lg py-8 lg:py-10 px-6 lg:px-10'>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl sm:text-3xl font-semibold'>Need a Custom Solution?</h1>
                    <p className='text-xs sm:text-sm max-w-xl'>Every call center is unique. Our team will work with you to create a customized payment processing solution that fits your specific business model, volume requirements, and growth goals.</p>
                </div>

                <div className='flex flex-col sm:flex-row gap-6 lg:gap-10'>
                    <div className='text-center h-full w-full max-w-full sm:max-w-xs flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl bg-white shadow py-5 px-5 hover:bg-[#F29200] hover:text-white group'>
                       <h1 className='text-[#F29200] text-xl sm:text-2xl group-hover:text-white font-bold'>48hr</h1>
                       <p className='text-sm sm:text-md font-semibold'>Avg. Approval Time</p>
                    </div>

                    <div className='text-center h-full w-full max-w-full sm:max-w-xs flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl bg-white shadow py-5 px-5 hover:bg-[#F29200] hover:text-white group'>
                       <h1 className='text-[#F29200] text-xl sm:text-2xl group-hover:text-white font-bold'>500+</h1>
                       <p className='text-sm sm:text-md font-semibold'>Call Centers Served</p>
                    </div>

                </div>

            </div>

            

        </div>
      
    </div>
  )
}

export default PGServices