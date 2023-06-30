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
                    My ultimate dream is to become a software architect, leveraging my diverse background and expertise. From conducting AI research in natural language processing, I have delved into various domains. Additionally, I possess a solid understanding of full-stack development, including front-end, back-end, and DevOps practices. Continuously expanding my knowledge in system design and software architecture, I aspire to become a problem solver and leader in the field.
                    </p>
                    {/* <a href="#contact" className="btn btn-primary">Let's talk</a> */}
                </div>
            </div>
        </section>
    )
}

export default About;