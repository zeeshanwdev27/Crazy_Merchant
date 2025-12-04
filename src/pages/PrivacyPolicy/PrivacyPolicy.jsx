import React from 'react'
import {ArrowBigRightDash} from 'lucide-react';
import { Helmet } from 'react-helmet'

function PrivacyPolicy() {

  return (
    <>
    <Helmet>
       <title>Privacy Policy | Crazy Merchants</title>
       <meta 
          name="description" 
          content="Read Crazy Merchants' Privacy Policy to learn how we collect, use, and protect your personal information. Transparency and security for all users."
       />
       <meta property="og:title" content="Privacy Policy | Crazy Merchants" />
       <meta property="og:description" content="Learn how Crazy Merchants handles your personal data, ensuring privacy, security, and compliance with industry standards." />
       <meta property="og:type" content="article" />
    </Helmet>
    


    <div className="min-h-screen flex flex-col gap-15 pt-25 lg:pt-30 xl:pt-30 pb-20 px-4 sm:px-6 md:px-8 xl:px-70 bg-[url('/Blogs/blogsbackground.png')] bg-cover bg-no-repeat overflow-hidden text-white">
    <div className='flex flex-col gap-8 sm:gap-12 lg:gap-10'>
                


        {/* Header Section */}
        <div className='flex flex-col gap-10'>
            
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full max-w-5xl">
                Privacy Policy
            </h1>
        </div>


        
        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full">
            
            {/* Content 1 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Introduction
                </h1>
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    At Crazy Merchants, we place the highest priority on protecting your privacy and ensuring the security of the limited information we collect. We understand that trust is the cornerstone of any business relationship, especially when it comes to connecting merchants with payment processing services.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    This comprehensive Privacy Policy is designed to provide you with a clear and detailed understanding of our practices regarding the collection, use, protection, and sharing of the specific information we gather when you use our website and submit our application form for merchant account services (collectively referred to as our “Services”).
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    When you submit information through our website forms, you provide explicit consent for Crazy Merchants to collect and use your information as described in this policy, including consent to receive marketing communications via email, text messages, and other channels. This consent is in compliance with applicable privacy regulations including GDPR, CAN-SPAM Act, and CCPA.
                </p>
                 <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We strongly encourage you to read this policy carefully to gain a full understanding of how we handle your information. By accessing or using our Services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy.
                </p>
                
            </div>
            
            {/* Content 2 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Information We Collect
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    In our commitment to data minimization and privacy protection, we collect only the essential information necessary to initiate the process of connecting you with appropriate merchant service providers. Specifically, through our application form, we collect the following four pieces of information:
                </p>

                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Business Name: This helps us understand the identity of the business seeking merchant services.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Business Owner Name: We collect this to personalize our communications and to provide to potential merchant service providers.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Business Owner Phone Number: This allows us and potential service providers to contact you directly regarding your application.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Business Owner Email Address: We use this for digital communications about your application and potential services.
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    It’s important to note that we do not collect any additional personal or financial information through our website or application form. We do not ask for or store sensitive data such as social security numbers, bank account details, or credit card information.
                </p>

            </div>

            {/* Content 3 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Information Collected Automatically
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    While we do not intentionally collect additional personal information, our website, like most others, automatically collects certain non-personal information about your visit. This may include:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        The type of browser you use
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        The time and date of your visit
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        The pages you visited on our site
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        This information is collected using cookies and similar technologies, which we’ll discuss further in Section 8 of this policy.
                    </li>
                </ul>
            </div>


            {/* Content 4 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   How We Use Your Information
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We use the information we collect for various purposes related to our services and business operations. Specifically, we use your information for:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Processing your initial application inquiry
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Communicating about your application and our services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Connecting you with appropriate merchant service providers Improving our Services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Marketing our services to you and sending promotional communications
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Analyzing usage patterns to enhance user experience
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    It’s important to note that we use your information for marketing purposes. When you submit information through our website forms, we may send you:
                </p>


                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Email newsletters and promotional communications
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Text messages with updates and special offers
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Information about our services and merchant solutions
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Targeted marketing based on your business type and interests
                    </li>
                </ul>


                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    While we do engage in marketing activities using this data, we do not sell or rent your information to third parties for their marketing purposes. Our marketing communications are solely related to Crazy Merchant services and those of our directly affiliated merchant service providers. You Have the right to opt-out of receiving marketing communications from us at any time. Each marketing email includes an unsubscribe link at the bottom. For text messages, you can reply STOP to opt out. You can also contact us directly using the information provided in Section 12 of this policy to manage your communication preferences or opt out of all marketing communications.
                </p>


            </div>


            {/* Content 5 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Sharing of Your Information
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We share your information with third-party merchant service providers to facilitate your application for merchant account services. These providers use this information to:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Assess your initial eligibility for their services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Contact you directly to complete their full application process
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Provide you with information about their specific offerings
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We do not sell your personal information to any third parties.
                </p>

            </div>


            {/* Content 6 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Your Rights
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You have several rights regarding your information, which we are committed to upholding:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Access: You can request access to the personal information we hold about you.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Correction: You can ask us to correct or update any inaccurate information.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Erasure: You can request that we delete your personal information from our systems.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Restrict Processing: You can ask us to restrict the processing of your personal information.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Object: You can object to our processing of your personal information.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Right to Opt-out: You can choose to opt-out of marketing communications at any time through multiple channels:
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Click the unsubscribe link in any marketing email
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Reply STOP to any marketing text message
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Email support@crazymerchants.com with your opt-out request
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Call us at 888-651-9042 to manage your preferences
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    To exercise any of these rights or manage your communication preferences, please contact us using the information provided in Section 12. We will process your request within a reasonable timeframe and in accordance with applicable privacy regulations including GDPR, CAN-SPAM Act, and CCPA.
                </p>

            </div>


            {/* Content 7 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Data Retention
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Typically, we retain the four pieces of information you provide through our application form for a period of one year after your initial inquiry.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    After this period, if you haven’t engaged in any further interaction with us, we will securely delete or anonymize your information.
                </p>
                    
            </div>

            {/* Content 8 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Security
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We implement appropriate security measures to protect your information, including:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Encryption of data during transmission
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Secure servers with restricted access
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Regular security audits
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Employee training on privacy and security best practices
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>

            </div>

            {/* Content 9*/}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Cookies and Similar Technologies
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We use the following types of cookies:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Essential Cookies: These are necessary for the website to function properly.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Analytical/Performance Cookies: These help us improve the way our website works.
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Functionality Cookies: These are used to recognize you when you return to our website.
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.
                </p>

            </div>

            {/* Content 10*/}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Third-Party Links
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites. Please review the privacy policy of any website you visit via a link from our website.
                </p>

            </div>

            {/* Content 11*/}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Children's Privacy
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Our Services are not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.
                </p>

            </div>

            {/* Content 12*/}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Changes to This Privacy Policy
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes to this Privacy Policy, we will revise the “Updated Date” at the top of this Privacy Policy.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We encourage you to review this Privacy Policy periodically to stay informed about our information practices and the ways you can help protect your privacy.
                </p>
            </div>

            {/* Content 13*/}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Contact Us
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If you have any questions about this Privacy Policy, or if you would like to exercise any of your data protection rights, please don’t hesitate to contact us at:
                </p>

                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Email: support@crazymerchants.com
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Address: TX USA
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Phone: 888-651-9042
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We will strive to respond to your inquiries and requests in a timely manner.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not access or use our Services.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Thank you for trusting Crazy Merchants with your information. We are committed to protecting your privacy and providing you with a secure and efficient process for connecting with merchant account services.
                </p>
            </div>



        </div>




    </div>
    </div>

    </>
  )
}

export default PrivacyPolicy
