import React from 'react'

const CommonProcess = ({content1,content2, content3}) => {
  return (
    <>
    <div className='bg-white text-black w-full max-w-sm md:max-w-md lg:max-w-[275px] p-4 rounded-md'>
  <div className='flex flex-col md:flex-row items-center justify-between gap-4 mb-4'>

    {/* Icon Button */}
    <div>
      <button className='flex justify-center items-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-3xl md:text-4xl bg-black text-white rounded-full hover:bg-white hover:text-black transition duration-300'>
        {content1}
      </button>
    </div>

    {/* Number Heading */}
    <div className='text-center md:text-left'>
      <h2 className='text-[36px] md:text-[50px] font-roboto font-semibold tracking-tight'>
        {content2}
      </h2>
    </div>
  </div>

  {/* Description */}
  <div>
    <h2 className='text-[16px] md:text-[19px] font-dm font-normal tracking-normal'>
      {content3}
    </h2>
  </div>
</div>
      {/* <div className='w-[275px] h-[220px] bg-white text-white'>
<div className='flex justify-between gap-4 p-auto m-auto align-middle '>
  <div className='p-0 m-0'>
    <button>    <button className=' flex justify-center items-center w-[80px] h-[80px] text-4xl text-center  bg-black text-white rounded-[50%]  group-hover:bg-white group-hover:text-black '>{content1}</button>
</button>
  </div>
  <div className='p-0 mb-[30px]'>
    <h2 className='text-[50px] text-black font-roboto font-[600] -tracking-tight align-center m-auto '>{content2}</h2>
  </div>
</div>
<div>
  <h2 className='text-black font-dm font-[400] tracking-normal text-[19px]'>{content3}</h2>
</div>
</div> */}
    </>
  )
}

export default CommonProcess
