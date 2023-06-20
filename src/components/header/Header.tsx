import React from 'react'
import './header.css'
import Resume from './Resume'
// import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yuning Xie</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Resume/>
        <div className="me">
          {/* <img src = {Me} alt="me"></img> */}
        </div>
      </div>
    </header>
  )
}

export default Header