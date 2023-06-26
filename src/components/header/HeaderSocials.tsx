import React, { useContext, useEffect, useRef, useState } from 'react'
import WXQRBlue from '../../assets/wxqr_blue.png'
import WXQROrange from '../../assets/wxqr_orange.png'


import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillWechat } from 'react-icons/ai'
import { ThemeContext } from '../../contexts/ThemeContextProvider'
import { YIN } from '../../themestyle'
import { styled } from 'styled-components'


const HeaderSocials = () => {


  const themecontext = useContext(ThemeContext)
  const thumbnailRef = useRef<HTMLImageElement | null>(null);

  const [isFixed, setIsFixed] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500; // Adjust this value as needed
      const scrollPos = window.scrollY;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom = document.documentElement.scrollHeight - (window.innerHeight + scrollPos);
      // Check if close to the bottom
      if (distanceFromBottom > scrollThreshold)
        setIsFixed(true);
      else
        setIsFixed(false);

      setPrevScrollPos(scrollPos);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  const handleIconHover = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.style.display = 'block';
      if (themecontext.theme['--color-bg'] === YIN['--color-bg'])
        thumbnailRef.current.src = WXQRBlue;
      else
        thumbnailRef.current.src = WXQROrange;
    }
  };

  const handleIconLeave = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.style.display = 'none';
    }
  };
  const handleIconClick = () => {
    navigator.clipboard.writeText('WhateverU_Say').then(() => alert('wechat id has been copied to clipboard'));
    // alert('wechat id has been copied to clip board');
  };

  return (
    <Socials isfixed={String(isFixed)}>
      <div><WXQR ref={thumbnailRef} alt="wxqrcode_blue" /></div>
      <a href='https://www.linkedin.com/in/xieyuning' target='_blank' rel="noreferrer"><AiFillLinkedin size="2rem" /></a>
      <a href='https://github.com/xiexixixi' target='_blank' rel="noreferrer"><AiFillGithub size="2rem" /></a>
      <a onClick={handleIconClick} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}><AiFillWechat size="2rem" /></a>
    </Socials>
  )
}
interface IsFixed {
  isfixed: string
}
const Socials = styled.div<IsFixed>`
  margin-top: 2.5rem;
  position: ${props => props.isfixed === 'true' ? 'fixed' : 'absolute'};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* space between elements */
  gap: 0.8rem;
  left: 5.5rem;
  bottom: 2rem;
  z-index: 2;

  &::before {
    content: '';
    width: 2px;
    height: 10rem;
    background: var(--color-primary);
  }
  &::after {
    content: '';
    width: 2px;
    height: 8rem;
    background: var(--color-primary);
  }

  @media screen and (max-width: 800px){
    display: none;
  }
`

const WXQR = styled.img`
  display: none;
  position: absolute;
  width: 700%;
  height: auto;
  border-radius: 2rem;
  /* right: 2rem; */
  margin-left: 2rem;
  z-index: 3;
`
export default HeaderSocials
