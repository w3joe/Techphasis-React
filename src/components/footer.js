import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <h1 className="footer-text">{props.heading}</h1>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image"
        />
        <nav className="footer-nav">
          <nav className="footer-links">
            <Link to="/" className="footer-nav1">
              {props.Nav11}
            </Link>
            <Link to="/services" className="footer-nav2">
              {props.Nav21}
            </Link>
            <Link to="/about" className="footer-nav3">
              {props.Nav31}
            </Link>
            <Link to="/careers" className="footer-nav4">
              {props.Nav41}
            </Link>
            <Link to="/pricing" className="footer-nav5">
              {props.Nav51}
            </Link>
          </nav>
        </nav>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-icon-group">
        <a
          href="https://www.linkedin.com/company/techphasis"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
            <path
              d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"
              className=""
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/techphasis/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link1"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon2">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
      <span className="footer-text1">{props.text}</span>
    </footer>
  )
}

Footer.defaultProps = {
  text: '© 2023 Techphasis',
  Nav41: 'Careers\n',
  image_alt: 'image',
  Nav4: 'Testimonials',
  Nav5: 'Contact',
  Nav31: 'About',
  image_src: '/techphasis%20logo-transparent%20dark300px-200h.png',
  Nav2: 'Services',
  Nav1: 'Home',
  Nav21: 'Services',
  heading: "Powering Tomorrow's Technologies, Today",
  Nav51: 'Pricing',
  Nav3: 'Portfolio',
  Logo: 'TECHPHASIS',
  Nav11: 'Home',
  rootClassName: '',
}

Footer.propTypes = {
  text: PropTypes.string,
  Nav41: PropTypes.string,
  image_alt: PropTypes.string,
  Nav4: PropTypes.string,
  Nav5: PropTypes.string,
  Nav31: PropTypes.string,
  image_src: PropTypes.string,
  Nav2: PropTypes.string,
  Nav1: PropTypes.string,
  Nav21: PropTypes.string,
  heading: PropTypes.string,
  Nav51: PropTypes.string,
  Nav3: PropTypes.string,
  Logo: PropTypes.string,
  Nav11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
