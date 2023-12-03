import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <div className="navbar-interactive-container1">
          <img
            alt={props.image_alt1}
            src="/techphasis%20logo-05-200h.jpg"
            className="navbar-interactive-image"
          />
        </div>
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        >
          <nav className="navbar-interactive-links">
            <Link to="/" className="navbar-interactive-nav1">
              {props.Nav1}
            </Link>
            <Link to="/services" className="navbar-interactive-nav2">
              {props.Nav2}
            </Link>
            <Link to="/about" className="navbar-interactive-nav3">
              {props.Nav3}
            </Link>
            <Link to="/careers" className="navbar-interactive-nav4">
              {props.Nav4}
            </Link>
            <Link to="/pricing" className="navbar-interactive-nav5">
              {props.Nav5}
            </Link>
          </nav>
          <div className="navbar-interactive-buttons">
            <Link to="/contact" className="navbar-interactive-register button">
              {props.Register}
            </Link>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu"
        >
          <div className="navbar-interactive-container2">
            <div className="navbar-interactive-nav">
              <div className="navbar-interactive-top">
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon2"
                  >
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive-links1">
                <div className="navbar-interactive-container3">
                  <Link to="/" className="navbar-interactive-nav11">
                    {props.Nav12}
                  </Link>
                  <Link to="/services" className="navbar-interactive-nav21">
                    {props.Nav22}
                  </Link>
                  <Link to="/about" className="navbar-interactive-nav31">
                    {props.Nav32}
                  </Link>
                  <Link to="/careers" className="navbar-interactive-nav41">
                    {props.Nav42}
                  </Link>
                  <Link to="/pricing" className="navbar-interactive-nav51">
                    {props.Nav52}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  Nav4: 'Careers\n',
  Nav12: 'Home',
  Nav511: 'Contact',
  Nav1: 'Home',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Nav52: 'Pricing',
  Nav211: 'Services',
  Nav32: 'About',
  Register11: 'Register',
  Nav411: 'Testimonials',
  Register: 'Request a consultation',
  Nav31: 'Portfolio',
  Nav2: 'Services',
  image_alt: 'image',
  Nav311: 'Portfolio',
  Nav21: 'Services',
  Nav11: 'Home',
  rootClassName: '',
  Nav42: 'Careers\n',
  Logo: 'LOGO',
  Nav51: 'Contact',
  Logo1: 'TECHDEV',
  image_alt1: 'image',
  image_src1: '54e2aa9c-186d-4f89-8f95-3e33b5306d24',
  Nav111: 'Home',
  Nav41: 'Testimonials',
  Logo11: 'TECHDEV',
  Register1: 'Register',
  Login: 'Login',
  Nav5: 'Pricing',
  Nav22: 'Services',
  Nav3: 'About',
  Login1: 'Login',
}

NavbarInteractive.propTypes = {
  Nav4: PropTypes.string,
  Nav12: PropTypes.string,
  Nav511: PropTypes.string,
  Nav1: PropTypes.string,
  image_src: PropTypes.string,
  Nav52: PropTypes.string,
  Nav211: PropTypes.string,
  Nav32: PropTypes.string,
  Register11: PropTypes.string,
  Nav411: PropTypes.string,
  Register: PropTypes.string,
  Nav31: PropTypes.string,
  Nav2: PropTypes.string,
  image_alt: PropTypes.string,
  Nav311: PropTypes.string,
  Nav21: PropTypes.string,
  Nav11: PropTypes.string,
  rootClassName: PropTypes.string,
  Nav42: PropTypes.string,
  Logo: PropTypes.string,
  Nav51: PropTypes.string,
  Logo1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  Nav111: PropTypes.string,
  Nav41: PropTypes.string,
  Logo11: PropTypes.string,
  Register1: PropTypes.string,
  Login: PropTypes.string,
  Nav5: PropTypes.string,
  Nav22: PropTypes.string,
  Nav3: PropTypes.string,
  Login1: PropTypes.string,
}

export default NavbarInteractive
