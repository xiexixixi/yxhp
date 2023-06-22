import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillWechat} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
      <a href='https://www.linkedin.com/in/xieyuning' target='_blank' rel="noreferrer"><AiFillLinkedin size="2rem"/></a>
      <a href='https://github.com/xiexixixi' target='_blank' rel="noreferrer"><AiFillGithub size="2rem"/></a>
      <a href='#wechat' target='_blank'><AiFillWechat size="2rem"/></a>
    </div>
  )
}

export default HeaderSocials