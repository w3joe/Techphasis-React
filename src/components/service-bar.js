import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import ServiceCard from './service-card'
import './service-bar.css'

const ServiceBar = (props) => {
  return (
    <div className={`service-bar-container ${props.rootClassName} `}>
      <Link to="/services" className="">
        <div className="service-bar-feature-card">
          <h2 className="service-bar-text">{props.heading}</h2>
          <div className="service-bar-container1">
            <svg viewBox="0 0 1024 1024" className="service-bar-icon">
              <path
                d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/services" className="">
        <ServiceCard
          title="App Development"
          rootClassName="rootClassName1"
          className="service-bar-component"
        ></ServiceCard>
      </Link>
      <Link to="/services" className="">
        <div className="service-bar-feature-card1">
          <h2 className="service-bar-text1">{props.heading1}</h2>
          <div className="service-bar-container2">
            <svg viewBox="0 0 1024 1024" className="service-bar-icon2">
              <path
                d="M73.143 804.571h585.143v-73.143h-585.143v73.143zM73.143 512h585.143v-73.143h-585.143v73.143zM969.143 768c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM73.143 219.429h585.143v-73.143h-585.143v73.143zM969.143 475.429c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM969.143 182.857c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM1024 658.286v219.429h-1024v-219.429h1024zM1024 365.714v219.429h-1024v-219.429h1024zM1024 73.143v219.429h-1024v-219.429h1024z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/services" className="">
        <div className="service-bar-feature-card2">
          <h2 className="service-bar-text2">{props.heading2}</h2>
          <div className="service-bar-container3">
            <svg viewBox="0 0 1024 1024" className="service-bar-icon4">
              <path
                d="M1018.17 291.89l-286.058-286.058c-9.334-9.334-21.644-7.234-27.356 4.666l-38.354 79.904 267.198 267.198 79.904-38.354c11.9-5.712 14-18.022 4.666-27.356z"
                className=""
              ></path>
              <path
                d="M615.384 135.384l-263.384 21.95c-17.5 2.166-32.080 5.898-37.090 28.752-0.006 0.024-0.012 0.042-0.018 0.066-71.422 343.070-314.892 677.848-314.892 677.848l57.374 57.374 271.986-271.99c-5.996-12.53-9.36-26.564-9.36-41.384 0-53.020 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-14.82 0-28.852-3.364-41.384-9.36l-271.988 271.986 57.372 57.374c0 0 334.778-243.47 677.848-314.892 0.024-0.006 0.042-0.012 0.066-0.018 22.854-5.010 26.586-19.59 28.752-37.090l21.95-263.384-273.232-273.232z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

ServiceBar.defaultProps = {
  heading1: 'Backend Development',
  rootClassName: '',
  heading: 'Web Development',
  heading2: 'UI/UX Design',
}

ServiceBar.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading2: PropTypes.string,
}

export default ServiceBar
