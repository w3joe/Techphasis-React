import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Not-Found - Techphasis</title>
        <meta property="og:title" content="Not-Found - Techphasis" />
      </Helmet>
      <div className="not-found-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name6"></NavbarInteractive>
      </div>
      <div className="not-found-hero">
        <div className="not-found-hero1">
          <div className="not-found-container1">
            <h1 className="not-found-hero-heading heading1">404 Not Found</h1>
            <span className="not-found-hero-sub-heading">Made a mistake?</span>
            <button className="not-found-hero-button1 button">
              Return to Home
            </button>
          </div>
        </div>
      </div>
      <div className="not-found-footer"></div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default NotFound
