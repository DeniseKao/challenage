import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({ children, className, onClick }) => {

  return (
    <button className={["act-btn", className].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ActionButton

