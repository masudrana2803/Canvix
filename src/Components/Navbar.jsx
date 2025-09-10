import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='lg:w-[fit] p-[30px] h-[54px] bg-black pr-[173px] pl-[173px] '>
        <div className='flex justify-around text-white'>
        <div>
            <a href="#"><img src="/src/Images/logo.png" alt="" /></a>
        </div>
        <div>
        <ul className='flex gap-[30px] lg:w-[306px] lg:h-[36px] p-[9px] text-[20px] font-[400] font-dm '>
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

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white px-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <a href="#">
//           <img src="/src/Images/logo.png" alt="Logo" className="h-8" />
//         </a>

//         {/* Hamburger Icon */}
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-8 text-lg font-dm">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>

//         {/* CTA Button */}
//         <div className="hidden lg:block">
//           <a
//             href="#"
//             className="bg-white text-black px-4 py-2 rounded-full font-medium"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden mt-4 space-y-2">
//           <ul className="flex flex-col gap-4 text-lg font-dm">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//           <a
//             href="#"
//             className="block mt-4 bg-white text-black text-center px-4 py-2 rounded-full font-medium"
//           >
//             Get in Touch
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;