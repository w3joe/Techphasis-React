import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import ServiceBar from '../components/service-bar'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Techphasis</title>
        <meta property="og:title" content="Services - Techphasis" />
      </Helmet>
      <div className="services-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
      </div>
      <div className="services-features">
        <h1 className="services-text">
          <span className="services-text1">Explore Our Services</span>
          <br></br>
        </h1>
        <span className="services-text3">
          Our array of comprehensive services is designed to empower your
          business and elevate your success in a rapidly evolving landscape.
        </span>
        <div className="services-container1">
          <ServiceBar rootClassName="service-bar-root-class-name"></ServiceBar>
          <div className="services-container2">
            <Link to="/contact" className="services-navlink button">
              <span className="services-text4">
                <span className="services-text5">
                  Contact us for more details
                </span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="services-footer">
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </div>
  )
}

export default Services
