import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav==='#'?'active':''} onClick={()=>setActiveNav('#')}><AiOutlineHome size='2rem'/></a>
      <a href='#about' className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser size='2rem'/></a>
      <a href='#experience' className={activeNav==='#experience'?'active':''} onClick={()=>setActiveNav('#experience')}><AiOutlineBook size='2rem'/></a>
      <a href='#services' className={activeNav==='#services'?'active':''} onClick={()=>setActiveNav('#services')}><RiServiceLine size='2rem'/></a>
      <a href='#contact' className={activeNav==='#contact'?'active':''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail size='2rem'/></a>
    </nav>
  )
}

export default Nav