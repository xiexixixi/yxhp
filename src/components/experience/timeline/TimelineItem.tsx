import React from 'react'
import './timeline.css'
import { styled } from 'styled-components'

const TimelineItem:React.FC = () => {
  return (
    <li key={1} className="timeline-item">
        <div className="timeline-info">
            <span>April 02, 2016 - April 03, 2016</span>
        </div>
        <div className="timeline-marker"></div>
        <article className="timeline-content">
            <h3 className="timeline-title">SDE</h3>
            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                eu pede mollis pretium. Pellentesque ut neque. </p>
        </article>
    </li>
  )
}

export default TimelineItem