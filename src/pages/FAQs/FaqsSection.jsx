import React, { useState, useEffect } from "react";
import { MessageCircleQuestionMark , ArrowRight, ArrowLeft, ChevronUp, ChevronDown   } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function FaqsSection() {

    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("solutions");
    const [openIndex, setOpenIndex] = useState(null);
    const [activeAccordin, setAccordin] = useState("General");
    const [activeSection, setActiveSection] = useState(1);


     const SolutionData = [
    {
        title: 'Competitive Revenue Share',
        link : '#',
    },
    {
        title: 'Dedicated Support',
        link : '#',
    },
    {
        title: 'Cutting-edge Technology',
        link : '#',
    },
    {
        title: 'Flexible Integration',
        link : '#',
    },
    {
        title: 'Comprehensive Training',
        link : '#',
    },
    {
        title: 'Marketing Resources',
        link : '#',
    },
    {
        title: 'Diverse Product Offerings',
        link : '#',
    },
    {
        title: 'Industry Expertise',
        link : '#',
    },
]

   const IndustriesData = [
  {
    title: "Blueberry Adventures",
    link : '#',
  },
  {
    title: "Rocket Pencil",
    link : '#',
  },
  {
    title: "Invisible Umbrella",
    link : '#',
  },
  {
    title: "Friendly Robot",
    link : '#',
  },
  {
    title: "Magic Cookie Box",
    link : '#',
  },
  {
    title: "Cloud Backpack",
    link : '#',
  },
  {
    title: "Rainbow Keys",
    link : '#',
  },
  {
    title: "Time-Slowing Shoes",
    link : '#',
  },
];

  useEffect(() => {
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";
  setSearchValue(search);

  if (search) {
    // Scroll to section
    const section = document.getElementById("faqsSection");
    if (section) section.scrollIntoView({ behavior: "smooth" });

    // Automatically switch tab based on search
    const searchLower = search.toLowerCase();
    if (SolutionData.some(item => item.title.toLowerCase().includes(searchLower))) {
      setActiveTab("solutions");
    } else if (IndustriesData.some(item => item.title.toLowerCase().includes(searchLower))) {
      setActiveTab("industries");
    }
  }
}, [location.search]);




 const displayedData = activeTab === "solutions" ? SolutionData : IndustriesData;

 const topicsHeading = ['General', 'Features and Functionality', 'Pricing Plan', 'Data Privacy and Security', 'Integration and Compatibility', 'Training and Support']

const generalfaqs = [
  {
    title: 'What is this service about?',
    description: 'Our platform provides a comprehensive solution for managing your daily tasks, projects, and communications efficiently. It is designed for individuals and teams who want to streamline their workflow and increase productivity.'
  },
  {
    title: 'Who can use this service?',
    description: 'This service is suitable for businesses of all sizes, freelancers, and students. Anyone who wants to stay organized and improve their workflow can benefit from the platform’s wide range of features.'
  },
  {
    title: 'Is there a trial period available?',
    description: 'Yes, new users can sign up for a 14-day free trial that includes access to all premium features. This allows you to explore the platform thoroughly before committing to a paid plan.'
  },
  {
    title: 'Do I need technical knowledge to get started?',
    description: 'Absolutely not. The platform is designed to be intuitive and user-friendly. Most users can set up their accounts and start managing tasks without any technical background or prior experience.'
  },
  {
    title: 'Can multiple users collaborate on the platform?',
    description: 'Yes, you can add team members, assign tasks, and collaborate in real-time. The platform supports multiple user roles with customizable permissions to ensure smooth team management.'
  }
];

const featuresfaqs = [
  {
    title: 'What are the main features?',
    description: 'The platform offers task management, calendar integration, file sharing, reporting dashboards, and automated notifications. Each feature is designed to help you save time and improve overall productivity.'
  },
  {
    title: 'Can I customize the platform?',
    description: 'Yes, you can adjust settings, create custom workflows, and personalize dashboards to fit your specific needs. This ensures the platform works exactly how your team requires.'
  },
  {
    title: 'Does it support mobile devices?',
    description: 'Our mobile app is available on both iOS and Android devices, providing full access to your projects and tasks on the go. You can receive notifications, manage tasks, and collaborate from anywhere.'
  },
  {
    title: 'Are there any automation tools?',
    description: 'The platform includes automation options such as recurring tasks, reminders, and workflow rules. These features help reduce manual work and ensure important tasks are never overlooked.'
  },
  {
    title: 'Is reporting available?',
    description: 'Yes, you can generate detailed reports on tasks, team performance, and project progress. Reports can be exported in various formats and help with data-driven decision-making.'
  }
];

const Pricingfaqs = [
  {
    title: 'What pricing plans are available?',
    description: 'We offer three main plans: Free, Standard, and Premium. The Free plan includes basic features, while Standard and Premium offer advanced functionality, higher usage limits, and dedicated support.'
  },
  {
    title: 'Can I switch plans later?',
    description: 'Yes, you can upgrade or downgrade your subscription at any time. The system will automatically adjust billing and feature access according to your new plan.'
  },
  {
    title: 'Are there any hidden fees?',
    description: 'No, our pricing is transparent. All fees are clearly listed on the pricing page. Additional services or add-ons are optional and will be communicated before purchase.'
  },
  {
    title: 'Do you offer discounts for annual billing?',
    description: 'Yes, customers who choose annual billing receive a discount compared to monthly subscriptions. This allows you to save money while committing to a longer-term plan.'
  },
  {
    title: 'Is a refund available?',
    description: 'We offer a 30-day money-back guarantee for all paid plans. If you are not satisfied with the service, you can request a full refund within this period.'
  }
];

const DataPrivacyfaqs = [
  {
    title: 'How is my data protected?',
    description: 'We use industry-standard encryption and secure storage protocols to protect all user data. Data is continuously monitored and backed up to prevent loss or unauthorized access.'
  },
  {
    title: 'Do you share my information?',
    description: 'No, we do not share personal or business information with third parties without your explicit consent. Our privacy policy outlines how data is handled securely.'
  },
  {
    title: 'Is data encrypted in transit?',
    description: 'Yes, all data transmitted between your device and our servers is encrypted using SSL/TLS protocols. This ensures that your information remains secure at all times.'
  },
  {
    title: 'Can I delete my data?',
    description: 'Absolutely. You can request the deletion of your account and all associated data at any time. Once confirmed, all personal data will be permanently removed from our systems.'
  },
  {
    title: 'Are there compliance certifications?',
    description: 'Our platform complies with GDPR and other relevant data privacy regulations. We regularly audit our processes to ensure full compliance and user protection.'
  }
];

const Integrationfaqs = [
  {
    title: 'Which platforms can I integrate with?',
    description: 'Our system supports integrations with popular tools such as Slack, Google Workspace, Microsoft Teams, and various project management software. You can connect multiple platforms seamlessly.'
  },
  {
    title: 'Is there an API available?',
    description: 'Yes, we provide a fully documented REST API. Developers can use it to automate workflows, retrieve data, and connect the platform to custom applications.'
  },
  {
    title: 'Do integrations require technical knowledge?',
    description: 'Some integrations are simple and require no technical expertise, while advanced setups may need basic knowledge of APIs and authentication tokens.'
  },
  {
    title: 'Can I connect multiple accounts?',
    description: 'Yes, users can connect multiple accounts from the same service. This is useful for managing different business units or personal and work accounts simultaneously.'
  },
  {
    title: 'Are third-party apps safe?',
    description: 'All integrated apps are vetted for security and reliability. Only approved services are available to ensure that your data remains protected.'
  }
];

const TraningSupportfaqs = [
  {
    title: 'Do you provide training?',
    description: 'We offer comprehensive training sessions, including live webinars, video tutorials, and detailed documentation. This helps users quickly get up to speed and use the platform effectively.'
  },
  {
    title: 'What support channels are available?',
    description: 'You can contact support via email, live chat, or phone. Our support team is available 24/7 to assist with any issues or questions you may have.'
  },
  {
    title: 'Is onboarding included?',
    description: 'Yes, new users receive guided onboarding to set up accounts, configure workflows, and understand best practices. This ensures a smooth start for teams of all sizes.'
  },
  {
    title: 'How fast is the response time?',
    description: 'Our support team responds to all inquiries within 24 hours on business days. Premium plans receive priority support with faster response times.'
  },
  {
    title: 'Are there additional learning resources?',
    description: 'Yes, users have access to an extensive knowledge base, FAQs, and community forums to find answers and share tips with other users.'
  }
];


const faqMap = {
  "General": generalfaqs,
  "Features and Functionality": featuresfaqs,
  "Pricing Plan": Pricingfaqs,
  "Data Privacy and Security": DataPrivacyfaqs,
  "Integration and Compatibility": Integrationfaqs,
  "Training and Support": TraningSupportfaqs,
};

const displayedFaqs = searchValue
  ? Object.values(faqMap).flat().filter(faq =>
      faq.title.toLowerCase().includes(searchValue)
    )
  : (faqMap[activeAccordin] || []);

  const filteredCards = searchValue
  ? [...SolutionData, ...IndustriesData].filter(card =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  : displayedData;


  const handleReset = () => {
  setSearchValue(""); 
  setActiveTab("solutions"); 
  navigate(`/faqs`);
};


  // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const faqItemVariants = {
        closed: {
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const answerVariants = {
        closed: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

    const iconVariants = {
     closed: { rotate: 0 },
     open: { rotate: 180 }
  };


  return (
    <div className='h-full min-h-[66vh]'>


      {/* Section 1 */}

      {activeSection === 1 && (

        <div id="faqsSection" className='py-10 lg:py-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-10 lg:gap-20'>
            
        <div className='flex justify-center  items-center gap-6 lg:gap-8'>
            <button onClick={() => setActiveTab("solutions")} className={`text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl cursor-pointer transition ${activeTab === "solutions" ? "bg-[#F29200] text-white" : "border border-[#F29200] text-black hover:bg-[#F29200] hover:text-white"}`}>Solutions</button>
            <button onClick={() => setActiveTab("industries")} className={`text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl cursor-pointer transition ${activeTab === "industries" ? "bg-[#F29200] text-white" : "border border-[#F29200] text-black hover:bg-[#F29200] hover:text-white"}`}>Industries</button>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 lg:gap-6 px-0 lg:px-20'>

            {
              filteredCards.length > 0 ? (
              
                filteredCards.map((data, index)=>(
            <div key={index} onClick={() => setActiveSection(2)} className='w-full p-4 py-7 rounded-2xl border-2 border-[#F29200]/40 shadow-md mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 lg:gap-5'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        <MessageCircleQuestionMark  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>
                   <h1 className='font-medium lg:font-medium text-sm sm:text-lg lg:text-lg'>{data.title}</h1>
              </div>
              <ArrowRight  className='w-6 h-6 text-black group-hover:text-white' />

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
         {filteredCards.length > 0 && (
  searchValue ? (
    <button 
      onClick={handleReset}
      className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-[#F29200] hover:bg-amber-500 text-white cursor-pointer w-full max-w-xs text-center'
    >
      Show All
    </button>
  ) : (
    <button 
      className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-[#F29200] hover:bg-amber-500 text-white cursor-pointer w-full max-w-xs text-center'
    >
      View All
    </button>
  )
)}
        </div>

        )}



        {/* Section 2 */}
        
        {activeSection === 2 && (
          <div className='py-15 sm:py-15 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-40 flex flex-col gap-10 sm:gap-15 lg:gap-20'>
    
    {/* Header Section */}
    <div className='flex justify-between items-start sm:items-center gap-4 sm:gap-6 lg:gap-8'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Topics</h1>
        <button 
            onClick={() => setActiveSection(1)} 
            className='flex gap-2 sm:gap-4 py-2 px-4 sm:py-3 sm:px-6 items-center border rounded-2xl text-base sm:text-lg lg:text-xl font-medium cursor-pointer hover:border-amber-500 hover:bg-white hover:text-amber-500 bg-amber-500 text-white transition-colors duration-300'
        >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back</span>
        </button>
    </div>

    {/* Main Content Grid */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-15 sm:gap-15 lg:gap-5 w-full">
        
        {/* Left Column - Topic List */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full mx-auto lg:mx-0 max-w-lg lg:max-w-xl">
            {topicsHeading.map((data, index) => (
                <div 
                    key={index} 
                    className={`text-sm sm:text-lg font-medium py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-2xl cursor-pointer transition duration-300
                        ${activeAccordin === data 
                            ? "bg-[#F29200] text-white" 
                            : "border border-[#F29200] text-black hover:bg-[#F29200] hover:text-white"
                        }`}
                    onClick={() => setAccordin(data)}
                >
                    <p className="text-center sm:text-left">{data}</p>
                </div>
            ))}
        </div>

        {/* Right Column - FAQ Section */}
        <div className='relative overflow-hidden w-full'>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={containerVariants}
                className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-0 sm:px-2 lg:px-8"
            >
                {/* FAQ Items */}
                <motion.div 
                    variants={containerVariants}
                    className="w-full space-y-3 sm:space-y-3 lg:space-y-4"
                >
                    {displayedFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border-b-2 border-[#F29200]/40 cursor-pointer w-full bg-white/50 backdrop-blur-sm pb-4 sm:pb-5"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.995 }}
                        >
                            <motion.div 
                                className="flex items-center justify-between"
                                variants={faqItemVariants}
                            >
                                <motion.h3 
                                    className="text-sm sm:text-base lg:text-lg font-medium text-slate-800 pr-3 sm:pr-4 lg:pr-6 leading-relaxed"
                                    whileHover={{ color: "#f59e0b" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {faq.title}
                                </motion.h3>
                                <motion.div
                                    variants={iconVariants}
                                    whileHover={{ color: "#f59e0b" }}
                                    animate={openIndex === index ? "open" : "closed"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="flex-shrink-0 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700"
                                >
                                    {openIndex === index ?  
                                         <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5"/> :
                                         <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5"/> 
                                    }
                                </motion.div>
                            </motion.div>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.p 
                                        variants={answerVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="text-xs sm:text-sm lg:text-base text-slate-600 mt-3 sm:mt-4 lg:mt-5 leading-relaxed sm:leading-loose"
                                    >
                                        {faq.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
</div>



        )}

        
    </div>
  )
}

export default FaqsSection


