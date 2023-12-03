import React from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className={`service-card-feature-card ${props.rootClassName} `}>
      <h2 className="service-card-text">{props.title}</h2>
      <div className="service-card-container">
        <svg viewBox="0 0 1024 1024" className="service-card-icon">
          <path
            d="M682 854v-172h172v172h-172zM682 598v-172h172v172h-172zM426 342v-172h172v172h-172zM682 170h172v172h-172v-172zM426 598v-172h172v172h-172zM170 598v-172h172v172h-172zM170 854v-172h172v172h-172zM426 854v-172h172v172h-172zM170 342v-172h172v172h-172z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

ServiceCard.defaultProps = {
  rootClassName: '',
  title: 'Service',
}

ServiceCard.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default ServiceCard
