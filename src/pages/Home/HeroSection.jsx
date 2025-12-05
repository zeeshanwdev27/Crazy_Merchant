import React from "react";
import { motion } from 'framer-motion'
import Swal from "sweetalert2";
import { Spotlight } from "../../components/ui/spotlight";

function Home() {

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
    <div className="relative pt-40 lg:pt-50 h-full text-white w-full flex flex-col justify-center items-start bg-[url('/Home/HeroSection/background1.png')] bg-cover bg-no-repeat overflow-hidden">
      
      <Spotlight
        className="-top-20! left-10! md:-top-20 md:left-60"
        fill="white"
      />
      
      <div className="z-10 flex flex-col gap-6 mx-auto w-full px-2 lg:px-0">
        
        <div className="relative flex flex-col text-center w-full max-w-5xl gap-5 lg:gap-8 mx-auto">
        <h1 className="tracking-wider text-5xl md:text-6xl lg:text-8xl font-black [font-variation-settings:'wght'_1000] [-webkit-text-stroke:3px_white] [text-shadow:0_4px_12px_rgba(0,0,0,0.6)]">
          THEY DECLINE
        </h1>

        {/* <p className="block xl:hidden tracking-wider text-5xl md:text-6xl font-black [font-variation-settings:'wght'_1000] [text-shadow:0_4px_12px_rgba(0,0,0,0.6)] [-webkit-text-stroke:2px] text-amber-500">
          Merchant Website
        </p> */}


        {/* merchant float */}
       {/* <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 bg-[#E0F4F2]/20 px-3 py-0.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium shadow-xl left-10">
       Merchant Website
       </div> */}


       {/* right float */}
      {/* <div className="hidden xl:block absolute top-32 -translate-y-1/2 rounded-full text-sm font-medium shadow-xl -right-4">
        <img className="w-20 h-14 md:w-22 md:h-16 lg:w-35 lg:h-18" src="/Home/HeroSection/business.png" alt="business_img" />
       </div> */}


       {/* left float */}
       {/* <div className="hidden xl:block  absolute top-55 md:top-32 lg:top-48 -translate-y-1/2  rounded-full text-sm font-medium shadow-xl left-8">
        <img className="w-22 h-13 md:w-24 md:h-15 lg:w-36 lg:h-18" src="/Home/HeroSection/finance.png" alt="finance_img" />
       </div> */}

        <h1 className="lg:pl-15 tracking-wider text-5xl md:text-6xl lg:text-8xl font-black [font-variation-settings:'wght'_1000] [-webkit-text-stroke:3px_white] [text-shadow:0_4px_12px_rgba(0,0,0,0.6)]">
          WE APPROVE
        </h1>
        </div>

        <p className="tracking-wider text-xl font-bold text-center">
          Best Solution for Travel and Call Center Businesses.
        </p>

        <div className="flex gap-5 justify-center items-center">
          <div className="flex justify-center items-center -space-x-4">
            {/* Left Img */}
            <div className="relative w-12 h-12 rounded-full border-4 border-white shadow-xl ring-4 ring-gray-900/50">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&h=400"
                alt="Person 1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Mid Img */}
            <div className="relative z-10 w-12 h-12 rounded-full border-4 border-white shadow-2xl ring-4 ring-gray-900/50">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400"
                alt="Person 2"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Right Img */}
            <div className="relative w-12 h-12 rounded-full border-4 border-white shadow-xl ring-4 ring-gray-900/50">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
                alt="Person 3"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start text-start">
            <p className="font-bold">450+</p>
            <p className="text-base tracking-wide">User in 2025</p>
          </div>
        </div>

        {/* form image */}
        <div className="mt-10 lg:mt-0 mx-auto flex justify-center items-center bg-[url('Home/HeroSection/formbackground.png')] w-full max-w-5xl lg:h-[55vh] bg-cover bg-no-repeat overflow-hidden border-5 border-[#F29200]/15 rounded-4xl">
          <div className="flex flex-col gap-5 lg:gap-10 w-full max-w-xl md:max-w-2xl lg:max-w-4xl top-240 md:top-185 lg:top-70 px-3 md:px-5 lg:px-0 py-5 lg:py-0">
            
            <div className="flex flex-col gap-3 items-center lg:items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F29200]">Get Started Today!</h1>
              <p className="text-sm md:text-md lg:text-lg text-center">Best Solution for Travel and Call Center Businesses</p>
            </div>



            <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              try {
                const response = await fetch("https://crazymerchants.com/sendmail.php", {
                  method: "POST",
                  body: formData,
                });
                const result = await response.text();
                if (result.includes("success")) {
                  Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "🎉 Thank you! Message sent successfully.",
                    confirmButtonColor: "#f59e0b",
                  });
                  e.target.reset();
                } else if (result.includes("invalid_email")) {
                  Swal.fire({
                    icon: "warning",
                    title: "Invalid Email",
                    text: "⚠️ Please enter a valid email address.",
                    confirmButtonColor: "#f59e0b",
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "❌ Something went wrong. Please try again later.",
                    confirmButtonColor: "#f59e0b",
                  });
                }
              } catch (error) {
                Swal.fire({
                  icon: "error",
                  title: "Network Error",
                  text: "🚨 Please check your connection and try again.",
                  confirmButtonColor: "#f59e0b",
                });
                console.error(error);
              }
              e.target.reset();
            }}

              className="w-full flex flex-col justify-center items-center gap-5 lg:gap-15 px-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-sm md:max-w-2xl lg:max-w-5xl gap-2 lg:gap-5">
                  <input required type="text" name="businessname" placeholder="Business Name" className="p-2 rounded bg-[#161616] border border-gray-500" />
                  <input required type="text" name="fullname" placeholder="Full Name" className=" p-2 rounded bg-[#161616] border border-gray-500" />
                  <input required type="text" name="phone" placeholder="Phone Number" className=" p-2 rounded bg-[#161616] border border-gray-500" />
                  <input required type="text" name="email" placeholder="Email address" className=" p-2 rounded col-span-1 bg-[#161616] border border-gray-500" />
                  <input required type="text" name="message" placeholder="What are you looking for?" className=" p-2 rounded  bg-[#161616] border border-gray-500 col-span-2" />
                </div>

              <button type="submit" className="p-3 md:p-4 w-full max-w-sm md:max-w-2xl lg:max-w-xl  rounded-2xl text-center text-xl bg-[#F29200] cursor-pointer hover:bg-amber-600">GET A QUOTE</button>
              </form>

          </div>
        </div>


      </div>


      {/* Section 2 */}
     <div className="z-10 bottom-0 left-0 w-full top-[156%] md:top-[102%] lg:top-[0%] lg:flex justify-center overflow-hidden">
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

export default Home;