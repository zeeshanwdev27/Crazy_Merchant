import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

function HRMFAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What exactly makes a business 'high-risk'?",
            answer: "A business is typically considered high-risk due to specific factors: higher than average chargeback rates (usually above 1%), operating in regulated industries like CBD or gambling, selling high-ticket items ($500+), or offering future services like travel packages. This classification isn’t always about business stability – many successful, legitimate businesses are considered high-risk simply due to their industry or business model.",
        },
        {
            question: "Why do I need a specialized high risk merchant account?",
            answer: "A specialized account provides stability and appropriate tools for your business type. Regular merchant accounts often shut down high-risk businesses abruptly or freeze funds when they see patterns normal for your industry. Specialized accounts understand these patterns and provide proper support. For example, if you’re in subscription services, you need recurring billing tools and chargeback prevention features that regular accounts typically don’t offer.",
        },
        {
            question: "What are the real costs involved?",
            answer: "While rates are typically higher than traditional merchant accounts, we’re transparent about all fees. Expect processing rates between 2.9% to 4.5% depending on your industry and volume. Monthly fees range from $25-$75, and there may be a setup fee between $100-$300. We provide detailed quotes upfront, and there are no hidden fees or surprise charges. Higher volumes can qualify for better rates.",
        },

    ];

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
        <div className='py-10 md:py-20 px-4 sm:px-6 lg:px-50 min-h-[65vh] md:h-[65vh]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-10 lg:gap-0'>
                {/* Left Column - Text Content */}
                <div className='flex flex-col gap-5 w-full max-w-sm md:max-w-xl lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight sm:leading-snug lg:leading-13.5'>
                        Common <span className='text-[#F29200]'>Questions About</span> High Risk Merchant <span className='text-[#F29200]'>Accounts</span>
                    </h1>
                    <p className='text-base sm:text-lg max-w-sm md:max-w-xl lg:max-w-md mx-auto lg:mx-0'>
                        Find answers to common questions about our crypto wallet, security, and transactions.
                    </p>
                    
                     <Link to={'/faqs'} className='bg-[#F29200] text-center text-white text-md lg:text-lg p-3 w-full max-w-xs mx-auto lg:mx-0 rounded-2xl  mt-2 hover:bg-black cursor-pointer'>View All</Link>
                     
                </div>

                {/* Right Column - FAQ Items */}
                <div className='relative overflow-hidden w-full flex flex-col gap-5'>

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
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="border-b border-slate-200/60 cursor-pointer w-full bg-white/50 backdrop-blur-sm rounded-lg px-4 sm:px-5 lg:px-8 py-3 sm:py-4 lg:py-5 shadow-sm hover:shadow-md transition-shadow duration-300"
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
                                            {faq.question}
                                        </motion.h3>
                                        <motion.div
                                            variants={iconVariants}
                                            whileHover={{ color: "#f59e0b" }}
                                            animate={openIndex === index ? "open" : "closed"}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex-shrink-0 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700"
                                        >
                                            {openIndex === index ? "−" : "+"}
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
                                                {faq.answer}
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
    )
}

export default HRMFAQs