import React, { Component } from 'react'

class ViewDtail extends Component {
  componentWillUnmount() {
    localStorage.removeItem("msg")
  }

  render() {
    const msg = JSON.parse(localStorage.getItem("msg"))
    return (
    <div>
      msg_id:{msg.msg_id} <br/>
      msg_title:{msg.msg_title} <br/>
      msg_type:{msg.msg_type} <br/>
      msg_icon:{msg.msg_icon} <br/>
    </div>
    )
  }
}

export default ViewDtail