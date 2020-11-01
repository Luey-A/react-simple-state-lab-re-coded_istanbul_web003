import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props) {
        super()
        console.log(props.value)
        this.state = {color: props.value} 
    }

    onHandleColor = () => {
        this.setState({
            color: "#333"
        })
    }

    render() {
        return(
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.onHandleColor}></div>
    )}
  }