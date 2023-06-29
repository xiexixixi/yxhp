import React, { useState } from 'react'
// import './toggleswitch.css'
import { styled } from 'styled-components';
import Timeline from './timeline/Timeline';



const Experience: React.FC = () => {

  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section style={{minHeight: '100vh'}} id='experience'>
      <h2>My Experience & Education</h2>
      <ToggleSwitch>
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="yes"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="radio-one">Experience</label>
        <input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="no"
          checked={!isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="radio-two">Education</label>
      </ToggleSwitch>
      <Timeline isEducation = {isChecked}/>
      

    </section>
  )
}

export default Experience

const ToggleSwitch = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;

  input {
    position: absolute !important;
    /* clip: rect(0, 0, 0, 0); */
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
    width: 30%;
    background-color: var(--color-bg-variant);
    color: var(--color-white);
    font-size: 1rem;
    line-height: 1;
    text-align: center;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: var(--transition);
  }

  label:hover {
    cursor: pointer;
  }
  input:checked + label {
    background-color: var(--color-primary);
    box-shadow: none;
  }
  label:first-of-type {
    border-radius: 2rem 0 0 2rem;
  }
  label:last-of-type {
    border-radius: 0 2rem 2rem 0;
  }
`