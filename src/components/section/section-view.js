import React from 'react'
import './section-style.css'

const Section = ({ id, className, title, children }) => (
  <section id={id} className={className}>
    <h2 className="section-title">{title}</h2>
    <div className="section-content">{children}</div>
  </section>
)

export default Section