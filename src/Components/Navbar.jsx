import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='lg:w-[fit] mt-[37px] h-[54px] '>
        <div className='flex justify-around text-white'>
        <div>
            <a href="#"><img src="/src/Images/logo.png" alt="" /></a>
        </div>
        <div>
        <ul className='flex gap-[30px] lg:w-[306px] lg:h-[36px] p-[9px] '>
            <a href="#">
            <li>Home</li>
            </a>
            <a href="#">
            <li>About</li>
            </a>
            <a href="#">
            <li>Contact Us</li>
            </a>
        </ul>
        </div>
        <div className=' h-[47px] w-[140px] p-2 rounded-[23px] bg-white text-center text-black'>
            <a href="#">Get in Touch
            </a>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
