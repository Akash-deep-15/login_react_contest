import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import {register} from './Register';
import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
      <h1>Sign up</h1>
     <Login />
    </div>
  );
}

export default App;
