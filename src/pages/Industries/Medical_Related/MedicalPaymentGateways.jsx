import React, { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function MedicalPaymentGateways() {

        const [progress1, setProgress1] = useState(0);
        const [progress2, setProgress2] = useState(0);
        const swiperRef1 = useRef(null)
        const swiperRef2 = useRef(null)
        const totalCards1 = 4;
        const totalCards2 = 4;
    
        const cardsData = [
            {
                url : '/Home/PaymentSolutions/pay.png',
                title: 'PCI-DSS compliant processing',
                description: 'Secure payment processing that meets strict PCI-DSS industry standards to protect customer data.',
            },
            {
                url : '/Home/PaymentSolutions/card.png',
                title: 'Fraud detection and risk management',
                description: 'Advanced tools that monitor transactions in real-time to prevent fraud and reduce chargebacks.',
            },
            {
                url : '/Home/PaymentSolutions/support.png',
                title: 'Recurring billing automation',
                description: 'Automated subscription and recurring payment features to simplify ongoing billing cycles.',
            },
            {
                url : '/Home/PaymentSolutions/pay.png',
                title: 'EHR and telehealth platform integration',
                description: 'Easy integration with EHR and telehealth platform for smoother workflow and customer management.',
            },
        ]

        const cardsData2 = [
            {
                url : '/Home/PaymentSolutions/pay.png',
                title: 'Stable merchant accounts',
                description: 'Reliable payment processing with long-term stability and minimal service interruptions.',
            },
            {
                url : '/Home/PaymentSolutions/card.png',
                title: 'Protection against fraud and disputes',
                description: 'Advanced tools that safeguard your business from fraudulent activities and reduce dispute losses.',
            },
            {
                url : '/Home/PaymentSolutions/support.png',
                title: 'Fast deposits and high transaction limits',
                description: 'Quick settlement times and higher processing limits to support big-ticket transactions.',
            },
            {
                url : '/Home/PaymentSolutions/pay.png',
                title: 'Transparent reporting and dashboards',
                description: 'Clear, real-time insights with intuitive dashboards for tracking payments and performance.',
            },
        ]
    
        const handleSlideChange1 = (swiper) => {
    setProgress1((swiper.realIndex / (totalCards1 - 1)) * 100);
}
const handleSlideChange2 = (swiper) => {
    setProgress2((swiper.realIndex / (totalCards2 - 1)) * 100);
}
    
        const handleSwiperInit = (swiper) => {
            swiperRef1.current = swiper;
            // Set initial progress
            const realIndex = swiper.realIndex;
            const progressPercentage = (realIndex / (totalCards1 - 1)) * 100;
            setProgress1(progressPercentage);
        }
    
        const handleProgressClick1 = (e) => {
    if (!swiperRef1.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickPercentage = (clickPosition / rect.width) * 100;
    const targetSlide = Math.round((clickPercentage / 100) * (cardsData.length - 1));
    swiperRef1.current.slideToLoop(targetSlide);
}

const handleProgressClick2 = (e) => {
    if (!swiperRef2.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickPercentage = (clickPosition / rect.width) * 100;
    const targetSlide = Math.round((clickPercentage / 100) * (cardsData2.length - 1));
    swiperRef2.current.slideToLoop(targetSlide);
}




  return (
    <div className="bg-[url('/CallCenters/PaymentGateways/background.png')] bg-center lg:bg-top lg:bg-cover bg-no-repeat overflow-hidden sm:h-[150vh] lg:h-[165vh] py-10 lg:py-30 px-5 md:px-20 lg:px-40 mx-auto">

        {/* Slider 1 */}
        <div className='flex flex-col items-center w-full max-w-7xl font-medium mx-auto text-center text-white gap-15'>

            <div className='flex flex-col gap-5 w-full max-w-5xl'>
                <h1 className='text-4xl sm:text-5xl'>Set Up <span className='text-[#F29200]'>Secure Payment</span> Gateways for <span className='text-[#F29200]'>Medical & Healthcare</span></h1>
                <p className='text-sm sm:text-lg'>We integrate with secure payment gateways to ensure smooth, safe transactions:</p>
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
                                 slidesPerView: 2,  
                            },
                        }}
                        spaceBetween={100}
                        loop={true} 
                        autoplay={{
                            delay: 2500, 
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".nextBtn",
                            prevEl: ".prevBtn",
                        }}
                        onSlideChange={handleSlideChange1}
                        onSwiper={handleSwiperInit}
                    >
                        {cardsData.map((data, index) => (
                            <SwiperSlide key={index} className="h-full flex">
                                <div className="flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl w-full h-full justify-between bg-[#FFFFFF]/5 shadow py-10 px-5 hover:bg-[#F29200] hover:text-white group">
                                    <div className='flex gap-5 text-start'>
                                        <div className="bg-[#F29200]/20 p-2 rounded-xl w-18 flex justify-center items-center group-hover:bg-white">
                                        <img src={data.url} alt={data.title} className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-2xl font-bold w-full">{data.title}</h1>

                                    </div>



                                    <p className="text-sm text-start">{data.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full mt-4 flex items-center justify-center gap-10">
    
    <button className='prevBtn p-2.5 rounded-full bg-[#272727] border border-white'>
        <ArrowLeft className='w-7 h-7 text-white'/>
    </button>
    
    {/* Progress bar container */}
    <div className="relative w-full max-w-5xl flex items-center">
        {/* Background progress bar */}
        <div className="w-full h-1 bg-gray-300 rounded-full">
            {/* Filled progress */}
            <div 
                className="h-1 bg-[#F29200] rounded-full transition-all duration-300"
                style={{ width: `${progress1}%` }}
            />
        </div>
        
        {/* White circle button that moves with progress */}
        <div 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#F29200] rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10"
            style={{ left: `${progress1}%` }}
            onClick={handleProgressClick1}
        />
        
        {/* Clickable progress bar background for navigation */}
        <div 
            className="absolute top-0 left-0 w-full h-4 -translate-y-1.5 cursor-pointer"
            onClick={handleProgressClick1}
        />
    </div>
    
    <button className='nextBtn p-2.5 rounded-full bg-[#F29200]'>
        <ArrowRight className='w-7 h-7 text-white'/>
    </button>
      </div>

        </div>

        {/* Slider 2 */}
        <div className='flex flex-col items-center w-full max-w-7xl font-medium mx-auto text-center text-white gap-15 py-20'>

            <div className='flex flex-col gap-5 w-full max-w-5xl'>
                <h1 className='text-4xl sm:text-5xl'>Seamless <span className='text-[#F29200]'>Payment</span> Processing for<br /> <span className='text-[#F29200]'>Medical & Healthcare</span></h1>
                <p className='text-sm sm:text-lg'>Whether you manage a small clinic, large hospital, or telehealth service, our solutions ensure:</p>
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
                                 slidesPerView: 2,  
                            },
                        }}
                        spaceBetween={100}
                        loop={true} 
                        autoplay={{
                            delay: 2500, 
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".nextBtn2",
                            prevEl: ".prevBtn2",
                        }}
                        onSlideChange={handleSlideChange2}
                        onSwiper={handleSwiperInit}
                    >
                        {cardsData2.map((data, index) => (
                            <SwiperSlide key={index} className="h-full flex">
                                <div className="flex flex-col gap-4 border-3 border-[#F29200]/40 rounded-2xl w-full h-full justify-between bg-[#FFFFFF]/5 shadow py-10 px-5 hover:bg-[#F29200] hover:text-white group">
                                    <div className='flex gap-5 text-start'>
                                        <div className="bg-[#F29200]/20 p-2 rounded-xl w-18 flex justify-center items-center group-hover:bg-white">
                                        <img src={data.url} alt={data.title} className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-2xl font-bold w-full">{data.title}</h1>

                                    </div>



                                    <p className="text-sm text-start">{data.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full mt-4 flex items-center justify-center gap-10">
    
    <button className='prevBtn2 p-2.5 rounded-full  bg-[#272727] border border-white'>
        <ArrowLeft className='w-7 h-7 text-white'/>
    </button>
    
    {/* Progress bar container */}
    <div className="relative w-full max-w-5xl flex items-center">
        {/* Background progress bar */}
        <div className="w-full h-1 bg-gray-300 rounded-full">
            {/* Filled progress */}
            <div 
                className="h-1 bg-[#F29200] rounded-full transition-all duration-300"
                style={{ width: `${progress2}%` }}
            />
        </div>
        
        {/* White circle button that moves with progress */}
        <div 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#F29200] rounded-full shadow-lg cursor-pointer transition-all duration-300 z-10"
            style={{ left: `${progress2}%` }}
            onClick={handleProgressClick2}
        />
        
        {/* Clickable progress bar background for navigation */}
        <div 
            className="absolute top-0 left-0 w-full h-4 -translate-y-1.5 cursor-pointer"
            onClick={handleProgressClick2}
        />
    </div>
    
    <button className='nextBtn2 p-2.5 rounded-full bg-[#F29200]'>
        <ArrowRight className='w-7 h-7 text-white'/>
    </button>
      </div>

        </div>

      
    </div>
  )
}

export default MedicalPaymentGateways
