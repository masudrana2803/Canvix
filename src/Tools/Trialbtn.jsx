import React from 'react'

const Trialbtn = ({content1, content2}) => {
  return (
    <>
                  <div className='flex w-[248px] text-black bg-white lg:mb-[131px] p-[10px] mt-[32px] rounded-[23px] '>
                  <div className=' text-3xl '>
                    {content1}
                  </div>
                  <div>
                  <button className='text-[20px] font-roboto font-[500]' >{content2}</button>
      
                  </div>
      
                  </div>
    </>
  )
}

export default Trialbtn
