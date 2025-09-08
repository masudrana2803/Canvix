import React from 'react'


const Home = () => {
  return (
    <>
    <section id='Bannerpar'>
    <div className='flex text-white'>
          <div>
          <img className='mt-[64px]' src="/src/Images/bannerPat.png" alt="" />
          </div>
          <div id="banner" className='h-[398px] mt-[100px] ml-[98px] w-[608px]'>
            <div id="bannertxt" className='text-white font-weight:600 text-[64px] mt-[50px]'>
                <h2>Ready to take your </h2>
                <h2 className='text-brandclr'>Business Growth </h2>
                <h2>to the next level?</h2>
            </div>
            <div className='font-dm text-white text-[20px] w-[557px] font-weight:400 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
            </div>
            <button className='w-[248px] text-black bg-white mb-[131px] p-[10px] mt-[32px] rounded-[23px] '>Start your free trial</button>
      <div>
        <h2 className='text-brandclr p-[0px] font-roboto text-[26px] '>Trusted by Leading Brands</h2>
        </div> 
        <div id='brand_images' className='flex p-[8px] gap-[10px] pb-[119px]  '>
          <img src="/src/Images/brand1.png" alt="brand1" />
          <img src="/src/Images/brand2.png" alt="brand2" />
          <img src="/src/Images/brand3.png" alt="brand3" />
          <img src="/src/Images/brand4.png" alt="brand4" />
          </div> 
          </div>
    </div>
    <div className=' w-[850px] h-[850px] absolute top-[100px] rounded-[50%] right-0 border-[#99EDE5] border-2 mt-[80px] m-[173px] '>
      <div className='w-[750px] h-[750px] absolute top-[50%] rounded-[50%] left-[50%] -translate-1/2 border-[#B2F1EB] border-2 '>
    </div>
      <div className='w-[650px] h-[650px] absolute rounded-[50%] border-black border-2 top-[50%] left-[50%] -translate-1/2 '>
      <img src="/src/Images/Ellipse 10.png" alt="" />
    </div>
      </div>    

    </section>


    </>
    
  )
}

export default Home
