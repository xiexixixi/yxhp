import React from 'react'
import './experience.css'
import Skill from './Skill'
import {AiFillCheckCircle} from 'react-icons/ai'


enum Proficiency {
  learning = 'Learning',
  basic = 'Basic',
  intermediate = 'Intermediate',
  experienced = 'Proficient',
  expert = 'Expert',
}
export interface SkillDetail{
  name: string;
  proficiency: Proficiency;
}

const skills:SkillDetail[] = [
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
  {name: "HTML", proficiency:Proficiency.basic},
]
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <div>{skills.map((sk, index) => (
        <Skill key={index} name={sk.name} proficiency={sk.proficiency} />
      ))}</div>
        </div>
      </div>
    </section>
  )
}

export default Experience