import React from 'react'

const Commoncard = ({content1,content2,content3}) => {
  return (
    <>
    <div className=' w-[300px] lg:w-[422px] h-[368px] bg-[#F4F4F4] rounded-[20px] p-[45px] text-black group hover:bg-black hover:text-white '>
    <button className='  w-[80px] h-[80px] text-center  bg-black text-white rounded-[50%] p-8 mb-[62px]  group-hover:bg-white group-hover:text-black '>{content1}</button>
    <h1 className='mb-[15px] text-[25px] w-[232px] font-[500] font-roboto '>{content2}</h1>
    <h1 className='text-[15px] w-[232px] font-dm font-[400]'>{content3}</h1>
  </div>
    </>
  )
}

export default Commoncard
