import React from 'react'
// import './timeline.css'
import { styled } from 'styled-components'





const TimelineComponent = styled.div`
    display: flex;
    justify-content: center;

 #timeline {
   list-style: none;
   margin: 120px 0 0;
   padding: 0;
   border-top: 8px solid #eee9dc;
   display: table;
   border-spacing: 30px 0; 
    li {
     display: table-cell; 
     .relative {
       position: relative; 
    }
    }
    p {
     margin: 0 0 15px; }
    }
 .date {
   text-align: center;
   top: -55px;
   left: 0;
   right: 0;
   font-size: 0.95em;
   line-height: 20px;
   position: absolute; }
 
 .circle {
   margin: 0 auto;
   top: -14px;
   left: 0;
   right: 0;
   width: 10px;
   height: 10px;
   background: #48b379;
   border: 5px solid #eee9dc;
   border-radius: 50%;
   display: block;
   position: absolute; }
 
 .content {
   width: 200px;
   max-height: 0;
   margin-top: 40px;
   vertical-align: top;
   padding: 50px 15px 15px;
   transition: width 0.4s linear, max-height 0.4s linear;
   border-width: 2px;
   border-style: solid;
   border-radius: 0.5em;
   position: relative; }
   .content:before, .content:after {
     content: "";
     width: 0;
     height: 0;
     border: solid transparent;
     position: absolute;
     pointer-events: none;
     bottom: 100%; }
   .content:before {
     border-bottom-color: inherit;
     border-width: 15px;
     left: 50%;
     margin-left: -15px; }
   .content:after {
     border-bottom-color: #48b379;
     border-width: 12px;
     left: 50%;
     margin-left: -12px; }
   .content p {
     max-height: 0;
     color: transparent;
     text-align: justify;
     word-break: break-word;
     hyphens: auto;
     overflow: hidden; }
 
 label {
   font-size: 1.3em;
   position: absolute;
   z-index: 100;
   cursor: pointer;
   width: 200px;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
   display: block;
   top: 60px;
   left: 15px; }
 
 .radio {
   display: none; }
 
 .radio:checked + .relative label {
   cursor: auto;
   width: 400px;
   transition: width 0.3s linear 0.2s; }
 
 .radio:checked + .relative .circle {
   background: #f98262; }
 
 .radio:checked ~ .content {
   max-height: 180px;
   border-color: #eee9dc;
   width: 400px; }
   .radio:checked ~ .content p {
     max-height: 200px;
     color: #eee9dc;
     transition: color 0.3s linear 0.3s; }


@media screen and (max-width: 767px) {
  #timeline {
    margin-left: 0;
    padding-left: 0;
    border-left: none; }
    #timeline li {
      margin: 50px 0; }
  label {
    width: 85%;
    font-size: 1.1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    transform: translateX(18px); }
  .content {
    padding-top: 45px;
    border-color: #eee9dc; }
    .content:before, .content:after {
      border: solid transparent;
      bottom: 100%; }
    .content:before {
      border-bottom-color: inherit;
      border-width: 17px;
      top: -16px;
      left: 50px;
      margin-left: -17px; }
    .content:after {
      border-bottom-color: #48b379;
      border-width: 20px;
      top: -20px;
      left: 50px;
      margin-left: -20px; }
    .content p {
      font-size: 0.9em;
      line-height: 1.4; }
  .circle, .date {
    display: none; } }

`

function Timeline() {
    return (
        <TimelineComponent>
            <ul id='timeline'>
                <li className='work'>
                    <input className='radio' id='work5' name='works' type='radio' defaultChecked />
                    <div className="relative">
                        <label htmlFor='work5'>Lorem ipsum dolor sit amet</label>
                        <span className='date'>12 May 2013</span>
                        <span className='circle'></span>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.
                        </p>
                    </div>
                </li>
                <li className='work'>
                    <input className='radio' id='work4' name='works' type='radio' />
                    <div className="relative">
                        <label htmlFor='work4'>Lorem ipsum dolor sit amet</label>
                        <span className='date'>11 May 2013</span>
                        <span className='circle'></span>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.
                        </p>
                    </div>
                </li>

            </ul>



        </TimelineComponent>
    )
}

export default Timeline