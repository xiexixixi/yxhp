import React from "react";
import './about.css';
import ME from '../../assets/mesenior.jpg'
import { BsBriefcase } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image"><img src={ME} alt='About Image'></img></div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsBriefcase className='about_icon' />
                            <h5>Experience</h5>
                            <small>1 year working experience</small>
                        </article>
                        <article className="about__card">
                            <BiNotepad className='about_icon' />
                            <h5>Notes</h5>
                            <small>Learn until the final breath</small>
                        </article>
                        <article className="about__card">
                            <FaLaptopCode className='about_icon' />
                            <h5>Project</h5>
                            <small>1 year working</small>
                        </article>
                    </div>
                    <p>
                        Hello world, Hello worldHello worldHello worldHello worldHello worldHello world
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;