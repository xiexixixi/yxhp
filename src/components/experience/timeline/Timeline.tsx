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


const Timeline:React.FC<TimelineType> = (props) => {
  return (
    <TimelineWrapper >
        <ul className="timeline timeline-centered">
            {props.isEducation? 
                <><ExperienceTimelineItem/><ExperienceTimelineItem/></>:
                <><EducationTimelineItem/><EducationTimelineItem/></>
            }
        </ul>
    </TimelineWrapper>
  )
}

export default Timeline

