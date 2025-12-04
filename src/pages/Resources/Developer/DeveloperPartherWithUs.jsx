import React from 'react'
import { CodeXml , Database , Lock , Zap , FileText , DollarSign , GitBranch , SquareCode    } from 'lucide-react';

function DeveloperPartherWithUs({title, description}) {


    const cardsData = [
    {
        title: 'Robust API',
        description: 'Access our comprehensive and well-documented API for seamless integration.',
        icon: <CodeXml   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Scalable Infrastructure',
        description: 'Build on our reliable and scalable payment processing infrastructure.',
        icon: <Database   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Advanced Security',
        description: 'Benefit from our state-of-the-art security measures and compliance standards.',
        icon: <Lock   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Fast Integration',
        description: 'Quickly implement our solutions with easy-to-use SDKs and libraries.',
        icon: <Zap   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Extensive Documentation',
        description: 'Access detailed guides and API references to support your development.',
        icon: <FileText   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Multiple Payment Methods',
        description: 'Integrate a wide range of payment methods to suit diverse customer needs.',
        icon: <DollarSign   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Version Control',
        description: 'Stay up-to-date with our versioned API for smooth transitions and updates.',
        icon: <GitBranch   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
    {
        title: 'Developer Tools',
        description: 'Utilize our suite of developer tools for testing, debugging, and optimization.',
        icon: <SquareCode   className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
    },
]




  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-8 lg:gap-20'>
            
        <div className='flex flex-col items-center gap-6 lg:gap-5'>
            <h1 className='text-4xl sm:text-4xl lg:text-5xl font-black w-full max-w-5xl text-center leading-tight lg:leading-13'>{title}</h1>
            <p className='text-sm sm:text-md text-gray-600 font-medium w-full lg:max-w-3xl text-center px-4 sm:px-0'>
              {description}
            </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 lg:gap-6 px-0 lg:px-20'>

            {
                cardsData.map((data, index)=>(
            <div key={index} className='p-4 py-7 rounded-2xl border-2 border-[#F29200]/40 shadow-md w-full max-w-xs mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'>
              <div className='flex justify-between'>
                    <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                        {data.icon}
                    </div>

              </div>
              <h1 className='font-bold text-lg sm:text-xl'>{data.title}</h1>
              <p className='text-xs font-medium'>{data.description}</p>
              {/* <CircleCheckBig className='w-5 h-5 text-[#F29200] group-hover:text-white' /> */}
            </div>

             ))
            }

        </div>

        </div>


    </div>
  )
}

export default DeveloperPartherWithUs


