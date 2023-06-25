import React from 'react'
import './header.css'
import Resume from './Resume'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/me.png'

const Header = (props:any) => {
  return (
    <header>
      <HeaderSocials/>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yuning Xie</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Resume/>
        <div className="me">
          <img src = {me} alt="me"></img>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header