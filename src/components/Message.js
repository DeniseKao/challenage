import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Message = ({ onClick, msg_title, msg_icon, selected, onViewClick}) => (
    <li onClick={onClick} >
        <div className="check-box"><input type="checkbox" checked={selected} /></div>
        <div className="msg">
          <div className="icon"><img src={msg_icon} /></div>
          <div className="title">{msg_title}</div>
          <div className="view-btn">
              <Link to={{ pathname: '/detail' }} target="_blank" onClick={onViewClick}>
                  View
              </Link>
          </div>
          
        </div>
    </li>
  
)

Message.propTypes = {
  onClick: PropTypes.func.isRequired,  
  msg_title: PropTypes.string.isRequired,
  msg_icon: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}

export default Message
