import React from 'react'

function MedicalHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is a <span className='text-[#F29200]'>Medical & Healthcare Business</span> Merchant Account Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    The medical and healthcare industry often falls into the high-risk category, making it challenging to access stable and trustworthy payment solutions. Banks and standard payment processors usually avoid supporting healthcare businesses due to complex billing, insurance claims, recurring payments, and regulatory compliance requirements. Crazy Merchants offers tailored merchant services for medical and healthcare businesses, providing secure payment processing, higher approval rates, and systems built to handle complex healthcare transactions efficiently.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Medical & Healthcare</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we offer merchant accounts tailored for medical and healthcare businesses, ensuring secure, reliable, and high-volume payment processing. Our solutions handle complex billing, recurring payments, and insurance transactions, giving healthcare businesses the stability and flexibility to grow.
                </p>


            </div>

            <img src="Medical/medical.jpg" alt="medical_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default MedicalHighRisk   