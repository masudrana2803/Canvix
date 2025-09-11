import React from 'react'

const Commonhead = ({content1,content2}) => {
  return (
    <>
      {/* <h2 className='text-brandclr text-center font-dm font-[600] text-[30px]'>{content1}</h2>
      <p className='text-black text-center font-roboto text-[60px] font-[600] p-0 m-0 tracking-tight leading-15 ' >{content2}</p> */}
<h2 className='text-brandclr text-center font-dm font-semibold text-[24px] md:text-[30px]'>
  {content1}
</h2>

<p className='text-black text-center font-roboto font-semibold tracking-tight leading-tight text-[36px] md:text-[48px] lg:text-[60px] mt-2'>
  {content2}
</p>
      


    </>
  )
}

export default Commonhead
