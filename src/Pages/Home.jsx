// import React from 'react'
// import Commonhead from '../Tools/Commonhead'
// import { SlPencil } from "react-icons/sl"
// import { IoIosArrowDroprightCircle } from "react-icons/io";
// import { TfiLightBulb } from "react-icons/tfi";
// import { CiMail } from "react-icons/ci";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { LiaCheckDoubleSolid } from "react-icons/lia";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDropright } from "react-icons/io";
// import Commoncard from '../Tools/Commoncard'
// import Trialbtn from '../Tools/Trialbtn';
// import CommonProcess from '../Tools/CommonProcess';
// import TrialbtnB from '../Tools/TrialbtnB';

// const Home = () => {
//   return (
//     <>
//     <section id='Bannerpart' className='bg-black h-[100vh]'>
//     <div className='flex text-white'>
//           <div>
//           <img className='mt-[64px]' src="/src/Images/bannerPat.png" alt="" />
//           </div>
//           <div id="banner" className='h-[398px] mt-[100px] ml-[98px] w-[608px]'>
//             <div id="bannertxt" className='text-white font-weight:600 text-[64px] mt-[50px]'>
//                 <h2>Ready to take your </h2>
//                 <h2 className='text-brandclr'>Business Growth </h2>
//                 <h2>to the next level?</h2>
//             </div>
//             <div className='font-dm text-white text-[20px] w-[557px] font-weight:400 '>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
//             </div>
//             <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>   
//             <div>
//               <h2 className='text-brandclr p-[0px] font-roboto text-[26px] '>Trusted by Leading Brands</h2>
//             </div> 
//             <div id='brand_images' className='flex p-[5px] ml-[-20px] gap-[10px] pb-[111px]'>
//               <img src="/src/Images/brand1.png" alt="brand1" />
//               <img src="/src/Images/brand2.png" alt="brand2" />
//               <img src="/src/Images/brand3.png" alt="brand3" />
//               <img src="/src/Images/brand4.png" alt="brand4" />
//             </div> 
//           </div>
//     </div>
//     <div className=' w-[800px] h-[800px] relative rounded-[50%] right-[-750px] top-[-500px] border-[#99EDE5] border-2 mt-[80px] ml-[173px] '>
//       <div className='w-[700px] h-[700px] absolute top-[50%] rounded-[50%] left-[50%] -translate-1/2 border-[#B2F1EB] border-2 '>
//     </div>
//       <div className='w-[650px] h-[650px] absolute rounded-[50%] border-black border-2 top-[50%] left-[50%] -translate-1/2 '>
//       <img src="/src/Images/Ellipse 10.png" alt="" />
//     </div>
//       </div>    
//   </section>


// <section id='Services' className='mt-[116px] flex justify-center'>

//   <div className='w-[695px] justify-center'>
//   <div>
//   <Commonhead content1="Our Services"/>
//   </div>
//   <div className='h-[150px] w-[695px] mb-[100px]'>
//   <Commonhead content2="High-impact services for your business"/>
//   </div>
//     </div>

// </section>
// <div className="container">

//     <div className='flex flex-wrap gap-[66px] justify-between p-[260px] pt-0 pb-[93px]'>
//   <Commoncard content1={<SlPencil/>} content2={'Content Marketing '} content3={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}/>
//   <Commoncard content1={<SlPencil/>} content2={'Graphic Design'} content3={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'}/>
//   <Commoncard content1={<SlPencil/>} content2={'Digital Marketing '} content3={"Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"}/>
//   <Commoncard content1={<SlPencil/>} content2={'Web Design'} content3={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'}/>
//   <Commoncard content1={<SlPencil/>} content2={'IT Consulting'} content3={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'}/>
//   <Commoncard content1={<SlPencil/>} content2={'Brand Identity '} content3={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'}/>


//   </div>
// </div>

// <section id='About'className=' pt-[100px] pl-[260px] pr-[260px] bg-black'>

