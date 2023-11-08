import React from 'react';
import './Navbar.css';
import logo from './Enigma.svg';
import twitter from './twitter-logo.svg';
import instagram from './instagram-logo.svg';
import youtube from './youtube-logo.svg'; // Make sure the correct file is imported for YouTube
import facebook from './facebook-logo.svg';
import About from '../About/About';
import Landing from '../landing/Landing';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} width={200} alt="enigma logo" />
      </div>
      <div className='home'>
        Home
      </div>
      <div className='about' >
        About
      </div>
      <div className='portfolio'>
        PORTFOLIO
      </div>
      <div className='services'>
        Services
      </div>
      <div className='pages'>
        Pages
      </div>
      <div className='contact'>
        Contact
      </div>
      <div className='icons'>
        <img src={facebook} color width={30} alt="facebook-logo" />
        <img src={twitter} width={30} alt="twitter-logo" />
        <img src={instagram} width={30} alt="instagram-logo" />
        <img src={youtube} width={30} alt="youtube-logo" />
      </div>
    </div>
  );
}
