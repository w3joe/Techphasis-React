import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Techphasis</title>
        <meta property="og:title" content="Contact - Techphasis" />
      </Helmet>
      <div className="contact-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
      </div>
      <div className="contact-gallery">
        <div className="contact-gallery1">
          <iframe
            id="form"
            src="https://forms.gle/dXtnZtHWrQH5cYHi8"
            className="contact-iframe"
          ></iframe>
        </div>
      </div>
      <div className="contact-footer">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Contact
