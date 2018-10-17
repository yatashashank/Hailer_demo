import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: '',
    date: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.message, date: res.date}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hailer Demo</h1>
        </header>
        <p className="App-intro">{this.state.response} Time is {this.state.date}</p>
      </div>
    );
  }
}

export default App;
