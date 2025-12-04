import React, { useState } from 'react'
import { Lock } from 'lucide-react';

function HRMAbout() {

    const [selected, setSelected] = useState(0); // default show first card

    const cardData = [
        {
            url: '/HighRiskMerchant/HRMAbout/IndustriesWeSupport.png',
            description: 'We provide specialized merchant accounts for businesses across a variety of high-risk industries, including travel and timeshares with protection against seasonal fluctuations, subscription services with reliable recurring billing solutions, nutraceuticals and supplements supported by FDA compliance guidance, tech support and telemarketing equipped with chargeback-prevention tools, and e-cigarettes and vaping supported by industry-specific risk-management strategies.'
        },
        {
            url: '/HighRiskMerchant/HRMAbout/IndustriesWeSupport.png',
            description: 'Every business is unique, and we treat yours that way. We take time to understand your specific challenges, whether it’s high ticket sizes, recurring billing needs, or chargeback concerns. Our solutions adapt to your business model, not the other way around. We provide the tools and support you need to process payments reliably and grow your business with confidence.'
        },
        {
            url: '/HighRiskMerchant/HRMAbout/IndustriesWeSupport2.jpg',
            description: 'Payment processing shouldn’t limit your business potential. We provide the tools and support you need to grow, including volume increases as your business expands, multiple merchant accounts for stability, and advanced fraud protection. Our team stays current with industry regulations and trends, helping you adapt to changes while maintaining reliable payment processing.'
        },
        {
            url: '/HighRiskMerchant/HRMAbout/IndustriesWeSupport3.jpg',
            description: 'We believe in being transparent about what you get. Our merchant accounts include: specialized underwriting that understands your industry, proven fraud protection tools that actually work, flexible payment options including recurring billing, 24/7 support from people who know your business, competitive rates with no hidden fees, and multiple account options for business stability. You also get easy integration with major e-commerce platforms, detailed reporting tools, and scalable solutions that grow with you.'
        },
        {
            url: '/HighRiskMerchant/HRMAbout/IndustriesWeSupport3.jpg',
            description: 'Our solutions include practical features that help your business succeed: AI-powered fraud detection that reduces false positives, real-time transaction monitoring to spot issues early, customizable risk settings that match your business needs, and automated chargeback prevention tools that work. We also provide reliable recurring billing, detailed analytics you can actually use, mobile payment options, and secure integration with your existing systems.'
        }
    ];

    const cardTitles = [
        "Industries We Support with Real Solutions",
        "Solutions Tailored to Your Specific Needs",
        "Real Support for Your Business Growth",
        "Clear Benefits You Can Count On",
        "Technology That Makes a Difference"
    ];

    return (
        <div className="bg-[url('/HighRiskMerchant/HRMAbout/Section.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden lg:h-[110vh] py-10 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-10 md:gap-20'>

                <div className='flex flex-col gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#F29200] font-bold'>
                        About High Risk Merchant Account
                    </h1>
                </div>

                <div className='flex flex-col lg:grid lg:grid-cols-2 w-full max-w-7xl gap-10 lg:gap-0'>

                    {/* LEFT SIDE – CARDS */}
                    <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-full items-center'>
                        
                        {cardTitles.map((title, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(index)}
                                className={`
                                    cursor-pointer group w-full max-w-sm sm:max-w-full p-4 md:p-5 flex items-center gap-4 md:gap-5 rounded-md
                                    border border-[#EAEAEA]
                                    bg-linear-to-r from-[#252525] via-[#363636] to-[#252525]
                                    hover:bg-[#F29200] hover:bg-none
                                    transition-all
                                     ${selected === index ? "bg-[#F29200] bg-none" : ""}
                                `}
                            >
                                <div className={`p-2 md:p-3 rounded-md bg-[#FF6900]/20 group-hover:bg-white  ${selected === index ? "bg-white bg-none" : ""}`}>
                                    <Lock className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <p className="w-full text-start text-sm md:text-base">{title}</p>
                            </div>
                        ))}

                    </div>

{/* RIGHT SIDE – SHOW SELECTED CARD DATA */}
<div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full max-w-3xl lg:pl-10">
    <div className="relative w-full overflow-hidden rounded-lg">
        <img 
            src={cardData[selected].url} 
            alt="Selected" 
            className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
    </div>
    <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        {cardData[selected].description}
    </p>
</div>

                </div>

            </div>

        </div>
    )
}

export default HRMAbout;