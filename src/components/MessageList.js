import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages, onMsgClick }) => (
  <ul className="msg-list">
    {messages.map(message =>
      <Message
        key={message.msg_id}
        {...message}
        onClick={() => onMsgClick(message.msg_id)}
        onViewClick={(e) => {
          e.stopPropagation() 
          localStorage.setItem("msg", JSON.stringify(message))  
        }}
      />
    )}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    msg_id: PropTypes.number.isRequired,  
    msg_title: PropTypes.string.isRequired,
    msg_icon: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onMsgClick: PropTypes.func.isRequired
}

export default MessageList
