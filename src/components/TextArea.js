import React, { Component } from 'react';
import './textarea.css';

class TextArea extends Component {
  handleChange = (event) => {
  	console.log(event.target.value)
	this.props.handleChange(event.target.value)
  }
  render() {
    return (
      <div className="textarea container col-md-8">
        <textarea name="text" id="textarea" cols="100" rows="10" value={this.props.value} onChange={this.handleChange.bind(this)}></textarea>
      </div>
    );
  }
}

export default TextArea;
