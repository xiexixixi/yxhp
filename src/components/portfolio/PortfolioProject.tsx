import React from 'react'
import pok from '../../assets/pok.png'
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
    border: 3px solid transparent;
    transition: var(--transition);
    box-shadow: outset 0 1rem 3rem rgba(0, 0, 0, 0.3), 0 1rem rgba(255, 255, 255, 0.1);
    &:hover {
        scale: 1.1;
    }
`
const ProjectImage = styled.img`
    border-radius: 1rem 1rem 0rem 0rem;
    overflow: hidden;
`
const ButtonContainer = styled.div`
    /* position: absolute; */
    margin-top: 1rem;
    gap: 1rem;
    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
    bottom: 0rem;

`


const PortfolioProject:React.FC<ProjectDetail> = (props) =>{
  return (
    <Project>
        <ProjectImage src={props.picture}/>
        <h3 style={{marginTop: '1rem', textAlign: 'center'}}>{props.title}</h3>
        <h5 style={{margin: '0 2rem 1rem 2rem', color: 'var(--color-light)'}}>{"  "+props.description}</h5>
        <ButtonContainer>
            <a href={props.demoLink} className='btn' target='_blank'>Demo</a>
            <a href={props.sourceLink} className='btn' target='_blank'>Github</a>
        </ButtonContainer>
    </Project>
  )
}

export default PortfolioProject