import React from 'react'
import './skill.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import { SkillDetail, Proficiency } from './Experience'

import {FaBookReader} from 'react-icons/fa'

const Skill:React.FC<SkillDetail> = (props) => {
  return (
    <div className='skilldetail'>
        {props.proficiency===Proficiency.Learning?
        <FaBookReader className='skilldetail__icon'/>:
        <AiFillCheckCircle className='skilldetail__icon'/>}

        <div className='skilldetail__text'>
          <h3>{props.name}</h3>
          <h5>{props.proficiency}</h5>
        </div>
    </div>
  )
}

export default Skill