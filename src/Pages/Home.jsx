import React from 'react'
import Commonhead from '../Tools/Commonhead'
import { SlPencil } from "react-icons/sl"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TfiLightBulb } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { VscCircuitBoard } from "react-icons/vsc";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Commoncard from '../Tools/Commoncard'
import Trialbtn from '../Tools/Trialbtn';
import CommonProcess from '../Tools/CommonProcess';
import TrialbtnB from '../Tools/TrialbtnB';

const Home = () => {
  return (
    <>
    {/* Banner part */}
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
            <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>   
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

{/* Service part */}

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

    <div className='flex flex-wrap gap-[66px] justify-between p-[260px] pt-0 pb-[93px]'>
  <Commoncard content1={<SlPencil/>} content2={'Content Marketing '} content3={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}/>
  <Commoncard content1={<SlPencil/>} content2={'Graphic Design'} content3={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'}/>
  <Commoncard content1={<SlPencil/>} content2={'Digital Marketing '} content3={"Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"}/>
  <Commoncard content1={<SlPencil/>} content2={'Web Design'} content3={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'}/>
  <Commoncard content1={<SlPencil/>} content2={'IT Consulting'} content3={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'}/>
  <Commoncard content1={<SlPencil/>} content2={'Brand Identity '} content3={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'}/>


  </div>
</div>

<section id='About'className=' pt-[100px] pl-[260px] pr-[260px] bg-black'>

  <div className='flex gap-14'>
    <div className='w-[640px]'>
  <img src="/src/Images/AboutImage1.png" alt="AboutImage1" />
    </div>
    <div className='w-[586px] h-[544px] text-white mt-[-10px]'>
      <div className='flex'>
          <Commonhead content1="About Us"/>
      </div>
        <h2 className='font-roboto font-[600] text-[64px] w-[540px] tracking-wider leading-13 pb-1 '>The core mission behind all our work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
        <img src="/src/Images/AboutCounter.png" alt="about" />
        <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>
    </div>
  </div>

</section>

{/* Process part */}

<section id='process' className='pt-[107px] pb-[129px]'>

<div className='w-[619px] m-auto mb-[80px] '>
  <Commonhead content1={'Process'} content2={"Process that moves things forward"}/>
</div>
<div className="container">
  <div className='flex gap-[92px] flex-wrap justify-between'>
  <CommonProcess content1={<TfiLightBulb/>} content2={'Ideate'} content3={'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'}/>
  <CommonProcess content1={<CiMail/>} content2={'Research'} content3={'Research is a critical component of the design process, helping designers understand the problem'}/>
  <CommonProcess content1={<VscCircuitBoard/>} content2={'Create'} content3={'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'} />
  <CommonProcess content1={<LiaCheckDoubleSolid/>} content2={'Testing'} content3={'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'}/>
  </div>
</div>

</section>

{/* Showcase part */}


<section id='Showcase' className=' relative'>

    <div className='mb-[87px]'>
      <Commonhead content2={'Recent Showcase'}/>
    </div>
    <div className='absolute top-[140px] right-100'>
    <TrialbtnB content1={<IoIosArrowDroprightCircle/>} content2={'Start Your Free Trial'}/>
    </div>
    <div className="container mb-[103px]">
    <div id='ShowcaseImage' className='flex justify-between gap-10 flex-wrap'>
    <div className='gap-5'>
  <div className='lg:w-[664px] w-[450px] mb-[88px] '>
    <img src="/src/Images/Showcase1.jpg" alt="" />
    <h2 className='text-[30px] font-roboto font-[600]'>Web UI design</h2>
    <h2 className='text-[16px] font-dm font-[400] tracking-wide '>Creative  UI design</h2>
  </div>
  <div className='lg:w-[664px] w-[450px]'>
    <img src="/src/Images/Showcase2.jpg" alt="" />
    <h2 className='text-[30px] font-roboto font-[600]'>UI Design</h2>
    <h2 className='text-[16px] font-dm font-[400]'>Creative Rebranding for logo</h2>
  </div>
    </div>
      <div className='gap-5 mt-[100px]'>
  <div className='w-[664px] w-[450px] mb-[88px] '>
    <img src="/src/Images/Showcase3.jpg" alt="" />
    <h2 className='text-[30px] font-roboto font-[600]'>To design Digital Strategy</h2>
    <h2 className='text-[16px] font-dm font-[400]'>Social Media Marketing</h2>
  </div>
  <div className='w-[664px] w-[450px]'>
    <img src="/src/Images/Showcase4.jpg" alt="" />
    <h2 className='text-[30px] font-roboto font-[600]'>UI Design</h2>
    <h2 className='text-[16px] font-dm font-[400]'>Creative Rebranding for logo</h2>
  </div>
    </div>
    </div>
    </div>

</section>


{/* Slider part */}

<section id='SliderBottom'className='mb-117px' >

  <div className="container">
      
        <div className='bg-[#F4F4F4] h-[482px] m-[305px] text-black text-center p-9  '>
            <div className='w-[150px] h-[150px] flex items-center justify-center m-auto'>
            <img className='rounded-[50%] mb-7' src="/src/Images/Personimage.png" alt="" />
            </div>

            <h2 className='mb-7 text-[25px] font-dm font-[700]'>“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</h2>
            <h2 className=' text-[20px] font-roboto font-[600] tracking-wide '>Jacqueline Miller</h2>
            <h2 className='mb-7'>CEO of an eduport</h2>

              <div className='text-2xl'>
                <button><IoIosArrowDropleftCircle/></button>
                <button><IoIosArrowDropright/></button>
              </div>
        </div>

  </div>

</section>



    </>
    
  )
}

export default Home

 