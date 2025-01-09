import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='cover'>
      <div className='navbar'>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Menu Links */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li>
            <AnchorLink className='anchorlink' href='#home' offset={50}>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" && <p className='stars'>✧˚ ·.・✧.*</p>}
          </li>
          <li>
            <AnchorLink className='anchorlink' href='#about' offset={50}>
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" && <p className='stars'>✧˚ ·.・✧.*</p>}
          </li>
          <li>
            <AnchorLink className='anchorlink' href='#services' offset={50}>
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" && <p className='stars'>✧˚ ·.・✧.*</p>}
          </li>
          <li>
            <AnchorLink className='anchorlink' href='#work' offset={50}>
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" && <p className='stars'>✧˚ ·.・✧.*</p>}
          </li>
          <li>
            <AnchorLink className='anchorlink' href='#contact' offset={50}>
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" && <p className='stars'>✧˚ ·.・✧.*</p>}
          </li>
        </ul>

        {/* Contact Us Button */}
        <div className='buttons'>
          <div className="nav-connect">
            <AnchorLink className='anchorlink' href='#contact' offset={20}>
              Contact Us
            </AnchorLink>
          </div>

          <div className='logo'>
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
