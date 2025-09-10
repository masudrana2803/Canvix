// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { TiSocialLinkedinCircular } from "react-icons/ti";

// const Footer = () => {
//   return (
//     <>
//       <footer className='bg-black'>
//         <div className="container">

//         <div id='FooterDiv' className='flex justify-around flex gap-[105px]  text-white pt-[100px] pl-[100px] pr-[100px] pb-[100px]'>
//         <div id='logoSlogan' className='w-[357px]'>
//           <img src="/src/Images/logo.png" alt="logo" />
//           <h2 className='text-[18px] font-dm font-[400] tracking-wider mt-[24px] '>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</h2>
//         </div>
//         <div id='Pages'>
//           <h2 className='text-[20px] font-roboto font-[600] mb-6'>Pages</h2>
//           <ul className=' gap-4 flex flex-col text-[16px] font-[400] font-dm'>
//             <li>Home</li>
//             <li>Home 2</li>
//             <li>About</li>
//             <li>Contact Us</li>
//             <li>Portfolio</li>
//             <li>Portfolio Sigle</li>
//           </ul>
//         </div>
//         <div id='Utility Pages '>
//           <h2 className='text-[20px] font-roboto font-[600] mb-6'>Utility Pages</h2>
//           <ul className=' gap-4 flex flex-col text-[16px] font-[400] font-dm'>
//             <li>Style Guide </li>
//             <li>Instruction</li>
//             <li>License</li>
//             <li>Changelog</li>
//             <li>Error  404 </li>
//             <li>Password Protected </li>
//           </ul>
//         </div>
//         <div id='Subscribe'>
//                     <h2 className='text-[20px] font-roboto font-[600] mb-6'>Subscribe</h2>
//                     <div className='bg-white rounded-[50px] pr-2'>
//                     <input type="email"placeholder='Enter your email' className=' pl-5 text-2xl p-5 text-black'/> 
//                     <button className='bg-[#0C0C0CE5] pl-4 pr-4 text-2xl p-3 rounded-[50px]'>Subscribe</button>
//                     </div>
//         </div>
//         </div>

//           <div className='bg-[#F4F4F4] h-[2px] mb-8 '>
//           </div>
//               <div id='FooterLast' className='flex justify-around flex gap-[105px]  text-white pt-[29px] pl-[100px] pr-[100px] pb-[100px]'>
//               <div>
//                 <h2 className='text-[20px] font-roboto font-[600]'>Copyright by</h2>
//                 <p className='text-[16px] font-dm font-[400] '>Designed by Iconstica.com</p>
//               </div>
//               <div>
//                 <h2 className='text-[20px] font-roboto font-[600]'>Contact us</h2>
//                 <p className='text-[16px] font-dm font-[400]'>+0 12 457 4578</p>
//               </div>
//               <div>
//                 <h2 className='text-[20px] font-roboto font-[600]'>Address</h2>
//                 <p>119 Tanglewood Lane Gulfport, MS 39503</p>
//               </div>
//               <div className='flex justify-between items-center text-3xl gap-4'>
//                 <FaFacebook/>
//                 <FaInstagramSquare/>
//                 <TiSocialLinkedinCircular/>
//               </div>

//               </div>
//         </div>
//       </footer>
      



//     </>
//   )
// }

// export default Footer


import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white'>
        <div className="container mx-auto px-6 lg:px-20">

          {/* Top Footer */}
          <div 
            id='FooterDiv' 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 pb-12'
          >
            {/* Logo + Slogan */}
            <div id='logoSlogan'>
              <img src="/src/Images/logo.png" alt="logo" className='w-40 sm:w-48' />
              <h2 className='text-sm sm:text-base mt-4 leading-relaxed'>
                We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.
              </h2>
            </div>

            {/* Pages */}
            <div id='Pages'>
              <h2 className='text-lg font-roboto font-semibold mb-4'>Pages</h2>
              <ul className='flex flex-col gap-2 text-sm sm:text-base'>
                <li>Home</li>
                <li>Home 2</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Portfolio</li>
                <li>Portfolio Single</li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div id='UtilityPages'>
              <h2 className='text-lg font-roboto font-semibold mb-4'>Utility Pages</h2>
              <ul className='flex flex-col gap-2 text-sm sm:text-base'>
                <li>Style Guide</li>
                <li>Instruction</li>
                <li>License</li>
                <li>Changelog</li>
                <li>Error 404</li>
                <li>Password Protected</li>
              </ul>
            </div>

            {/* Subscribe */}
            <div id='Subscribe'>
              <h2 className='text-lg font-roboto font-semibold mb-4'>Subscribe</h2>
              <div className='bg-white rounded-full flex items-center overflow-hidden'>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='flex-1 px-4 py-2 text-sm sm:text-base text-black outline-none'
                /> 
                <button className='bg-[#0C0C0CE5] text-white text-sm sm:text-base px-4 py-2 whitespace-nowrap'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='bg-[#F4F4F4] h-[2px] mb-8'></div>

          {/* Bottom Footer */}
          <div 
            id='FooterLast' 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left pb-10'
          >
            <div>
              <h2 className='text-base sm:text-lg font-roboto font-semibold'>Copyright by</h2>
              <p className='text-sm sm:text-base font-dm'>Designed by Iconstica.com</p>
            </div>
            <div>
              <h2 className='text-base sm:text-lg font-roboto font-semibold'>Contact us</h2>
              <p className='text-sm sm:text-base font-dm'>+0 12 457 4578</p>
            </div>
            <div>
              <h2 className='text-base sm:text-lg font-roboto font-semibold'>Address</h2>
              <p className='text-sm sm:text-base font-dm'>119 Tanglewood Lane Gulfport, MS 39503</p>
            </div>
            <div className='flex justify-center sm:justify-end items-center text-2xl gap-4'>
              <FaFacebook/>
              <FaInstagramSquare/>
              <TiSocialLinkedinCircular/>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
