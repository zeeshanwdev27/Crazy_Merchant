import React, { useState } from 'react'
import { Lock } from 'lucide-react';

function MotoAbout() {

    const [selected, setSelected] = useState(0); // default show first card

    const cardData = [
        {
            url: '/MotoProcessing/motoprocessing_img2.jpg',
            description: 'MOTO transactions are classified as card-not-present (CNP) payments, which means they require specialized security measures and processing solutions. Our MOTO merchant accounts provide all the essential features you need, including virtual terminal access, a secure payment gateway, advanced fraud prevention tools, address verification service (AVS), CVV verification, and detailed transaction reporting. Together, these tools create a secure and efficient payment processing environment designed specifically for mail order and telephone order businesses.'
        },
        {
            url: '/MotoProcessing/motoprocessing_img3.avif',
            description: 'Security is paramount in MOTO payment processing, and our solutions are designed with multiple layers of protection to safeguard both your business and your customers. We ensure full PCI DSS compliance, encrypted data transmission, advanced fraud screening tools, secure customer data storage, and effective chargeback prevention measures. With Crazy Merchant’s MOTO merchant account, you can process mail and telephone orders confidently while maintaining the highest security standards.'
        },

    ];

    const cardTitles = [
        "Understanding MOTO Payment Processing",
        "Advanced Security for MOTO Transactions",
    ];

    return (
        <div className="bg-[url('/HighRiskMerchant/HRMAbout/Section.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden lg:h-full py-10 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-10 md:gap-20'>

                <div className='flex flex-col gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#F29200] font-bold'>
                        About MOTO Payment Processing
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

export default MotoAbout;