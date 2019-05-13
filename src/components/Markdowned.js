import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import './markdowned.css';

class Markdowned extends Component {
  render() {
    return (
      <div className="markdowned__component col-md-6 markdowned">
       <ReactMarkdown className="markdown text-left text-wrap" source={this.props.input}></ReactMarkdown>
      </div>
    );
  }
}

export default Markdowned;
