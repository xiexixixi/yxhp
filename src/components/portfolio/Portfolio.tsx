import React from 'react'
import './portfolio.css'
import { styled } from 'styled-components'
import PortfolioProject from './PortfolioProject'

const PortfoiloContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

const Portfolio = () => {
  return (
    <section id='portfolio'>Portfolio
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfoiloContainer className='container'>
        <PortfolioProject/>
      </PortfoiloContainer>
    
    </section>
  )
}

export default Portfolio