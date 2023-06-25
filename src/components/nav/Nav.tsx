import React, { useEffect, useState } from 'react'
import './nav.css'
import { YIN, YANG } from '../../constants'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {FaYinYang} from 'react-icons/fa'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [theme, setTheme] = useState(YIN)

  useEffect(()=>{
    Object.entries(theme).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, [theme])

  return (
    <nav>
      <a href='#' className={activeNav==='#'?'active':''} onClick={()=>setActiveNav('#')}><AiOutlineHome className='nav__icon' size='2rem'/></a>
      <a href='#about' className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser className='nav__icon' size='2rem'/></a>
      <a href='#experience' className={activeNav==='#experience'?'active':''} onClick={()=>setActiveNav('#experience')}><AiOutlineBook className='nav__icon' size='2rem'/></a>
      <a href='#services' className={activeNav==='#services'?'active':''} onClick={()=>setActiveNav('#services')}><RiServiceLine className='nav__icon' size='2rem'/></a>
      <a href='#contact' className={activeNav==='#contact'?'active':''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail className='nav__icon' size='2rem'/></a>
      <a onClick={()=>theme === YIN?setTheme(YANG):setTheme(YIN)}><FaYinYang className='theme_icon' size='2rem'/></a>
    </nav>
  )
}

export default Nav