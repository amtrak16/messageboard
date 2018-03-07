import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: '',
      email: '',
      avatar: ''
    }

  }
  componentDidMount(){
    axios.get('http://5a747e5f61c2a40012894ab8.mockapi.io/msgbrd/v1/users')
    .then(({data:users}) => {
      this.setState({users})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <form>
              <input type="text" placeholder="email" />
          </form>
            {this.state.users.map((user) => (
              <p key={user.id}>{user.username}</p>
            ))}
      </div>
    );
  }
}

export default App;
