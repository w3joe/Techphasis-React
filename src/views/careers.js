import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './careers.css'

const Careers = (props) => {
  return (
    <div className="careers-container">
      <Helmet>
        <title>Careers - Techphasis</title>
        <meta property="og:title" content="Careers - Techphasis" />
      </Helmet>
      <div className="careers-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name4"></NavbarInteractive>
      </div>
      <div className="careers-banner">
        <div className="careers-container1">
          <h1 className="careers-text">Coming Soon!</h1>
          <span className="careers-text1">
            We are constantly seeking software developers and UI/UX designers to
            join our team.
          </span>
          <div className="careers-container2">
            <a
              href="https://mailto:hello@techphasis.com?subject=Career%20%40%20Techphasis"
              target="_blank"
              rel="noreferrer noopener"
              className="careers-link button"
            >
              Join Now
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
          className="careers-image"
        />
      </div>
      <div className="careers-footer">
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  )
}

export default Careers
