import React, { Component } from 'react';
import './textarea.css';

class TextArea extends Component {
  handleChange = (event) => {
  	console.log(event.target.value)
	this.props.handleChange(event.target.value)
  }
  render() {
    return (
      <div className="textArea__component col-md-6 textarea">
        <textarea name="text" id="textarea" cols="85" rows="25" value={this.props.value} onChange={this.handleChange.bind(this)}></textarea>
      </div>
    );
  }
}

export default TextArea;
