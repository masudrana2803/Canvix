import React from 'react'

const CommonProcess = ({content1,content2, content3}) => {
  return (
    <>
      <div className='w-[275px] h-[220px] bg-white text-white'>
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
</div>
    </>
  )
}

export default CommonProcess
