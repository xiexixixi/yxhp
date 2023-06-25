import React, { useRef } from 'react'
import './headersocials.css'
import WXQRBlue from '../../assets/wxqr_blue.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillWechat} from 'react-icons/ai'

const HeaderSocials = () => {
  const thumbnailRef = useRef<HTMLImageElement | null>(null);


  const handleIconHover = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.style.display = 'block';
    }
  };

  const handleIconLeave = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.style.display = 'none';
    }
  };
  const handleIconClick = () => {
    navigator.clipboard.writeText('WhateverU_Say').then(()=>alert('wechat id has been copied to clipboard'));
    // alert('wechat id has been copied to clip board');
  };
  return (
    <div className='header__socials'> 
      <div><img ref={thumbnailRef} className='wxqr' src={WXQRBlue} alt="wxqrcode_blue"/></div>
      <a href='https://www.linkedin.com/in/xieyuning' target='_blank' rel="noreferrer"><AiFillLinkedin size="2rem"/></a>
      <a href='https://github.com/xiexixixi' target='_blank' rel="noreferrer"><AiFillGithub size="2rem"/></a>
      <a onClick={handleIconClick} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}><AiFillWechat size="2rem"/></a>
    </div>
  )
}

export default HeaderSocials