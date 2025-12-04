import React, { useState } from 'react'
import { Lock } from 'lucide-react';

function B2BAbout() {

    const [selected, setSelected] = useState(0); // default show first card

    const cardData = [
        {
            url: '/B2BPayments/b2bpayments_img2.jpg',
            description: 'B2B payments often involve multiple stakeholders, approval processes, and specific payment terms, which can make managing transactions complex and time-consuming. Our solutions are designed to streamline these processes, improving efficiency and reducing administrative overhead. Security and compliance are paramount in B2B transactions, so our payment solutions incorporate advanced security measures and adhere to industry regulations, ensuring peace of mind for you and your business partners.',
        },
        {
            url: '/B2BPayments/b2bpayments_img3.jpg',
            description: 'Our B2B merchant accounts are designed to provide seamless, reliable payment processing for your business. With our tailored solutions, you can focus on growing your B2B relationships while we handle the intricacies of payment processing.',
        },

    ];

    const cardTitles = [
        "Navigating the Complexities of B2B Payments",
        "Elevate Your B2B Payment Processing",
    ];

    return (
        <div className="bg-[url('/HighRiskMerchant/HRMAbout/Section.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden lg:h-full py-10 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-10 md:gap-20'>

                <div className='flex flex-col gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#F29200] font-bold'>
                        About B2B Payment Processing
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

export default B2BAbout;