//   <div className='flex gap-14'>
//     <div className='w-[640px]'>
//   <img src="/src/Images/AboutImage1.png" alt="AboutImage1" />
//     </div>
//     <div className='w-[586px] h-[544px] text-white mt-[-10px]'>
//       <div className='flex'>
//           <Commonhead content1="About Us"/>
//       </div>
//         <h2 className='font-roboto font-[600] text-[64px] w-[540px] tracking-wider leading-13 pb-1 '>The core mission behind all our work</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
//         <img src="/src/Images/AboutCounter.png" alt="about" />
//         <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>
//     </div>
//   </div>

// </section>

// <section id='process' className='pt-[107px] pb-[129px]'>

// <div className='w-[619px] m-auto mb-[80px] '>
//   <Commonhead content1={'Process'} content2={"Process that moves things forward"}/>
// </div>
// <div className="container">
//   <div className='flex gap-[92px] flex-wrap justify-between'>
//   <CommonProcess content1={<TfiLightBulb/>} content2={'Ideate'} content3={'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'}/>
//   <CommonProcess content1={<CiMail/>} content2={'Research'} content3={'Research is a critical component of the design process, helping designers understand the problem'}/>
//   <CommonProcess content1={<VscCircuitBoard/>} content2={'Create'} content3={'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'} />
//   <CommonProcess content1={<LiaCheckDoubleSolid/>} content2={'Testing'} content3={'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'}/>
//   </div>
// </div>

// </section>

// <section id='Showcase' className=' relative'>

//     <div className='mb-[87px]'>
//       <Commonhead content2={'Recent Showcase'}/>
//     </div>
//     <div className='absolute top-[140px] right-100'>
//     <TrialbtnB content1={<IoIosArrowDroprightCircle/>} content2={'Start Your Free Trial'}/>
//     </div>
//     <div className="container mb-[103px]">
//     <div id='ShowcaseImage' className='flex justify-between gap-10'>
//     <div className='gap-5'>
//   <div className='w-[664px] w-[450px] mb-[88px] '>
//     <img src="/src/Images/Showcase1.jpg" alt="" />
//     <h2 className='text-[30px] font-roboto font-[600]'>Web UI design</h2>
//     <h2 className='text-[16px] font-dm font-[400] tracking-wide '>Creative  UI design</h2>
//   </div>
//   <div className='w-[664px] w-[450px]'>
//     <img src="/src/Images/Showcase2.jpg" alt="" />
//     <h2 className='text-[30px] font-roboto font-[600]'>UI Design</h2>
//     <h2 className='text-[16px] font-dm font-[400]'>Creative Rebranding for logo</h2>
//   </div>
//     </div>
//       <div className='gap-5 mt-[100px]'>
//   <div className='w-[664px] w-[450px] mb-[88px] '>
//     <img src="/src/Images/Showcase3.jpg" alt="" />
//     <h2 className='text-[30px] font-roboto font-[600]'>To design Digital Strategy</h2>
//     <h2 className='text-[16px] font-dm font-[400]'>Social Media Marketing</h2>
//   </div>
//   <div className='w-[664px] w-[450px]'>
//     <img src="/src/Images/Showcase4.jpg" alt="" />
//     <h2 className='text-[30px] font-roboto font-[600]'>UI Design</h2>
//     <h2 className='text-[16px] font-dm font-[400]'>Creative Rebranding for logo</h2>
//   </div>
//     </div>
//     </div>
//     </div>

// </section>


// <section id='SliderBottom'className='mb-117px' >

//   <div className="container">
      
//         <div className='bg-[#F4F4F4] h-[482px] m-[305px] text-black text-center p-9  '>
//             <div className='w-[150px] h-[150px] flex items-center justify-center m-auto'>
//             <img className='rounded-[50%] mb-7' src="/src/Images/Personimage.png" alt="" />
//             </div>

//             <h2 className='mb-7 text-[25px] font-dm font-[700]'>“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</h2>
//             <h2 className=' text-[20px] font-roboto font-[600] tracking-wide '>Jacqueline Miller</h2>
//             <h2 className='mb-7'>CEO of an eduport</h2>

//               <div className='text-2xl'>
//                 <button><IoIosArrowDropleftCircle/></button>
//                 <button><IoIosArrowDropright/></button>
//               </div>
//         </div>

