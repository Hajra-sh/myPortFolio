import React from 'react';
import './Header.css';
import profile from './profile1.jpg';
import TypingEffect from 'react-typing-effect'; // Import TypingEffect

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="image-wrapper">
        <img src={profile} alt="Profile" />
      </div>
      <h1>
        <span >Im Hajra Shahbaz </span>
        <TypingEffect
          text={['Lets Build!', '💻 MERN Stack ! 😎']}
          speed={150}
          eraseDelay={1000}
          typingDelay={500}
          className='type'
        />
      </h1>
      <p>
        I'm a MERN stack developer with some practice in building fast, secure, and scalable web applications. I'm skilled in MongoDB, Express.js, React, and Node.js, and I love creating user-friendly interfaces.
      </p>
      <div className="header-action">
        <div className="header-connect">
          <a target='__blank' href="https://github.com/Hajra-sh" className="anchorlink" >Git Hub</a>
        </div>
        <div className="header-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Header;
