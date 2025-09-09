import React from 'react'
import Commonhead from '../Tools/Commonhead'
import { SlPencil } from "react-icons/sl"
import Commoncard from '../Tools/Commoncard'

const Home = () => {
  return (
    <>
    <section id='Bannerpart' className='bg-black h-[100vh]'>
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
        <div id='brand_images' className='flex p-[5px] ml-[-20px] gap-[10px] pb-[111px]'>
          <img src="/src/Images/brand1.png" alt="brand1" />
          <img src="/src/Images/brand2.png" alt="brand2" />
          <img src="/src/Images/brand3.png" alt="brand3" />
          <img src="/src/Images/brand4.png" alt="brand4" />
          </div> 
          </div>
    </div>
    <div className=' w-[800px] h-[800px] relative rounded-[50%] right-[-750px] top-[-500px] border-[#99EDE5] border-2 mt-[80px] ml-[173px] '>
      <div className='w-[700px] h-[700px] absolute top-[50%] rounded-[50%] left-[50%] -translate-1/2 border-[#B2F1EB] border-2 '>
    </div>
      <div className='w-[650px] h-[650px] absolute rounded-[50%] border-black border-2 top-[50%] left-[50%] -translate-1/2 '>
      <img src="/src/Images/Ellipse 10.png" alt="" />
    </div>
      </div>    
  </section>


<section id='Services' className='mt-[116px] flex justify-center'>
  <div className='w-[695px] justify-center'>
  <div>
  <Commonhead content1="Our Services"/>
  </div>
  <div className='h-[150px] w-[695px] mb-[100px]'>
  <Commonhead content2="High-impact services for your business"/>
  </div>
    </div>

</section>
<div className="container">

  <div className='flex flex-wrap gap-[66px] justify-between p-[260px] pt-0 pb-0'>
<Commoncard content1={<SlPencil/>} content2={'Content Marketing '} content3={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}/>
<Commoncard/>
<Commoncard/>
<Commoncard/>
<Commoncard/>
<Commoncard/>


  </div>
</div>



    </>
    
  )
}

export default Home
