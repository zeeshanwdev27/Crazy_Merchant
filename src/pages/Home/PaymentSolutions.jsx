import React, { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function PaymentSolutions() {

    const [progress, setProgress] = useState(0);
    const swiperRef = useRef(null);
    const totalCards = 6; 

    const cardsData = [
        {
            url : '/Home/PaymentSolutions/pay.png',
            title: 'High-Risk Payment Gateway',
            description: 'Our high risk payment gateway makes high risk credit card processing safer and more secure with integrated fraud solutions to prevent chargebacks.',
            lists : ['Advanced fraud prevention tools', 'Customized gateway solutions', 'Industry-specific configurations', 'Real-time transaction monitoring']
        },
        {
            url : '/Home/PaymentSolutions/card.png',
            title: 'Credit Card Chargebacks',
            description: 'If you experience high levels of chargebacks or if your payment processor has dropped your account, you may need a high risk merchant account.',
            lists : ['Advanced chargeback prevention', 'Real-time fraud detection', 'Automated dispute resolution', 'Risk monitoring dashboard']
        },
        {
            url : '/Home/PaymentSolutions/support.png',
            title: 'High-Risk Merchant Account Provider',
            description: 'The best high-risk merchant account provider by understanding the essential factors, features, and warning signs you should carefully look for.',
            lists : ['Custom solutions for travel agencies and tour operators', 'Payment processing for tech support and IT services', 'Credit repair merchant accounts', 'Tailored ecommerce solutions']
        },
        {
            url : '/Home/PaymentSolutions/pay.png',
            title: 'High-Risk Payment Gateway',
            description: 'Our high risk payment gateway makes high risk credit card processing safer and more secure with integrated fraud solutions to prevent chargebacks.',
            lists : ['Advanced fraud prevention tools', 'Customized gateway solutions', 'Industry-specific configurations', 'Real-time transaction monitoring']
        },
        {
            url : '/Home/PaymentSolutions/card.png',
            title: 'Credit Card Chargebacks',
            description: 'If you experience high levels of chargebacks or if your payment processor has dropped your account, you may need a high risk merchant account.',
            lists : ['Advanced chargeback prevention', 'Real-time fraud detection', 'Automated dispute resolution', 'Risk monitoring dashboard']
        },
        {
            url : '/Home/PaymentSolutions/support.png',
            title: 'High-Risk Merchant Account Provider',
            description: 'The best high-risk merchant account provider by understanding the essential factors, features, and warning signs you should carefully look for.',
            lists : ['Custom solutions for CBD businesses', 'Adult content payment processing', 'Credit repair merchant accounts', 'Tailored ecommerce solutions']
        },
    ]

    const handleSlideChange = (swiper) => {
        // Calculate progress based on real index (accounts for loop)
        const realIndex = swiper.realIndex; // This gives the actual index in the original array
        const progressPercentage = (realIndex / (totalCards - 1)) * 100;
        setProgress(progressPercentage);
    }

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        // Set initial progress
        const realIndex = swiper.realIndex;
        const progressPercentage = (realIndex / (totalCards - 1)) * 100;
        setProgress(progressPercentage);
    }

    const handleProgressClick = (e) => {
        if (!swiperRef.current) return;
        
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        const clickPercentage = (clickPosition / progressBarWidth) * 100;
        
        // Calculate which slide to go to based on click position
        const targetSlide = Math.round((clickPercentage / 100) * (totalCards - 1));
        swiperRef.current.slideToLoop(targetSlide);
    }

    return (
        <div className='h-full min-h-[66vh]'>

            <div className='py-20 px-5 md:px-20 lg:px-40 flex flex-col gap-20'>
                
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Comprehensive <br /> <span className='text-[#F29200]'>Payment</span> Solutions</h1>
                    <div className='flex flex-col gap-5'>
                        <p className='text-lg text-gray-700 font-bold flex items-center w-full lg:max-w-lg'>Secure, reliable, and tailored payment processing solutions for your high-risk business needs</p>
                        <div className='flex gap-3 justify-end'>
                            <button className='prevBtn  p-2.5 rounded-full bg-[#F29200]'><ArrowLeft className='w-7 h-7 text-white'/></button>
                            <button className='nextBtn  p-2.5 rounded-full bg-black'><ArrowRight  className='w-7 h-7 text-white'/></button>
                        </div>
                    </div>
                </div>

                {/* Progress bar with white circle button */}
                <div className="block lg:hidden relative w-full mt-4">
                    {/* Background progress bar */}
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                        {/* Filled progress */}
                        <div 
                            className="h-1 bg-[#F29200] rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    
                    {/* White circle button that moves with progress */}
                    <div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#F29200] rounded-full shadow-lg cursor-pointer transition-all duration-300"
                        style={{ left: `${progress}%` }}
                        onClick={handleProgressClick}
                    />
                    
                    {/* Clickable progress bar background for navigation */}
                    <div 
                        className="absolute top-0 left-0 w-full h-4 -translate-y-1.5 cursor-pointer"
                        onClick={handleProgressClick}
                    />
                </div>


                {/* Cards */}
                <div className="w-full flex justify-center">
                    <Swiper
                        className="max-w-[500px] lg:max-w-[1500px] "
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,  
                            },
                            768: {
                                slidesPerView: 1,  
                            },
                            1024: {
                                 slidesPerView: 3,  
                            },
                        }}
                        spaceBetween={20}
                        loop={true} 
                        autoplay={{
                            delay: 2500, 
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".nextBtn",
                            prevEl: ".prevBtn",
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSwiperInit}
                    >
                        {cardsData.map((data, index) => (
                            <SwiperSlide key={index} className="h-full flex">
                                <div className="flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl w-full h-full justify-between bg-white shadow py-5 px-5 hover:bg-[#F29200] hover:text-white group">
                                    <div className="bg-[#F29200]/20 p-2 rounded-xl w-15 flex justify-center items-center group-hover:bg-white">
                                        <img src={data.url} alt={data.title} className="w-8 h-8" />
                                    </div>

                                    <h1 className="text-2xl font-bold">{data.title}</h1>

                                    <p className="text-sm">{data.description}</p>

                                    <ul className="flex flex-col gap-1 text-sm list-disc pl-5">
                                        <li>{data.lists[0]}</li>
                                        <li>{data.lists[1]}</li>
                                        <li>{data.lists[2]}</li>
                                        <li>{data.lists[3]}</li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Progress bar with white circle button */}
                <div className="hidden lg:block relative w-full mt-4">
                    {/* Background progress bar */}
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                        {/* Filled progress */}
                        <div 
                            className="h-1 bg-[#F29200] rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    
                    {/* White circle button that moves with progress */}
                    <div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#F29200] rounded-full shadow-lg cursor-pointer transition-all duration-300"
                        style={{ left: `${progress}%` }}
                        onClick={handleProgressClick}
                    />
                    
                    {/* Clickable progress bar background for navigation */}
                    <div 
                        className="absolute top-0 left-0 w-full h-4 -translate-y-1.5 cursor-pointer"
                        onClick={handleProgressClick}
                    />
                </div>

            </div>

        </div>
    )
}

export default PaymentSolutions