//   </div>

// </section>


// <section>
  
// </section>



//     </>
    
//   )
// }

// export default Home

 

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
    {/* ========== Banner Section ========== */}
    <section id='Bannerpart' className='bg-black h-auto lg:h-screen overflow-hidden relative pt-24 pb-12 md:pt-32'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center text-white'>
          {/* Left pattern image - hidden on small screens for better layout */}
          <div className='hidden lg:block'>
            <img className='mt-[-60px]' src="/src/Images/bannerPat.png" alt="" />
          </div>

          {/* Banner Text Content */}
          <div id="banner" className='z-10 text-center lg:text-left lg:ml-16 xl:ml-24'>
            <div id="bannertxt" className='text-white font-semibold text-4xl sm:text-5xl lg:text-[64px] leading-tight'>
                <h2>Ready to take your </h2>
                <h2 className='text-brandclr'>Business Growth </h2>
                <h2>to the next level?</h2>
            </div>
            <div className='font-dm text-white text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mt-6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
            </div>
            <div className='mt-8'>
              <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>   
            </div>
            <div className='mt-12'>
              <h2 className='text-brandclr p-0 font-roboto text-2xl'>Trusted by Leading Brands</h2>
            </div> 
            <div id='brand_images' className='flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 mt-4'>
              <img src="/src/Images/brand1.png" alt="brand1" className="h-8 md:h-10" />
              <img src="/src/Images/brand2.png" alt="brand2" className="h-8 md:h-10" />
              <img src="/src/Images/brand3.png" alt="brand3" className="h-8 md:h-10" />
              <img src="/src/Images/brand4.png" alt="brand4" className="h-8 md:h-10" />
            </div> 
          </div>
        </div>
      </div>

      {/* Decorative Circles - Adjusted for responsiveness, hidden on small screens */}
      <div className='hidden md:block absolute w-[800px] h-[800px] rounded-full border-[#99EDE5] border-2 top-1/4 -right-1/2 md:top-1/4 md:-right-1/4 lg:top-[80px] lg:right-[-350px] z-0'>
        <div className='w-[700px] h-[700px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[#B2F1EB] border-2 '>
      </div>
        <div className='w-[650px] h-[650px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-black border-2 '>
        <img src="/src/Images/Ellipse 10.png" alt="" className='object-cover w-full h-full' />
      </div>
        </div>    
    </section>


    {/* ========== Services Section ========== */}
    <section id='Services' className='py-16 md:py-24'>
        <div className="container mx-auto px-4 text-center">
            <div className='max-w-3xl mx-auto mb-12 md:mb-20'>
                <Commonhead content1="Our Services"/>
                <Commonhead content2="High-impact services for your business"/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                <Commoncard content1={<SlPencil/>} content2={'Content Marketing '} content3={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}/>
                <Commoncard content1={<SlPencil/>} content2={'Graphic Design'} content3={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'}/>
                <Commoncard content1={<SlPencil/>} content2={'Digital Marketing '} content3={"Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"}/>
                <Commoncard content1={<SlPencil/>} content2={'Web Design'} content3={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'}/>
                <Commoncard content1={<SlPencil/>} content2={'IT Consulting'} content3={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'}/>
                <Commoncard content1={<SlPencil/>} content2={'Brand Identity '} content3={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'}/>
            </div>
        </div>
    </section>

    {/* ========== About Section ========== */}
    <section id='About'className='py-16 md:py-24 bg-black text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
          <div className='w-full lg:w-1/2'>
            <img src="/src/Images/AboutImage1.png" alt="AboutImage1" className="w-full h-auto rounded-lg" />
          </div>
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <div>
                <Commonhead content1="About Us"/>
            </div>
              <h2 className='font-roboto font-semibold text-4xl md:text-5xl leading-tight mt-4'>The core mission behind all our work</h2>
              <p className='mt-6 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
              <img src="/src/Images/AboutCounter.png" alt="about counter" className='my-8 mx-auto lg:mx-0' />
              <Trialbtn content1={<IoIosArrowDroprightCircle />} content2={"Start Your Free Trial"}/>
          </div>
        </div>
      </div>
    </section>

    {/* ========== Process Section ========== */}
    <section id='process' className='py-16 md:py-24'>
        <div className='container mx-auto px-4 text-center'>
            <div className='max-w-2xl mx-auto mb-12 md:mb-20'>
                <Commonhead content1={'Process'} content2={"Process that moves things forward"}/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <CommonProcess content1={<TfiLightBulb/>} content2={'Ideate'} content3={'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'}/>
                <CommonProcess content1={<CiMail/>} content2={'Research'} content3={'Research is a critical component of the design process, helping designers understand the problem'}/>
                <CommonProcess content1={<VscCircuitBoard/>} content2={'Create'} content3={'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'} />
                <CommonProcess content1={<LiaCheckDoubleSolid/>} content2={'Testing'} content3={'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'}/>
            </div>
        </div>
    </section>

    {/* ========== Showcase Section ========== */}
    <section id='Showcase' className='py-16 md:py-24 relative'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
            <div className='text-center md:text-left'>
                <Commonhead content2={'Recent Showcase'}/>
            </div>
            <div className='mt-6 md:mt-0'>
                <TrialbtnB content1={<IoIosArrowDroprightCircle/>} content2={'See More Work'}/>
            </div>
        </div>

        <div id='ShowcaseImage' className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
          {/* Column 1 */}
          <div className='flex flex-col gap-8 lg:gap-10'>
            <div className='w-full'>
              <img src="/src/Images/Showcase1.jpg" alt="Web UI Design" className='w-full h-auto rounded-lg' />
              <h2 className='text-2xl font-roboto font-semibold mt-4'>Web UI design</h2>
              <p className='text-base font-dm tracking-wide '>Creative UI design</p>
            </div>
            <div className='w-full'>
              <img src="/src/Images/Showcase2.jpg" alt="UI Design" className='w-full h-auto rounded-lg' />
              <h2 className='text-2xl font-roboto font-semibold mt-4'>UI Design</h2>
              <p className='text-base font-dm tracking-wide'>Creative Rebranding for logo</p>
            </div>
          </div>
          {/* Column 2 - with top margin for staggered effect on medium screens and up */}
          <div className='flex flex-col gap-8 lg:gap-10 md:mt-24'>
            <div className='w-full'>
              <img src="/src/Images/Showcase3.jpg" alt="Digital Strategy" className='w-full h-auto rounded-lg' />
              <h2 className='text-2xl font-roboto font-semibold mt-4'>To design Digital Strategy</h2>
              <p className='text-base font-dm tracking-wide'>Social Media Marketing</p>
            </div>
            <div className='w-full'>
              <img src="/src/Images/Showcase4.jpg" alt="UI Design 2" className='w-full h-auto rounded-lg' />
              <h2 className='text-2xl font-roboto font-semibold mt-4'>UI Design</h2>
              <p className='text-base font-dm tracking-wide'>Creative Rebranding for logo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ========== Testimonial Slider Section ========== */}
    <section id='SliderBottom' className='py-16 md:py-24' >
      <div className="container mx-auto px-4">
            <div className='bg-[#F4F4F4] max-w-4xl mx-auto text-black text-center p-8 md:p-12 rounded-lg'>
                <div className='w-24 h-24 md:w-32 md:h-32 mx-auto mb-6'>
                <img className='rounded-full w-full h-full object-cover' src="/src/Images/Personimage.png" alt="Jacqueline Miller" />
                </div>

                <blockquote className='mb-6 text-lg md:text-xl font-dm font-bold'>
                  <p>“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</p>
                </blockquote>
                <h3 className='text-xl font-roboto font-semibold tracking-wide'>Jacqueline Miller</h3>
                <p className='mb-6'>CEO of an eduport</p>

                  <div className='text-3xl md:text-4xl flex justify-center gap-4'>
                    <button className='hover:text-brandclr transition-colors'><IoIosArrowDropleftCircle/></button>
                    <button className='hover:text-brandclr transition-colors'><IoIosArrowDropright/></button>
                  </div>
            </div>
      </div>
    </section>

    </>
    
  )
}

export default Home