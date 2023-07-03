import React from "react";
import './about.css';
import ME from '../../assets/mesenior.jpg'
import { BsBriefcase } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'
const About = () => {
    return (
        <section id='about'>
            {/* <h5>Get To Know</h5> */}
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image"><img src={ME} alt='me'></img></div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <a href="#experience">
                        <article className="about__card">
                            <BsBriefcase className='about_icon' />
                            <h5>Experience</h5>
                            <small>1 year working experience</small>
                        </article>
                        </a>
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
                    I recently graduated with a Master's degree in Computer Science, specializing in full stack development. With a strong foundation in various technologies and a passion for problem-solving, I am eager to make a meaningful impact in the world.
                    </p>
                    <p>
                    My ultimate dream is to become a software architect, leveraging my strong background in software development. With significant experience in software development, including full-stack expertise in front-end, back-end, and DevOps practices, I have established a solid foundation in the field. In addition to my software experience, I have also conducted AI research in natural language processing, exploring cutting-edge techniques and frameworks like PyTorch. Continuously expanding my knowledge in system design and software architecture, I aspire to become a problem solver and leader in the industry.                    </p>
                    {/* <a href="#contact" className="btn btn-primary">Let's talk</a> */}
                </div>
            </div>
        </section>
    )
}

export default About;