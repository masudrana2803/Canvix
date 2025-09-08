import React from 'react'


const Home = () => {
  return (
    <>
    <section id='Bannerpar' className='bg-black'>
    <div className='flex'>
          <div>
          <img className='mt-[64px]' src="/src/Images/bannerPat.png" alt="" />
          </div>
          <div id="banner" className='h-[398px] mt-[100px] ml-[98px] w-[608px]'>
            <div id="bannertxt" className='text-white font-weight:600 text-[64px]'>
                <h2>Ready to take your </h2>
                <h2 className='text-brandclr'>Business Growth </h2>
                <h2>to the next level?</h2>
            </div>
            <div className='txt-dm text-white text-[20px] w-[557px] font-weight:400 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
            </div>
          </div>
    </div>
    <div className=' w-[400px] h-[400px] bg-red-200 absolute top-[100px] right-0'>
      <div className='w-[200px] h-[200px] bg-red-400 absolute top-[50%] left-[50%] translate:-50% -50% ' ></div>      
    </div>
    </section>


    </>
    
  )
}

export default Home
