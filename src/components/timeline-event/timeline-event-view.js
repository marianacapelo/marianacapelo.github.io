import React, { Fragment } from 'react'
import './timeline-event-style.css'

const TimelineEvent = ({
  company,
  description,
  side,
  subtitle,
  time,
  title,
}) => (
    <li className='timeline-event'>
      <label className='timeline-icon'></label>
      <div className={`timeline-card ${side}`}>
        <p className='timeline-card-thumbnail'>{time}</p>
        <div className='timeline-card-content'>
          <h3>{title}</h3>
          <h4>{subtitle}{company ? (<Fragment><span>@</span>{company}</Fragment>) : null}</h4>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )

export default TimelineEvent