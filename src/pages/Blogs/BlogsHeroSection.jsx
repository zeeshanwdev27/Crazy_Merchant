import React, { useState } from "react";
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function BlogsHeroSection() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  

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
    

  const handleClearSearch = () => {
    setValue("");
    navigate(`/blogs`);
  };

  const handleInputChange = (e) => {
  setValue(e.target.value);
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  navigate(`/blogs?search=${value}`);
};



  return (
    <>

    {/* Section 1 */}
    <div className="relative pt-40 lg:pt-50 h-full text-white w-full flex flex-col justify-center items-start bg-[url('/Home/HeroSection/background.png')] bg-cover bg-no-repeat overflow-hidden">
      
      
      <div className="flex flex-col gap-8 mx-auto w-full px-5 lg:px-0 mb-5 lg:mb-10">
        
        <div className="relative flex flex-col text-center w-full gap-6 lg:gap-5">

        <h1 className="py-1 tracking-wider text-4xl md:text-6xl lg:text-6xl font-bold bg-linear-to-r from-white via-[#cfcfcf] via-[#8f8f8f] to-white bg-clip-text text-transparent">
         Industry Insights & Expert Articles
        </h1>

        <p className="tracking-wider text-sm md:text-md lg:text-lg text-gray-300 font-bold text-center px-3 lg:px-0">
          Discover quick, useful blogs across the industries we work with
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit}  className="border-4 border-[#EAEAEA]/30 rounded-xl px-4 py-4 flex items-center gap-5 w-full max-w-3xl mx-auto focus-within:border-amber-600 transition">
              <Search className="w-5 h-5 lg:w-7 lg:h-7 shrink-0" />
            <input type="text" value={value} onChange={handleInputChange} className="peer w-full outline-none text-lg lg:text-xl" placeholder="Search..."/>
            {value && (
              <button type="button" onClick={handleClearSearch} className=" hover:text-gray-300 rounded-full transition cursor-pointer">
                <X className="w-5 h-5 lg:w-7 lg:h-7 shrink-0" />
              </button>
            )}
        </form>
    


       

        </div>

        {/* Common Searches Options */}
<div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 md:gap-5 mx-auto">
  <h3 className="text-sm sm:text-md font-medium">Common searches:</h3>

  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">

    <div onClick={()=> navigate(`/blogs?search=vape`)} className="py-2 px-3 sm:py-2.5 sm:px-3 md:py-3 md:px-3 rounded-xl sm:rounded-2xl bg-[#FF6900]/20 text-[#F29200] hover:bg-[#EAEAEA]/5 cursor-pointer">
      <p className="text-xs sm:text-sm md:text-md font-medium">Vape Shops</p>
    </div>

    <div onClick={()=> navigate(`/blogs?search=payment`)} className="py-2 px-3 sm:py-2.5 sm:px-3 md:py-3 md:px-3 rounded-xl sm:rounded-2xl bg-[#FF6900]/20 text-[#F29200] hover:bg-[#EAEAEA]/5 cursor-pointer">
      <p className="text-xs sm:text-sm md:text-md font-medium">Payment Gateways</p>
    </div>

    <div onClick={()=> navigate(`/blogs?search=high`)} className="py-2 px-3 sm:py-2.5 sm:px-3 md:py-3 md:px-3 rounded-xl sm:rounded-2xl bg-[#FF6900]/20 text-[#F29200] hover:bg-[#EAEAEA]/5 cursor-pointer">
      <p className="text-xs sm:text-sm md:text-md font-medium">High Risk Merchant Accounts</p>
    </div>

    <div onClick={()=> navigate(`/blogs?search=payment`)} className="py-2 px-3 sm:py-2.5 sm:px-3 md:py-3 md:px-3 rounded-xl sm:rounded-2xl bg-[#FF6900]/20 text-[#F29200] hover:bg-[#EAEAEA]/5 cursor-pointer">
      <p className="text-xs sm:text-sm md:text-md font-medium">Payment Processing</p>
    </div>
  </div>
</div>



      </div>


      {/* Section 2 */}
     <div className="bottom-0 left-0 w-full top-[156%] md:top-[102%] lg:top-[0%] lg:flex justify-center overflow-hidden">
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
                    className='shrink-0 mx-8 md:mx-12 ' 
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

export default BlogsHeroSection;