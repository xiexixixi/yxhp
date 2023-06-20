import React from 'react'
import CV from '../../assets/Resume_May_30_one_page.pdf'
const Resume: React.FC = () => {

  return (
    <div className='resume'>
      <a href = {CV} className='btn' target='_blank' rel='noopener noreferrer'>View CV</a>
      {/* <a href={CV} download className='btn'>Download CV</a> */}
      <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default Resume
