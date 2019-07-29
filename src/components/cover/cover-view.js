import React, { Fragment } from 'react'
import './cover-style.css'
import Transition from './../transition'
import Triangle from './triangle'

const Cover = ({ name, profession }) => (
  <Fragment>
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
    <Transition />
  </Fragment>
)

export default Cover
