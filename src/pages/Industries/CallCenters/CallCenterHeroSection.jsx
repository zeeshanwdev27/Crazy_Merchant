import React from "react";
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react';

function CallCenterHeroSection({title, description, opt1, opt2, opt3, opt4, opt5, opt6}) {

      const imageLinks = [
        { title:"Travel Agencies \n Industry" , url: "/Home/HeroSection/img1.png" },
        { title:'Tech Support \n Industry' ,url: "/Home/HeroSection/img2.png" },
        { title:'Call Centers \n Industry' ,url: "/Home/HeroSection/img3.png" },
        { title:'Insurance / Register \n Agents Industry' ,url: "/Home/HeroSection/img4.png" },
        { title:'Medical Related \n Campaigns Industry' ,url: "/Home/HeroSection/img5.png" },
        { title:'E-commerce \n Websites Industry' ,url: "/Home/HeroSection/img6.png" },
        { title:'Digital Books/ SEO \n / Design Industry' ,url: "/Home/HeroSection/img7.png" },
        { title:'Vape Shops \n Industry' ,url: "/Home/HeroSection/img8.png" },
        { title:'Groceries \n Industry' ,url: "/Home/HeroSection/img9.png" },
        { title:'Gas stations \n Industry' ,url: "/Home/HeroSection/img10.png" },
    ]

    const duplicatedImages = [...imageLinks, ...imageLinks, ...imageLinks,]
  return (
    <>

    {/* Section 1 */}
    <div className="relative pt-30 md:pt-40 h-full text-white w-full flex flex-col justify-center items-start bg-[url('/Home/HeroSection/background.png')] bg-cover bg-no-repeat overflow-hidden">
      
      
      <div className=" px-5 sm:px-5 md:px-10 lg:px-0 grid lg:grid-cols-2 gap-10 lg:gap-40 mx-auto">

        <div className="flex flex-col gap-6 lg:gap-10">

  <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl w-full max-w-2xl font-black">{title}</h1>
  <p className="max-w-2xl text-sm">{description}</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 w-full max-w-2xl">

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt1}</p>
    </div>

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt2}</p>
    </div>

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt3}</p>
    </div>

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt4}</p>
    </div>

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt5}</p>
    </div>

    <div className="p-3 sm:p-4 flex items-center gap-3 rounded-md bg-linear-to-r from-[#252525] via-[#363636] to-[#252525] border border-[#EAEAEA]">
      <div className="p-2 sm:p-3 rounded-full bg-[#FF6900]/20">
        <TrendingUp className="text-amber-500 w-4 h-4 sm:w-5 sm:h-5"/>
      </div>
      <p className="w-full max-w-xs text-xs sm:text-sm">{opt6}</p>
    </div>

  </div>

</div>


        
        {/* form image */}
        <div className="flex justify-center items-center bg-[url('Home/HeroSection/formbackground.png')] w-full max-w-2xl lg:h-[60vh] bg-cover bg-no-repeat overflow-hidden border-5 border-[#F29200]/15 rounded-4xl">
          {/* <img src="/Home/HeroSection/formbg.png" className="w-full max-w-2xl h-[40vh] lg:h-[60vh]" alt="" /> */}

          <div className="flex flex-col gap-5 lg:gap-10 w-full max-w-xl md:max-w-2xl lg:max-w-xl top-240 md:top-185 lg:top-70 px-3 md:px-5 lg:px-0 py-5 lg:py-0">
            
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#F29200]">Get Started Today!</h1>
              <p className="text-sm md:text-md lg:text-md text-center">Best Solution for Travel and Call Center Businesses</p>
            </div>



              <form action="" className="w-full flex flex-col justify-center items-center gap-5 lg:gap-15">
                <div className="grid grid-cols-2 lg:grid-cols-2 w-full max-w-sm md:max-w-2xl lg:max-w-xl gap-2 md:gap-4 lg:gap-5">
                  <input type="text" placeholder="Business Name" className="text-sm sm:text-md lg:text-lg p-2 rounded bg-[#161616] border border-gray-500" />
                  <input type="text" placeholder="Full Name" className="text-sm sm:text-md lg:text-lg p-2 rounded bg-[#161616] border border-gray-500" />
                  <input type="text" placeholder="Phone Number" className="text-sm sm:text-md lg:text-lg p-2 rounded bg-[#161616] border border-gray-500" />
                  <input type="text" placeholder="Email address" className="text-sm sm:text-md lg:text-lg p-2 rounded col-span-1 bg-[#161616] border border-gray-500" />
                  <input type="text" placeholder="What are you looking for?" className="text-sm sm:text-md lg:text-lg p-2 rounded  bg-[#161616] border border-gray-500 col-span-2" />
                </div>

              <button className="p-2 md:p-4 w-full max-w-sm md:max-w-2xl lg:max-w-xl  rounded-2xl text-center text-md md:text-xl bg-[#F29200]">GET A QUOTE</button>
              </form>


          
          </div>
        </div>

      </div>



          {/* Section 2 */}
     <div className="left-0 w-full top-[156%] md:top-[102%] lg:top-[0%] lg:flex justify-center overflow-hidden bottom-0">
    <div className="bg-[url('/Home/HeroSection/bottombg.png')]  w-full bg-cover bg-no-repeat py-20 px-10 overflow-hidden">
        <motion.div
            className='flex justify-center items-center'
            animate={{
                x: ['0%', '-100%']
            }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duplicatedImages.length * 0.5,
                    ease: "linear",
                },
            }}
        >
            {duplicatedImages.map((item, index) => (
                <motion.div 
                    className='flex-shrink-0 mx-8 md:mx-12 ' 
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >


                    <div className="rounded-4xl bg-white/25  flex gap-6 px-6 py-3">
                    <img 
                        src={item.url} 
                        alt={`partner-logo-${index}`} 
                        className='h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all duration-300'
                    />
                      {/* icons */}
                      <p className="whitespace-pre-line text-white font-bold text-md">{item.title}</p>

                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div> 
        </div>

      

      
    </div>







    </>
  );
}

export default CallCenterHeroSection;