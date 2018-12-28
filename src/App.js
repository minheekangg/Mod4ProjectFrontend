import React, { Component, Fragment } from 'react';
import './App.css';
import Container from './Component/Container'

class App extends Component {
  state={
    letters: [],
    words: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/letters')
    .then(r=>r.json())
    .then(data=> this.setState({letters: data}))
    fetch('http://localhost:3000/api/v1/words')
    .then(res=>res.json())
    .then(words=> this.setState({words: words}))
  }

  render() {
    // console.log(this.state)
    return (
      <Fragment>
      <div className="App">
        <Container letters={this.state.letters} words={this.state.words} />
      </div>
      </Fragment>
    );
  }
}

export default App;
