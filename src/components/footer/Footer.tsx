import React from 'react'
import './footer.css'
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>LOGO</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><AiFillFacebook size="1.5rem"/></a>
        <a href='https://instagram.com'><AiFillInstagram size="1.5rem"/></a>
        <a href='https://twitter.com'><AiOutlineTwitter size="1.5rem"/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 4Celery. All right reserved</small>
      </div>

    </footer>
  )
}

export default Footer