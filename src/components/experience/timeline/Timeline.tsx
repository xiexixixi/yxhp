import React from 'react'
import './timeline.css'
import { styled } from 'styled-components'
import TimelineItem from './TimelineItem'

const TimelineWrapper = styled.div`
    width: var(--container-width-lg);
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        width: var(--container-width-md);
    }
    @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
    }
`

const Timeline:React.FC = () => {
  return (
    <TimelineWrapper >
        <ul className="timeline timeline-centered">
            <TimelineItem/>
            <TimelineItem/>
        </ul>
    </TimelineWrapper>
  )
}

export default Timeline

