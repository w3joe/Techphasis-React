import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Techphasis</title>
        <meta property="og:title" content="Pricing - Techphasis" />
      </Helmet>
      <div className="pricing-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name5"></NavbarInteractive>
      </div>
      <div className="pricing-pricing">
        <div className="pricing-container1">
          <div className="pricing-pricing-card">
            <span className="pricing-text">BASIC</span>
            <div className="pricing-container2">
              <span className="pricing-text01">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text04">-</span>
            </div>
            <div className="pricing-container3">
              <span className="pricing-text05">✔ ...</span>
              <span className="pricing-text06">✔ ...</span>
              <span className="pricing-text07">✔ ...</span>
              <span className="pricing-text08">✔ ...</span>
            </div>
            <button className="pricing-button button">Learn More</button>
          </div>
          <div className="pricing-pricing-card1">
            <span className="pricing-text09">PRO</span>
            <div className="pricing-container4">
              <span className="pricing-text10">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text13">-</span>
              <span className="pricing-text14">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="pricing-text16">
              Billed annualy or $12 month-to-month.
            </span>
            <div className="pricing-container5">
              <span className="pricing-text17">✔ ...</span>
              <span className="pricing-text18">✔ ...</span>
              <span className="pricing-text19">✔ ...</span>
              <span className="pricing-text20">✔ ...</span>
              <span className="pricing-text21">✔ ...</span>
            </div>
            <button className="pricing-button1 button">Learn More</button>
          </div>
          <div className="pricing-pricing-card2">
            <span className="pricing-text22">PREMIUM</span>
            <div className="pricing-container6">
              <span className="pricing-text23">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text26">-</span>
              <span className="pricing-text27">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="pricing-text29">
              Billed annualy or $- month-to-month.
            </span>
            <div className="pricing-container7">
              <span className="pricing-text30">✔ ...</span>
              <span className="pricing-text31">✔ ...</span>
              <span className="pricing-text32">✔ ...</span>
              <span className="pricing-text33">✔ ...</span>
            </div>
            <button className="pricing-button2 button">Learn More</button>
          </div>
        </div>
        <span className="pricing-text34">Coming Soon</span>
      </div>
      <div className="pricing-footer">
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  )
}

export default Pricing
