import React from 'react'
import './experience.css'
import Skill from './Skill'
import {AiFillCheckCircle} from 'react-icons/ai'


export enum Proficiency {
  Learning = 'Learning',
  Basic = 'Basic',
  Intermediate = 'Intermediate',
  Experienced = 'Proficient',
  Expert = 'Expert',
}
enum Category {
  Frontend = "Frontend",
  Backend = "Backend",
  Other = "Library&DevTools",
}
export interface SkillDetail{
  name: string;
  proficiency: Proficiency;
  category: Category;
}

const skills:SkillDetail[] = [
  {name: "HTML", proficiency:Proficiency.Learning, category:Category.Frontend},
  {name: "HTML", proficiency:Proficiency.Basic, category:Category.Frontend},
  {name: "HTML", proficiency:Proficiency.Basic, category:Category.Frontend},
  {name: "HTML", proficiency:Proficiency.Basic, category:Category.Frontend},
  {name: "HTML", proficiency:Proficiency.Basic, category:Category.Frontend},
  {name: "HTML", proficiency:Proficiency.Basic, category:Category.Frontend},
]
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skills.map((sk, index) => (
              <Skill key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend}/>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {skills.map((sk, index) => (
              <Skill key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend}/>
            ))}
          </div>
        </div>

        <div className="experience__other">
          <h3>Library & Dev Tools</h3>
          <div className="experience__content">
            {skills.map((sk, index) => (
              <Skill key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend}/>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience