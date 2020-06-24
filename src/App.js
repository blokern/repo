import React from 'react';
import logowella from './logo.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
        <div className="Top">
          <img src={logowella} className="toplogo" alt="dupa" />
        </div>
        <div className="menu">
          <ul>
          <li>produkty</li>
          <li>trendy</li>
          <li>historia</li>
          <li>dla profesjonalistów</li>
          <li>color master</li>
          <li>sklep wella</li>
          <li>sebman</li>
          </ul>
        </div>
      <header className="App-header">
        

        <img src={logo} className="App-logo" alt="dupa" />
        <span
          className="App-link"
        >
          Learn React
        </span>
      </header>
    </div>
  );
}


export default App;
