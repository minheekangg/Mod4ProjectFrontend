import React, { Component, Fragment } from 'react';
import './App.css';
import Container from './Component/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Component/Login';
import NavBar from './Component/NavBar'


class App extends Component {
  state={
    letters: [],
    words: [],
    username: "",
    userId: 0
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/letters')
    .then(r=>r.json())
    .then(data=> this.setState({letters: data}))
    fetch('http://localhost:3000/api/v1/words')
    .then(res=>res.json())
    .then(words=> this.setState({words: words}))
  }

  updateUsername = (data) => {
    this.setState({username: data.username, userId:data.id})
  }

  render() {

    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path="/" render={()=> {
              return (
                <Fragment>
                <NavBar username={this.state.username}/>
                <div className="App">
                <Container letters={this.state.letters} words={this.state.words} username={this.state.username} userId={this.state.userId} />
                </div>
                </Fragment>
              )
            }} />
            <Route exact path="/login" render={() => <Login updateUsername={this.updateUsername}/>} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
