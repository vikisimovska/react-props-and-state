import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoodChanger from './MoodChanger';
import MyProfile from './MyProfile';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <MoodChanger/>
      </div>
    );
  }
}

export default App;
