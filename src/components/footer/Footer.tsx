import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'


const Footer = () => {
  return (
    <FooterWrapper>
      <Gradient />
      <FooterLOGO href='#'>LOGO</FooterLOGO>
      <Permalinks>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </Permalinks>
      <FooterSocial>
        <a href='https://facebook.com'><AiFillFacebook size="1.5rem" /></a>
        <a href='https://instagram.com'><AiFillInstagram size="1.5rem" /></a>
        <a href='https://twitter.com'><AiOutlineTwitter size="1.5rem" /></a>
      </FooterSocial>
      <CopyRight className="footer__copyright">
        <small>&copy; 4Celery. All right reserved</small>
      </CopyRight>

    </FooterWrapper>
  )
}

export default Footer;

const Gradient = styled.div`
  width: 100%;
  height: 14rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), var(--color-bg));
`
const FooterWrapper = styled.footer`
  background: var(--color-primary);
  padding-bottom: 3rem;
  text-align: center;
  font-size: 1rem;
  a {
    color: var(--color-bg);
  }
`

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    margin-top: 2rem;
    width: 3rem;
    height: 3rem;
    background: var(--color-bg);
    color: var(--color-white);
    /* padding: 0.8rem; */
  
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.7rem;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      color: var(--color-bg-variant);
      border-color: var(--color-bg);
    }
  }
`
const FooterSocialIconWrapper = styled.a`
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
  background: var(--color-bg);
  color: var(--color-white);
  /* padding: 0.8rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  border: 1px solid transparent;
`

const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
`
const FooterLOGO = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`

const CopyRight = styled.div`
  margin-bottom: 5rem;
  color: var(--color-bg);
`
