import React from 'react'
import { styled } from 'styled-components'
import {ProjectDetail} from './Portfolio'

const Project = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--color-bg-variant);
    /* padding: 1.2rem; */
    border-radius: 1rem;
    border: 2px solid transparent;
    transition: var(--transition);
    box-shadow: outset 0 1rem 3rem rgba(0, 0, 0, 0.3), 0 1rem rgba(255, 255, 255, 0.1);
    &:hover {
        scale: 1.1;
    }
`
const ProjectImage = styled.img`
    height: 30vh;
    border-radius: 1rem 1rem 0rem 0rem;
    overflow: hidden;
`

interface buttondisplay {
    display: string,
}
const ButtonContainer = styled.div<buttondisplay>`
    /* position: absolute; */
    margin-top: 1rem;
    gap: 1rem;
    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
    bottom: 0rem;
    & .demo__link {
        display: ${props=>props.display};
    }
`


const PortfolioProject:React.FC<ProjectDetail> = (props) =>{
  return (
    <Project>
        <ProjectImage src={props.picture}/>
        <h3 style={{marginTop: '1rem', textAlign: 'center'}}>{props.title}</h3>
        <h5 style={{margin: '0 2rem 1rem 2rem', color: 'var(--color-light)'}}>{"  "+props.description}</h5>
        <ButtonContainer display={props.demoLink==null || ''?String('none'):String('')}>
            <a href={props.demoLink} className='btn demo__link' target='_blank' rel="noreferrer">Demo</a>
            <a href={props.sourceLink} className='btn source__link' target='_blank' rel="noreferrer">Github</a>
        </ButtonContainer>
    </Project>
  )
}

export default PortfolioProject