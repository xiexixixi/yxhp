import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import { SkillDetail } from './Experience'

const Skill:React.FC<SkillDetail> = (props) => {
  return (
    <div>
        <AiFillCheckCircle/>
        <h3>{props.name}</h3>
        <h5>{props.proficiency}</h5>
    </div>
  )
}

export default Skill