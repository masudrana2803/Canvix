import React from 'react'

const Commoncard = ({content1,content2,content3}) => {
  return (
    <>
    <div className='w-[422px] h-[368px] bg-black rounded-[20px] p-[45px] text-white'>
    <button className='w-[80px] h-[80px] text-center bg-white text-black rounded-[50%] p-8 mb-[62px]'>{content1}</button>
    <h1 className='mb-[15px] text-[25px] w-[232px] font-[500] font-roboto '>{content2}</h1>
    <h1 className='text-[15px] w-[232px] font-dm font-[400]'>{content3}</h1>
  </div>
    </>
  )
}

export default Commoncard
