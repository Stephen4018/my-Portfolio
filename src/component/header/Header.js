import React from 'react'
import './header.scss';
import CTA from './CTA'
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <header>
      <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Stephen Ohaeri</h1>
    <h5 className='text-light'>Frontend Web Developer</h5>
    
    <CTA />
    
    <SocialMedia />

    <div className='me'>
      <img src="images/stephen2.png" alt="" />
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header