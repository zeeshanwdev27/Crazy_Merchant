import React from "react";
import { motion } from 'framer-motion'
import Swal from "sweetalert2";

function PwcmHeroSection({title1, description}) {

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
    <div className="relative pt-40 lg:pt-50 h-full text-white w-full flex flex-col justify-center items-start bg-[url('/Home/HeroSection/background.png')] bg-cover bg-no-repeat overflow-hidden">
      
      
      <div className="flex flex-col gap-8 mx-auto w-full px-2 lg:px-0 ">
        
        <div className="relative flex flex-col text-center w-full gap-5 lg:gap-3 max-w-4xl mx-auto">
        <h1 className="leading-13 sm:leading-17 lg:leading-18 text-4xl md:text-6xl lg:text-6xl font-black [font-variation-settings:'wght'_1000] [-webkit-text-stroke:3px_white] [text-shadow:0_4px_12px_rgba(0,0,0,0.6)]">
          {title1}
        </h1>

        </div>

        <p className="tracking-wider text-lg lg:text-xl font-bold text-center px-3 lg:px-0 max-w-5xl mx-auto">
          {description}
        </p>

        {/* form image */}
          <div className="mt-10 lg:mt-0 mx-auto flex justify-center items-center w-full max-w-5xl lg:h-[60vh] bg-cover bg-no-repeat overflow-hidden border-5 border-[#F29200]/15 rounded-4xl"
          style={{ backgroundImage: `url(/Home/HeroSection/formbackground.png)` }}>
          {/* <img src="/Home/HeroSection/formbg.png" className="w-full max-w-2xl h-[40vh] lg:h-[60vh]" alt="" /> */}

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

export default PwcmHeroSection;