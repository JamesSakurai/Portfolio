import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Profile of James Sakurai</h1>
        <h2>Interesting things about me:</h2>
        <ul>
          <li>Lived in Japan</li>
          <li>Dog Owner</li>
          <li>Baby Faced</li>
        </ul>
        <h2>Job History</h2>
        <ul>
          <li>Senior Account Executive - Womply</li>
          <li>Solar Consultant - Solaroo Energy</li>
          <li>Store Manager - Verizon Wireless</li>
        </ul>
      </div>
    );
  }
}

export default App;
