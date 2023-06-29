import React from 'react'
import './skills.css'

import SkillItem from './SkillItem'


export enum Proficiency {
  Learning = 'Learning',
  Basic = 'Basic',
  Intermediate = 'Intermediate',
  Experienced = 'Proficient',
  Expert = 'Expert',
}
export enum Category {
  Frontend = "Frontend",
  Backend = "Backend",
  Other = "Library&DevTools",
}
export interface SkillDetail {
  name: string;
  proficiency: Proficiency;
  category: Category;
}
// Spring Boot, Spring Cloud, Spring Data JPA, Redis, WebSocket, Kafka, JUnit
//  MySQL, MongoDB, Git, Docker, AWS, Azure, Linux, Nginx, Jenkins
const skills: SkillDetail[] = [
  { name: "HTML", proficiency: Proficiency.Intermediate, category: Category.Frontend },
  { name: "CSS", proficiency: Proficiency.Intermediate, category: Category.Frontend },
  { name: "JavaScript", proficiency: Proficiency.Intermediate, category: Category.Frontend },
  { name: "TypeScript", proficiency: Proficiency.Intermediate, category: Category.Frontend },
  { name: "React", proficiency: Proficiency.Intermediate, category: Category.Frontend },

  { name: "Spring Boot", proficiency: Proficiency.Experienced, category: Category.Backend },
  { name: "Spring Data JPA", proficiency: Proficiency.Experienced, category: Category.Backend },
  { name: "Redis", proficiency: Proficiency.Intermediate, category: Category.Backend },
  { name: "WebSocket", proficiency: Proficiency.Intermediate, category: Category.Backend },
  { name: "Kafka", proficiency: Proficiency.Intermediate, category: Category.Backend },
  { name: "JUnit", proficiency: Proficiency.Intermediate, category: Category.Backend },

  { name: "MySQL", proficiency: Proficiency.Intermediate, category: Category.Other },
  { name: "MongoDB", proficiency: Proficiency.Intermediate, category: Category.Other },
  { name: "Git", proficiency: Proficiency.Expert, category: Category.Other },
  { name: "Docker", proficiency: Proficiency.Experienced, category: Category.Other },
  { name: "AWS", proficiency: Proficiency.Experienced, category: Category.Other },
  { name: "Azure", proficiency: Proficiency.Intermediate, category: Category.Other },
  { name: "Linux", proficiency: Proficiency.Experienced, category: Category.Other },
  {name: "Nginx", proficiency:Proficiency.Learning, category:Category.Other},
  { name: "Jenkins", proficiency: Proficiency.Intermediate, category: Category.Other },
]
const Skills = () => {
  return (
    <section id='skills'>
      {/* <h5>What Skills I Have</h5> */}
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skills.map((sk, index) => (
              sk.category === Category.Frontend ?
                <SkillItem key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend} /> : null
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            {skills.map((sk, index) => (
              sk.category === Category.Backend ?
                <SkillItem key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend} /> : null
            ))}
          </div>
        </div>

        <div className="experience__other experience__merge">
          <h3>Library & Dev Tools</h3>
          <div className="experience__content">
            {skills.map((sk, index) => (
              sk.category === Category.Other ?
                <SkillItem key={index} name={sk.name} proficiency={sk.proficiency} category={Category.Frontend} /> : null
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills