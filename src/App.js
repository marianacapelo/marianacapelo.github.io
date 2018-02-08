import React, { Component } from 'react';
import './App.css';
import Cover from './components/Cover';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Cover />
        
        <div className="transition"></div>

        <section id="intro" className="inner">
          <div className="intro-card">
            <p>
              <span>Hi!</span> My name is Mariana Capelo, I am 25 years old and I love programming.
              I am currently finishing my Masters Degree in Software Engineering at University of Minho and currently looking for a new challenge.
            </p>
          </div>
        </section>

        <section id="hobbies" className="inner">
          <h2 className="section-title">What I love</h2>
          <div className="section-content">
            <ul>
              <li>Problem solving</li>
              <li>Our cats</li>
              <li>Crafting</li>
              <li>Snow</li>
            </ul>
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">What I've done</h2>
          <div className="section-content">
            <ul className="timeline">
              <li>
                <label className="timeline-icon"></label>
                <div className="timeline-card even">
                  <p className="timeline-card-thumbnail">September 2016 - September 2017</p>
                  <div className="timeline-card-content">
                    <h3>Software Developer @ Bsolus</h3>
                    <h4>Beevo Project - Core Team</h4>
                    <p>Team leader for core development in Beevo project</p>
                  </div>
                </div>
              </li>
              <li>
                <label className="timeline-icon"></label>
                <div className="timeline-card odd">
                  <p className="timeline-card-thumbnail">September 2014 - September 2016</p>
                  <div className="timeline-card-content">
                    <h3>Software Developer @ Bsolus</h3>
                    <h4>Beevo Project</h4>
                    <p>Development and architecture of a multi client web platform, using PHP and Javascript</p>
                  </div>
                </div>
              </li>
              <li>
                <label className="timeline-icon"></label>
                <div className="timeline-card even">
                  <p className="timeline-card-thumbnail">September 2014 - Present</p>
                  <div className="timeline-card-content">
                    <h3>MSc in Software Engineering</h3>
                    <h4>Univeristy of Minho</h4>
                    <p>
                      Masters Degree specialized in Formal Methods in Software Engineering and Business Intelligence.
                      Dissertation in progress.  
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <label className="timeline-icon"></label>
                <div className="timeline-card odd">
                  <p className="timeline-card-thumbnail">September 2011 - June 2014</p>
                  <div className="timeline-card-content">
                    <h3>BSc in Software Engineering</h3>
                    <h4>Univeristy of Minho</h4>
                    <p>
                      Bachelors Degree lasted three years and included lessons in functional, imperative, object-oriented and logical programming paradigms.
                    </p>
                  </div>
                </div>
              </li>
            </ul>  
          </div>
        </section>

        <section id="contacts" className="inner">
          <h2 className="section-title">Get in touch</h2>
          <div className="section-content">
            <p>
              I would love to talk!
            </p>
            <strong>
              mabcapelo@gmail.com
            </strong>
          </div>
        </section>
        
        <section id="footer">
          <div className="section-content">
            Mariana Capelo
          </div>
        </section>
      </div>
    );
  }
}

export default App;
