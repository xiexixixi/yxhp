import React from 'react'
import './timeline.css'
import { EducationDetail, ExperienceDetail } from './Timeline'
import { styled } from 'styled-components'
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

const getRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
interface color {
  color: string;
}
const ItemTag = styled.span<color>`
  text-align: center;
  
  /* height: 1.5rem; */
  display: inline-block;
  margin: 0.1rem 0.2rem;
  padding: 0.3rem 1rem;
  background-color: ${props => props.color};
  border-radius: 1rem;
`

export const EducationTimelineItem:React.FC<EducationDetail> = (props) => {
  return (
    <li className="timeline-item">
        <div className="timeline-info">
          <span>{props.startDate} - {props.endDate}</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">{props.school}</h3>
            <h4 className='timeline-location'>Dalian, China
            <br/>
            GPA: {props.GPA}&nbsp;&nbsp;&nbsp;&nbsp;{props.ranking==null?'': 'Ranking: '+ props.ranking }
            </h4>
            {/* <h4 className='timeline-location'>GPA: 3.84&nbsp;&nbsp;&nbsp;&nbsp;{props.ranking==null?'': 'Ranking: '+ props.ranking }</h4> */}
            
            <p>Courses: {props.courses?.map((c)=>{
              const color = 'var(--color-primary-variant)'
              return <ItemTag color={color}>{c}</ItemTag>
            })
            } </p>
        </article>
    </li>
  )
}

export const ExperienceTimelineItem:React.FC<ExperienceDetail> = (props) => {
  return (
    <li key={1} className="timeline-item">
        <div className="timeline-info">
            <span>{props.startDate} - {props.endDate}</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">{props.title}</h3>
            <h4 className='timeline-location'>{props.employer} @ {props.location}</h4>
            <p><span>Skills</span>: {props.skills?.map((s)=>{
              const color = 'var(--color-primary-variant)'
              return <ItemTag color={color}>{s}</ItemTag>
            })
            } </p>
        </article>
    </li>
  )
}




export default TimelineItem