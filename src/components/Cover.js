import React, { Component } from 'react';
import './Cover.css';
import Triangle from './Triangle';

export default class Cover extends Component {
  render() {
    return (
      <div className="Cover">
        <div className="inner-content">
          <div className="aligned">
            <div className="triangles">
              <Triangle height={13} units="vh" borderLength={4} topAngle={56} />            
              <Triangle height={18} units="vh" borderLength={4} topAngle={56} />
            </div>
          </div>
          <h1>Mariana Capelo</h1>
          <h3>Software Engineer</h3>
        </div>
      </div>
    );
  }
}
