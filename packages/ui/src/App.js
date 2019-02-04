import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import alpha from 'alpha';

export function helo (data){
  console.log(data) 
}

export function testcallback(holdername , callback){
  // tampering with the callback 
  callback(`appended ${holdername} to callback`);
}

class App extends Component {


  render() {
    testcallback("holder1" , helo);

    return (
      <div>
        <div className="App">
          {alpha}

          <h1>Warning bar</h1>
        </div>
        <div className="AppChild">
          helo
        </div>
      </div>
    );
  }
}

export default App;
