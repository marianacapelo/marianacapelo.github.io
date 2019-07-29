import React from 'react'
import './cover-style.css'
import Triangle from './../triangle'

const Cover = ({ name, profession }) => (
  <div className="Cover">
    <div className="inner-content">
      <div className="aligned">
        <div className="triangles">
          <Triangle height={13} units="vh" borderLength={4} topAngle={56} />
          <Triangle height={18} units="vh" borderLength={4} topAngle={56} />
        </div>
      </div>
      <h1>{name}</h1>
      <h3>{profession}</h3>
    </div>
  </div>
)

export default Cover
