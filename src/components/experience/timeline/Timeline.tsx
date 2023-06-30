import React from 'react'
import './timeline.css'
import { styled } from 'styled-components'
import TimelineItem, { EducationTimelineItem, ExperienceTimelineItem } from './TimelineItem'

const TimelineWrapper = styled.div`
    width: var(--container-width-lg);
    margin: 0 auto;
    display: flex;
    justify-content: center;

    /* @media screen and (max-width: 1024px) {
        width: var(--container-width-md);
    }
    @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
    } */
`
interface TimelineType {
    isEducation: boolean;
}

export interface ExperienceDetail {
    startDate: string,
    endDate: string,
    title: string,
    type?: string,
    employer: string,
    location: string,
    skills: string[],
}
export interface EducationDetail {
    startDate: string,
    endDate: string,
    school: string,
    location: string,
    GPA: number,
    ranking?: string,
    degree: string,
    courses?: string[],
    transcript?: string,
}

const experienceList: ExperienceDetail[] = [
    {
        startDate: 'March 2023',
        endDate: 'Present',
        title: 'Software Development Manager',
        employer: 'IEJL',
        type: 'full-time',
        location: 'Newport Beach, CA',
        skills: ['PHP', 'MySQL','Azure', 'Cloudflare', 'DNS', 'Git webhooks'],
    }, 
    {
        startDate: 'September 2020',
        endDate: 'August 2021',
        title: 'Software Development Engineer',
        type: 'part-time',
        employer: 'Second Affiliated Hospital of DMU',
        location: 'Dalian, China',
        skills: ['Java', 'Spring Boot','Spring Cloud','React', 'Redis','Kafka', 'AWS(S3, EC2, ElastiCache, RDS)'],
    }, 
    {
        startDate: 'June 2019',
        endDate: 'September 2019',
        title: 'Software Development Engineer',
        type: 'full-time intern',
        employer: 'NeuSoft',
        location: 'Dalian, China',
        skills: ['C++','QT','Spring Cloud','React', 'Redis','Kafka', 'AWS(S3, EC2, ElastiCache, RDS)'],
    }, 
]

const educationList: EducationDetail[] = [
    {
        startDate: 'September 2021',
        endDate: 'December 2022',
        school: 'University of California, Irvine (UCI)',
        location: 'Irvine, CA',
        GPA: 3.83,
        degree: 'Master of Computer Science',
        courses: [''],
    }, 
    {
        startDate: 'September 2017',
        endDate: 'July 2021',
        school: 'Dalian University of Technology (DUT)',
        location: 'Dalian, China',
        GPA: 3.84,
        ranking: "10/31",
        degree: 'B.S. in Computer Science and Technology',
        courses: ['Data Structures and Algorithms', 
            'Machine Learning & Pattern Recognition', 
            'Operations Research', 
            'Data Management & Database System', 
            'Computer Composition Principle', 
            'Object-oriented Programming',
            'Computer Network'],
    }, 
]

const Timeline:React.FC<TimelineType> = (props) => {
  return (
    <TimelineWrapper >
        <ul className="timeline timeline-centered">
            {props.isEducation? 
                <>
                {experienceList.map((exp, idx)=>(<ExperienceTimelineItem key={idx} {...exp} />))}
                </>:
                <>
                {educationList.map((edu, idx)=>(<EducationTimelineItem key={idx} {...edu} />))}
                </>
            }
        </ul>
    </TimelineWrapper>
  )
}

export default Timeline

