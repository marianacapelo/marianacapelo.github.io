import React, { Component } from 'react'
import './App.css'
import Section from './components/section'
import Cover from './components/cover'
import Footer from './components/footer'
import IntroCard from './components/intro-card'
import Timeline from './components/timeline'
import TimelineEvent from './components/timeline-event'
import Hobbies from './components/hobbies'
import Hobbie from './components/hobbie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover name={'Mariana Capelo'} profession={'Software Engineer'} />

        <Section id="intro" className="inner" title='Hi!'>
          <IntroCard>
            <p>
              My name is Mariana Capelo, I am 25 years old and I love programming.
            </p>
            <p>
              I am a Software Engineer from Portugal, currently finishing my Masters Degree at University of Minho and looking for a new challenge.
            </p>
          </IntroCard>
        </Section>

        <Section id='hobbies' className="inner" title='What I love'>
          <Hobbies>
            <Hobbie name={'Problem solving'} />
            <Hobbie name={'Our cats'} />
            <Hobbie name={'Crafting'} />
            <Hobbie name={'Snow'} />
          </Hobbies>
        </Section>

        <Section id='experience' title="What I've done">
          <Timeline>
            <TimelineEvent
              side={'even'}
              time={'September 2016 - September 2017'}
              title={'Software Developer @ Bsolus'}
              subtitle={'Beevo Project - Core Team'}
              description={'Team leader for core development in Beevo project'}
            />
            <TimelineEvent
              side={'odd'}
              time={'September 2014 - September 2016'}
              title={'Software Developer @ Bsolus'}
              subtitle={'Beevo Project'}
              description={'Development and architecture of a multi client web platform, using PHP and Javascript'}
            />
            <TimelineEvent
              side={'even'}
              time={'September 2014 - September 2018'}
              title={'MSc in Software Engineering'}
              subtitle={'Univeristy of Minho'}
              description={'Masters Degree specialized in Formal Methods in Software Engineering and Business Intelligence.'}
            />
            <TimelineEvent
              side={'odd'}
              time={'September 2011 - June 2014'}
              title={'BSc in Software Engineering'}
              subtitle={'Univeristy of Minho'}
              description={'Bachelors Degree lasted three years and included lessons in functional, imperative, object-oriented and logical programming paradigms.'}
            />
          </Timeline>
        </Section>

        <Section id="contacts" className="inner" title='Get in touch'>
          <p>
            I would love to talk!
          </p>
          <strong>
            <a href="mailto:mabcapelo@gmail.com">mabcapelo@gmail.com</a>
          </strong>
        </Section>

        <Footer>Mariana Capelo</Footer>
      </div >
    );
  }
}

export default App;
