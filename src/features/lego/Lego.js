import React, { Component } from 'react'
import { connect } from 'react-redux'
class Lego extends Component {
    legoChange= ()=>{
        console.log('this.props', this.props)
        console.log('this.props.store', this.props.store)
    }
  render() {
    return (
      <div>
        <button onClick={this.legoChange}>legoChange</button>
      </div>
    )
  }
}

export default connect((state)=>{
    return state
})(Lego)