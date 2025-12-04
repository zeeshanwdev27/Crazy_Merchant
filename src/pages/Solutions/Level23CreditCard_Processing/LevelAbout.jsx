import React, { useState } from 'react'
import { Lock } from 'lucide-react';

function LevelAbout() {

    const [selected, setSelected] = useState(0); // default show first card

    const cardData = [
        {
            url: '/LevelProcessing/levelprocessing_img2.jpg',
            description: 'Level 1 processing requirements are straightforward, including basic details such as the merchant name, card number, billing ZIP code, purchase amount, and purchase date; however, fees for Level 1 transactions are higher. In contrast, Level 2 data typically results in lower processing and interchange rates and is commonly required by B2B companies. Although Level 2 requirements vary among credit card networks, they generally include information such as customer code, ZIP code, merchant ZIP code, billing address, tax amount, merchant tax identification, and improved compliance with tax and auditing requirements. For B2B businesses—especially those handling high transaction volumes—Level 2 data processing enhances security, improves reporting accuracy, and provides access to small but valuable cost savings.',
        },
        {
            url: '/LevelProcessing/levelprocessing_img3.jpg',
            description: 'Level 3 data requirements build on Level 2 by including additional, more detailed information, and like Level 2, they often result in lower interchange costs, though this can vary depending on the credit card network. Level 3 processing is typically used by large companies and for corporate or government cards. Most card networks require details such as product description, destination ZIP code, invoice or order number, item ID and description, item quantity, and unit of measure. For B2B companies, choosing a payment processor that supports both Level 2 and Level 3 data requirements can help reduce interchange fees and improve overall payment efficiency.',
        },

    ];

    const cardTitles = [
        "What is Credit Card Level 2 Data?",
        "What is Level 3 Additional Reporting Data?",
    ];

    return (
        <div className="bg-[url('/HighRiskMerchant/HRMAbout/Section.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden lg:h-full py-10 lg:py-30 px-5 md:px-10 lg:px-40 mx-auto">

            <div className='flex flex-col items-center w-full font-medium mx-auto text-white gap-10 md:gap-20'>

                <div className='flex flex-col gap-5 w-full max-w-5xl text-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#F29200] font-bold'>
                        About Level 2 & Level 3 Data?
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

export default LevelAbout;