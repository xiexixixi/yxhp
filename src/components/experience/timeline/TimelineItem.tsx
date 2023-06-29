import React from 'react'
import './timeline.css'
// Configured DNS and CDN using Cloudflare to optimize website performance and enhance global accessibility
// Deployed and managed a website on Azure virtual machines, utilizing load balancers to ensure high availability
// Bolstered website security by installing an SSL certificate, transitioning the site to HTTPs for secure data transmission
// Constructed a CI/CD pipeline using Jenkins and Git webhooks, streamlining development and deployment processes
// Developed and maintained the website using PHP, HTML, JavaScript, CSS, and MySQL, ensuring smooth functionality and user experience


const TimelineItem:React.FC = () => {
  return (
    <li key={1} className="timeline-item">
        <div className="timeline-info">
            <span>April 02, 2016 - April 03, 2016</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">Software Development Engineer</h3>
            <h4>Neusoft</h4>
            <h4>Skills: </h4>
            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                eu pede mollis pretium. Pellentesque ut neque. </p>
        </article>
    </li>
  )
}


export const EducationTimelineItem:React.FC = () => {
  return (
    <li key={1} className="timeline-item">
        <div className="timeline-info">
            <span>April 02, 2016 - April 03, 2016</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">Dalian University of Technology</h3>
            <h4>Dalian, China</h4>
            <h4>GPA: 3.84</h4>
            <h4>Course</h4>
            <p>C/C++, Python </p>
        </article>
    </li>
  )
}

export const ExperienceTimelineItem:React.FC = () => {
  return (
    <li key={1} className="timeline-item">
        <div className="timeline-info">
            <span>April 02, 2016 - April 03, 2016</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">Software Development Engineer</h3>
            <h4>Neusoft</h4>
            <h4>Skills</h4>
            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                eu pede mollis pretium. Pellentesque ut neque. </p>
        </article>
    </li>
  )
}



export default TimelineItem