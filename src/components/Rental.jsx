import React from 'react'
import {BsStarFill} from 'react-icons/bs'

const Rental = ({title,image,price}) => {
  return (
    <div className=''>
         <div className='relative'>
        <div className='grad absolute h-full w-full rounded-b-[1.3rem]'>
        </div>
            <div className='flex'>
            {/* Background  */}
            <img src={image} alt=""
            className='object-cover rounded-[1.3rem] sm:max-h-[11rem]
            md:max-h-[14.5rem] w-full'/>
            {/* Title */}
            <div className='absolute
             text-white font-bold bottom-6 
             left-6 text-[20px] flex gap-2 items-center'>
            {title}
            <span>&#x2022;</span>
            <p className='text-[16px] text-slate-200'>₩{price} / 박</p>
            
            </div>
        </div>
    </div>
    {/* Description */}
    <div className='pt-3 flex justify-between items-start'>
        <div className=''>
   <p className='max-w-[17rem] font-semibold
   text-[16px]'>케이프타운, 남아프리카</p>
   <p className='max-w[17rem] text-[16px] -mt-1 text-gray-500'>
    4월 3일~8일
   </p>
   <p className='max-w[17rem] font-semibold text-[16px] mt-1'>
   ₩{price} / 박
   </p>
        </div>
        {/*Right */}
        <div className='flex items-center space-x-1'>
            <BsStarFill/>
            <p className='text-[15px]'>5.0</p>
        </div>
    </div>
</div>
  )
}

export default Rental