import React from 'react'

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

          <div className='border-[#F4F4F4] border-5'>
            
          </div>

        </div>
      </footer>
      



    </>
  )
}

export default Footer
