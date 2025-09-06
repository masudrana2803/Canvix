import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
            <a href="#"><img src="/src/Images/logo.png" alt="" /></a>
        </div>
        <div>
        <ul>
            <a href="#">
            <li>aHome</li>
            </a>
            <a href="#">
            <li>About</li>
            </a>
            <a href="#">
            <li>Contact Us</li>
            </a>
        </ul>
        </div>
        <div>
            <a href="#">
            <button>Get in Touch</button>
            </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
