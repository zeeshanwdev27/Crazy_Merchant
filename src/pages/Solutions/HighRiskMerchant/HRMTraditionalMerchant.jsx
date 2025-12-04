import React from 'react'

function HRMTraditionalMerchant() {

    const tableData= [
        {
            title: 'Approval Process',
            description1: 'Specialized underwriting that understands your industry, higher approval chances',
            description2: 'Standard process that often automatically rejects high-risk businesses'
        },
        {
            title: 'Processing Fees',
            description1: 'Transparent pricing based on your actual risk level and volume',
            description2: 'Low advertised rates that can increase dramatically with any issues'
        },
        {
            title: 'Chargeback Protection',
            description1: 'Proactive tools and support to prevent and fight chargebacks',
            description2: 'Basic protection with extra fees for additional services'
        },
        {
            title: 'Volume Caps',
            description1: 'Flexible limits that grow with your business',
            description2: 'Strict caps that can suddenly limit your processing'
        },
        {
            title: 'Industry Knowledge',
            description1: 'Deep understanding of your specific industry challenges',
            description2: "General approach that doesn't consider industry specifics",
        },
        {
            title: 'Multiple Accounts',
            description1: 'Options for multiple accounts to ensure business continuity',
            description2: 'Usually limited to one account, increasing risk'
        },
        {
            title: 'Contract Terms',
            description1: 'Flexible terms that consider industry cycles and needs',
            description2: 'Rigid terms with harsh penalties for violations'
        },
        {
            title: 'Support Level',
            description1: 'Dedicated team that understands your business model',
            description2: 'General support without industry expertise'
        },
        {
            title: 'Payment Gateway',
            description1: 'Advanced features designed for high-risk processing',
            description2: 'Basic features that may not meet your needs'
        }
    ]

    const tableHeading = [
        'Feature',
        'High Risk Merchant Account',
        'Traditional Merchant Account'
    ]

  return (
    <div className='py-10 md:py-20 px-4 sm:px-6 lg:px-40 min-h-screen'>
        <div className='flex flex-col gap-8 md:gap-15 w-full'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center max-w-4xl lg:max-w-5xl font-bold mx-auto'>
                High Risk vs.<span className='text-[#F29200]'>Traditional Merchant Accounts: Real</span> Differences
            </p>

            {/* Table */}
            <div className="border border-amber-400 rounded-2xl shadow-lg max-w-7xl mx-auto w-full">
                {/* Header - Hidden on mobile, visible on lg and above */}
                <div className="hidden lg:grid lg:grid-cols-3 p-3 border-b border-amber-400 px-4 lg:px-8">
                    {tableHeading.map((data, index) => (
                        <h1 
                            key={index} 
                            className="text-[#F29200] font-semibold text-sm lg:text-md"
                        >
                            {data}
                        </h1>
                    ))}
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden grid grid-cols-1 p-3 border-b border-amber-400 px-4">
                    <h1 className="text-[#F29200] font-semibold text-sm text-center">
                        High Risk vs Traditional Merchant Accounts Comparison
                    </h1>
                </div>

                {/* Rows */}
                {tableData.map((data, index) => (
                    <div key={index} className="border-b border-amber-400 last:border-b-0">
                        {/* Mobile Layout */}
                        <div className="lg:hidden  border-amber-400 p-4 ">
                            <h1 className="font-semibold text-md mb-3 text-center text-[#F29200]">
                                {data.title}
                            </h1>
                            <div className="space-y-3">
                                <div className="bg-amber-50 p-3 rounded-lg">
                                    <h3 className="font-semibold text-amber-700 text-sm mb-1">
                                        High Risk Merchant Account
                                    </h3>
                                    <p className="text-sm text-gray-700">{data.description1}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <h3 className="font-semibold text-gray-700 text-sm mb-1">
                                        Traditional Merchant Account
                                    </h3>
                                    <p className="text-sm text-gray-700">{data.description2}</p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:grid lg:grid-cols-3 px-4 lg:px-8  border-amber-400 p-3">
                            <h1 className="font-semibold text-md">{data.title}</h1>
                            <p className="text-sm max-w-xs">{data.description1}</p>
                            <p className="text-sm max-w-xs">{data.description2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HRMTraditionalMerchant