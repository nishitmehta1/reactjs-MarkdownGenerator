import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import './markdowned.css';

class Markdowned extends Component {
  render() {
    return (
      <div className="markdowned container col-md-8">
       <ReactMarkdown className="col-md-8 text-left text-wrap container" source={this.props.input}></ReactMarkdown>
      </div>
    );
  }
}

export default Markdowned;
