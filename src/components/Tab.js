import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ active, children, onClick }) => {
  if (active) {
    return <div className="active">{children}</div>
  }

  return (
    <div
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </div>
  )
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab

