import React, { Component } from 'react';
import './App.css';
import TextArea from './components/TextArea.js';
import Markdowned from './components/Markdowned.js';
import text from './components/test-markdown.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: text
    }
  }
  
  handleChange = (val) => {
    console.log(this.state.input)
    this.setState({
      input: val
    })
  }

  render() {
    return (
      <div className="App">
        <TextArea value={this.state.input} handleChange={this.handleChange} />
        <Markdowned input={this.state.input} />
      </div>
    );
  }
}

export default App;
