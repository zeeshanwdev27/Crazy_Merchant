import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowBigRightDash   } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";

function BlogsSections() {

    const location = useLocation();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    

    const blogCards = [
        {
            image: 'Blogs/blog1.png',
            blogLink : '/highriskmerchantblog',
            title: 'What Are High-Risk Merchant Accounts and Do You Need One?'
        },
        {
            image: 'Blogs/blog2.png',
            blogLink : '#',
            title: 'Payment Processing Solutions for Vape Shops'
        },
        {
           image: 'Blogs/blog3.png',
           blogLink : '#',
            title: 'Top 5 Mistakes High-Risk Businesses Make When Choosing a Payment Gateway'
        },
        {
            image: 'Blogs/blog4.png',
            blogLink : '#',
            title: 'Top 10 High-Risk Payment Gateways for E-Commerce Businesses'
        },
        {
            image: 'Blogs/blog5.jpg',
            blogLink : '#',
            title: 'Why Crazy Merchants is the Best Choice for High-Risk Payment Processing'
        },
    ]

      useEffect(() => {
      const query = new URLSearchParams(location.search);
      const search = query.get("search") || "";
      setSearchValue(search);
    
      if (search) {
        // Scroll to section
        const section = document.getElementById("blogsSection");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    
      }
    }, [location.search]);

      const filteredCards = searchValue
  ? [...blogCards].filter(card =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  : blogCards;


    const handleReset = () => {
        setSearchValue(""); 
        navigate(`/blogs`);
    };


  return (
    <div id='section' className='h-full min-h-[66vh] py-10 lg:py-15 flex flex-col gap-15'>

        <div id='blogsSection' className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 px-4 sm:px-6 md:px-10 lg:px-50 xl:px-80'>
           {
           filteredCards.length > 0 ? (
            filteredCards.map((data, index) => (
                <div 
                key={index}  
                className='w-full p-4 py-5 sm:py-6 lg:py-7 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#F29200]/40 shadow-sm sm:shadow-md mx-auto flex flex-col gap-3 sm:gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'
                >
                    <div onClick={()=>navigate(`${data.blogLink}`)} className='flex flex-col gap-3 lg:gap-5'>
                        <img src={data.image} alt={data.title} className='w-full h-60 xl:h-70 rounded-lg' />
                        <h1 className='font-medium text-sm sm:text-base lg:text-lg line-clamp-2'>{data.title}</h1>
                        <button onClick={()=>navigate(`${data.blogLink}`)}  className='py-2 px-4 bg-[#F29200] text-white w-full font-medium text-sm sm:text-base rounded-md group-hover:bg-white group-hover:text-[#F29200] cursor-pointer transition-colors duration-300'>
                            Solutions
                        </button>
                    </div>
                </div>
            ))
            ) : (
              <div className="col-span-full text-center text-lg font-medium text-gray-500">
                     Not Found
                  </div>
              )
        
        }
        </div>
         {
            filteredCards.length > 0 && (
               searchValue ? (
               <button onClick={handleReset}  className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-amber-500 hover:bg-black text-white cursor-pointer w-full max-w-xs text-center'>Show All</button>
            ) : (
                <button  className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-black hover:bg-amber-500 text-white cursor-pointer w-full max-w-xs text-center'>View All</button>
                  )
                )
        }

    </div>
  )
}

export default BlogsSections
