import React from 'react'

const Showcasecard1 = ({content1,content2}) => {
  return (
    <>
    <div className='w-[664px] w-[450px] mb-[88px] '>
            <img src="/src/Images/Showcase1.jpg" alt="" />
            <h2>{content1}</h2>
            <h2>{content2}</h2>
    </div>
    </>
  )
}

export default Showcasecard1
