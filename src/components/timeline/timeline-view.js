import React from 'react'
import './timeline-style.css'

const Timeline = ({ children }) => (
  <ul className='timeline'>
    {children}
  </ul>
)

export default Timeline