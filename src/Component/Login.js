import React from 'react';
import { Redirect } from 'react-router';
import { Button, Popup, Form } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    loggedin: false
  }


  handleLoginChange = e => {
    this.setState({[e.target.name]: e.target.value}, () => {console.log(this.state)})
  }


 handleSubmitLogin = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/games`, {
      method: 'POST',
      headers: {
        "Content-type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify({username: `${this.state.username}`, score: 0})
    })
    .then(u => u.json())
    .then(data => {this.props.updateUsername(data)})
    .then(this.setState({loggedin: true}, () => {console.log(this.state)}))
  }

render(){
  if (this.state.loggedin) return <Redirect to={"/"} />;
  return <div className="login-background">
      <div className="form-div">
        <Form onSubmit={this.handleSubmitLogin} onChange={this.handleLoginChange}>
          <h1>Please Login to start Learning!</h1>
          <Form.Input type="text" name="username" placeholder="Username" value={this.state.username} />
          <Form.Input type="password" name="password" placeholder="Password" value={this.state.password} />
          <Button value="Login"> Login </Button>
        </Form>
      <div className="pop-up-div">
        <Popup trigger={<Button icon="add" />} header="King Sejong the Great" content="The modern name for the Korean alphabet is Hangeul (or Hangul). King Sejong is a celebrated Korean ruler who invented the alphabet. "
          horizontalOffset={50}
          position='right center' />
      </div>
      </div>
    </div>;
}
}

export default Login
