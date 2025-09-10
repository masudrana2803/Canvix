import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className='bg-black'>
        <div className="container">

        <div id='FooterDiv' className='flex justify-around flex gap-[105px]  text-white pt-[100px] pl-[100px] pr-[100px] pb-[100px]'>
        <div id='logoSlogan' className='w-[357px]'>
          <img src="/src/Images/logo.png" alt="logo" />
          <h2 className='text-[18px] font-dm font-[400] tracking-wider mt-[24px] '>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</h2>
        </div>
        <div id='Pages'>
          <h2 className='text-[20px] font-roboto font-[600] mb-6'>Pages</h2>
          <ul className=' gap-4 flex flex-col text-[16px] font-[400] font-dm'>
            <li>Home</li>
            <li>Home 2</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Portfolio</li>
            <li>Portfolio Sigle</li>
          </ul>
        </div>
        <div id='Utility Pages '>
          <h2 className='text-[20px] font-roboto font-[600] mb-6'>Utility Pages</h2>
          <ul className=' gap-4 flex flex-col text-[16px] font-[400] font-dm'>
            <li>Style Guide </li>
            <li>Instruction</li>
            <li>License</li>
            <li>Changelog</li>
            <li>Error  404 </li>
            <li>Password Protected </li>
          </ul>
        </div>
        <div id='Subscribe'>
                    <h2 className='text-[20px] font-roboto font-[600] mb-6'>Subscribe</h2>
                    <div className='bg-white rounded-[50px] pr-2'>
                    <input type="email"placeholder='Enter your email' className=' pl-5 text-2xl p-5 text-black'/> 
                    <button className='bg-[#0C0C0CE5] pl-4 pr-4 text-2xl p-3 rounded-[50px]'>Subscribe</button>
                    </div>
        </div>
        </div>

          <div className='bg-[#F4F4F4] h-[2px] mb-8 '>
          </div>
              <div id='FooterLast' className='flex justify-around flex gap-[105px]  text-white pt-[29px] pl-[100px] pr-[100px] pb-[100px]'>
              <div>
                <h2 className='text-[20px] font-roboto font-[600]'>Copyright by</h2>
                <p className='text-[16px] font-dm font-[400] '>Designed by Iconstica.com</p>
              </div>
              <div>
                <h2 className='text-[20px] font-roboto font-[600]'>Contact us</h2>
                <p className='text-[16px] font-dm font-[400]'>+0 12 457 4578</p>
              </div>
              <div>
                <h2 className='text-[20px] font-roboto font-[600]'>Address</h2>
                <p>119 Tanglewood Lane Gulfport, MS 39503</p>
              </div>
              <div className='flex justify-between items-center text-3xl gap-4'>
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
