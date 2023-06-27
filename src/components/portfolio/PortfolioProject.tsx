import React from 'react'
import pok from '../../assets/pok.png'
import { styled } from 'styled-components'

const Project = styled.div`
    background: var(--color-bg-variant);
    /* padding: 1.2rem; */
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    &:hover {
        border-color: var(--color-primary-variant);
        background: transparent;
    }
    & h3 {
        margin: 1.2rem 0 2rem;
    }
`
const ProjectImage = styled.img`
    border-radius: 2rem 2rem 1rem 1rem;
    overflow: hidden;
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 1rem;
    justify-content: center;

`


function PortfolioProject() {
  return (
    <Project>
        <ProjectImage src={pok}/>
        <h3 style={{margin: '1rem'}}>Title</h3>
        <ButtonContainer>
            <a href='#' className='btn' target='_blank'>Demo</a>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </ButtonContainer>
    </Project>
  )
}

export default PortfolioProject