import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div></div>
        <div className="double-bounce"></div>
      </div>
    )
  }
}

export default Loading