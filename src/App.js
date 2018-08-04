import React, { Component } from 'react';
import Input from './input.js';
import {Background} from './--backgroundStyle.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Background>
      <div className="App">
        <header className="App-header">
           
          <h1 className="appName">Weather App</h1>
        </header>
        <Input/>
       
      </div>
      </Background>
    );
  }
}

export default App;
