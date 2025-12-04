import React, { useState } from 'react'
import { Lock } from 'lucide-react';

function MerchantAbout() {

    const [selected, setSelected] = useState(0); 

    const cardData = [
        {
            url: '/MerchantServices/merchantservices_img2.jpg',
            description: 'Our merchant services platform provides everything your business needs. We offer dedicated merchant accounts, comprehensive payment processing, and complete transaction management. Our solution supports a wide range of payment methods, advanced security features, and real-time reporting so you can manage every transaction with confidence and efficiency.'
        },
        {
            url: '/MerchantServices/merchantservices_img2.jpg',
            description: 'We provide complete merchant support to ensure your success. Our dedicated account managers and 24/7 support team are always ready to assist with any needs. From account setup to ongoing operations, we’re here to help your business thrive.'
        },
        {
            url: '/MerchantServices/merchantservices_img2.jpg',
            description: 'Our merchant services include a complete suite of business tools. Access detailed transaction reporting, customer management features, and comprehensive analytics. These tools help you understand your business better and make informed decisions for growth.'
        },

    ];

    const cardTitles = [
        "Complete Merchant Solutions",
        "Merchant Support",
        "Merchant Tools",
    ];

    return (
        <div className="bg-[url('/HighRiskMerchant/HRMAbout/Section.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden lg:h-[110vh] py-10 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-10 md:gap-20'>

                <div className='flex flex-col gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#F29200] font-bold'>
                        About Merchant Solutions
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

export default MerchantAbout;