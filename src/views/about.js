import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Techphasis</title>
        <meta property="og:title" content="About - Techphasis" />
      </Helmet>
      <div className="about-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
        <div className="about-features">
          <h1 className="about-text">About Us</h1>
          <div className="about-container1">
            <FeatureCard2
              title="Quality Excellence"
              description="Excellence is not just a goal; it's our standard. We take pride in delivering solutions that meet the highest standards of quality."
              rootClassName="rootClassName"
            ></FeatureCard2>
            <FeatureCard2
              title="Expert Empowerment"
              description="At Techphasis, we empower our professionals to unleash their full potential. We believe in fostering an environment that encourages continuous learning and innovation."
              rootClassName="rootClassName3"
            ></FeatureCard2>
            <FeatureCard2
              title="Agility"
              description="In the fast-paced world of technology, adaptability is key. Our agile approach ensures that we swiftly respond to changing needs and market dynamics."
              rootClassName="rootClassName2"
            ></FeatureCard2>
            <FeatureCard2
              title="Gamification"
              description="Embracing the spirit of gamification, we infuse elements of creativity and engagement into our processes. We turn work into a rewarding experience, fostering a collaborative environment."
              rootClassName="rootClassName1"
            ></FeatureCard2>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default About
