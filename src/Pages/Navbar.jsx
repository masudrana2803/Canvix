import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header>
        <navbar>
            <div className="logo">
            <img src="../Images/logo.png" alt="Logo" />
            </div>
            <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            </div>
            <div className="button">
            <button>Get in touch</button>
            </div>
        </navbar>
      </header>
    </div>
  )
}

export default Navbar
