import React from 'react'
import {ArrowBigRightDash} from 'lucide-react';
import { Helmet } from 'react-helmet'

function TermsOfServices() {

  return (
    <>
    <Helmet>
      <title>Terms of Service | Crazy Merchants</title>
      <meta 
          name="description" 
          content="Read the Crazy Merchants Terms of Service to understand your rights and responsibilities when using our website and services."
      />
      <meta property="og:title" content="Terms of Service | Crazy Merchants" />
      <meta property="og:description" content="Learn the rules, rights, and responsibilities for using Crazy Merchants' website and services." />
      <meta property="og:type" content="article" />
    </Helmet>

    


    <div className="min-h-screen flex flex-col gap-15 pt-25 lg:pt-30 xl:pt-30 pb-20 px-4 sm:px-6 md:px-8 xl:px-70 bg-[url('/Blogs/blogsbackground.png')] bg-cover bg-no-repeat overflow-hidden text-white">
    <div className='flex flex-col gap-8 sm:gap-12 lg:gap-10'>
                


        {/* Header Section */}
        <div className='flex flex-col gap-10'>
            
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full max-w-5xl">
                Terms of Use
            </h1>
        </div>


        
        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full">
            
            {/* Content 1 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Acceptance of Terms
                </h1>
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    These Terms of Use constitute a legally binding agreement between you and Crazy Merchants, governing your access to and use of our website, crazymerchants.com, including any content, functionality, and services offered on or through the website (collectively referred to as the “Services”).
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    By accessing or using our website, you are accepting and agreeing to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing our Services.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms of Use means that you accept and agree to the changes.
                </p>
            </div>
            
            {/* Content 2 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Use of Services
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Our Services are intended for businesses seeking merchant account services. By using our Services, you represent and warrant that you are a business entity or a representative of a business entity with the authority to enter into this agreement.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    By submitting information through our website forms, you consent to receive marketing communications from Crazy Merchants via email, text messages, and other channels as described in our Privacy Policy. You understand that you can opt-out of these communications at any time through methods outlined in the policy.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You agree to use our Services only for lawful purposes and in accordance with these Terms of Use. Specifically, you agree not to use the Services:
                </p>

                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        In any way that violates any applicable federal, state, local, or international law or regulation
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        To engage in any activity related to illegal goods or services, including but not limited to drugs, stolen goods, weapons, or any other prohibited items
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail,” “chain letter,” “spam,” or any other similar solicitation
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        To impersonate or attempt to impersonate Crazy Merchants, a Crazy Merchants employee, another user, or any other person or entity
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Services, or which, as determined by us, may harm Crazy Merchants or users of the Services or expose them to liability Additionally, you agree not to:
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use of the Services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services are stored, or any server, computer, or database connected to the Services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Attack the Services via a denial-of-service attack or a distributed denial-of-service attack
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Otherwise attempt to interfere with the proper working of the Services
                    </li>
                </ul>

            </div>

            {/* Content 3 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Intellectual Property
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Crazy Merchants, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    These Terms of Use permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:
                </p>
                    
                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Your computer may temporarily store copies of such materials incidental to your accessing and viewing those materials
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        You may store files that are automatically cached by your Web browser for display enhancement purposes
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use and not for further reproduction, publication, or distribution
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        If we provide social media features with certain content, you may take such actions as are enabled by such features
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You must not:
                </p>

                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Modify copies of any materials from the Services
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the Services
                    </li>
                </ul>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Services in breach of the Terms of Use, your right to use the Services will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Services or any content on the Services is transferred to you, and all rights not expressly granted are reserved by Crazy Merchants.
                </p>

            </div>


            {/* Content 4 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                  User Accounts
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms of Use, which may result in immediate termination of your account on our Services.
                </p>
                    
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password, whether your password is with our Services or a third-party service.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>

                 <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar, or obscene.
                </p>


            </div>


            {/* Content 5 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Privacy
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Your use of our Services is also governed by our <a href="/privacy-policy" className='text-blue-400 hover:text-blue-500'>Privacy Policy</a>, which informs users of our data collection practices. By using the Services, you consent to all actions taken by us with respect to your information in compliance with the policy.
                </p>
                    
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    This includes how we treat your personal data and protect your privacy when you use our Services, including how we collect and use your information for marketing purposes, such as sending promotional communications via email and text messages. You acknowledge that by providing your information, you consent to receive such communications, with the right to opt-out as detailed in the policy.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    By using our Services, you agree that Crazy Merchants can use your data in accordance with our privacy practices and applicable privacy regulations including GDPR, CAN-SPAM Act, and CCPA.
                </p>

            </div>


            {/* Content 6 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Disclaimer of Warranties
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
                </p>
                    
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    YOUR USE OF THE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES IS AT YOUR OWN RISK. THE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER Crazy Merchants. NOR ANY PERSON ASSOCIATED WITH Crazy Merchants. MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
                </p>

            </div>

            {/* Content 7 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Limitation of Liability
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL CRAZY MERCHANTS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                </p>
                    
                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>

            </div>

            {/* Content 8 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Indemnification
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You agree to defend, indemnify, and hold harmless Crazy Merchants, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms of Use or your use of the Services, including, but not limited to, your User Contributions, any use of the Services’ content, services, and products other than as expressly authorized in these Terms of Use, or your use of any information obtained from the Services.
                </p>
                    
            </div>

            {/* Content 9 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Modifications to Terms
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
                </p>
                    
            </div>

            {/* Content 10 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                   Governing Law
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    These Terms shall be governed and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services.
                </p>
                    
            </div>

            {/* Content 11 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Termination
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If you wish to terminate your account, you may simply discontinue using the Services. However, if you have an active merchant account or ongoing services with us, please contact our customer support to properly close your account and ensure all outstanding matters are resolved.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>
                    
            </div>

            {/* Content 12 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Assignment
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    You may not assign or transfer these Terms of Use or your rights under these Terms of Use, in whole or in part, by operation of law or otherwise, without our prior written consent. We may assign these Terms of Use in whole or in part at any time to any entity without your notice or consent.
                </p>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    Any attempted assignment by you in violation of this section shall be null and void. These Terms of Use will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.
                </p>

            </div>

            {/* Content 13 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Severability
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If any provision of these Terms of Use is held to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions.
                </p>

            </div>

            {/* Content 14 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Entire Agreement
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and Crazy Merchants. regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.
                </p>

            </div>

            {/* Content 15 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Waiver
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    No waiver by Crazy Merchants. of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Crazy Merchants. to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
                </p>

            </div>

            {/* Content 16 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Headings
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    The section titles in these Terms of Use are for convenience only and have no legal or contractual effect.
                </p>

            </div>

            {/* Content 17 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Acknowledgment
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    BY USING Crazy Merchants. SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTOOD THEM, AND AGREE TO BE BOUND BY THEM. YOU SPECIFICALLY ACKNOWLEDGE AND CONSENT TO RECEIVING MARKETING COMMUNICATIONS AS DESCRIBED IN OUR PRIVACY POLICY. YOU ALSO ACKNOWLEDGE THAT THESE TERMS OF USE, TOGETHER WITH OUR <a href="/privacy-policy" className='text-blue-400 hover:text-blue-500'>PRIVACY POLICY</a>, REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND SUPERSEDE ANY PROPOSAL OR PRIOR AGREEMENT, ORAL OR WRITTEN, AND ANY OTHER COMMUNICATION BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.
                </p>

            </div>

            {/* Content 18 */}
            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <h1 className='opacity-90 text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-[#F29200] py-2 w-fit'>
                    Contact Information
                </h1>

                <p className='text-sm sm:text-md lg:text-lg font-medium'>
                    If you have any questions about these Terms of Use, please contact us at:
                </p>

                <ul className='flex flex-col gap-2 text-sm sm:text-md lg:text-lg font-medium'>
                    <li className='flex items-center gap-2'>
                        <ArrowBigRightDash className='w-3 h-3 shrink-0 text-[#F29200]' strokeWidth={3} />
                        Email: support@crazymerhcants.com
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
                    We strive to respond to all inquiries in a timely manner, typically within 2-3 business days. For urgent matters related to your account or services, please use the emergency contact information provided in your account dashboard.
                </p>

            </div>




        </div>




    </div>
    </div>

    </>
  )
}

export default TermsOfServices
