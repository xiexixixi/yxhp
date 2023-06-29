import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { SkillDetail, Proficiency } from './Skills'

import { FaBookReader } from 'react-icons/fa'
import { styled } from 'styled-components'

const SkillItem: React.FC<SkillDetail> = (props) => {
  return (
    <SkillDetailComponent>
      {props.proficiency === Proficiency.Learning ?
        <SkillDetailIconFaBookReader className='skilldetail__icon' /> :
        <SkillDetailIconFaBookReader as = {AiFillCheckCircle} className='skilldetail__icon' />}

      <div className='skilldetail__text'>
        <h3>{props.name}</h3>
        <h5 style={{color: 'var(--color-light)'}}>{props.proficiency}</h5>
      </div>
    </SkillDetailComponent>
  )
}

export default SkillItem

const SkillDetailComponent = styled.div`
  display: flex;
  gap: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  /* margin: 0rem 0.5rem; */
  padding: 0.5rem 1rem;

  &:hover {
    background:var(--color-bg-variant);
  }
`
const SkillDetailIconFaBookReader = styled(FaBookReader)`
  margin-top: 0.4rem;
  color: var(--color-primary);
`

