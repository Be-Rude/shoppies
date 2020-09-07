import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Title from "./components/title"
import Search from "./components/searchBar"
import Results from './components/results'

function App() {
  return (
    <div className="App">
      
        <Title />
     
      
      <header className="App-header">
        <br />
        <br />
        <Search />
        <br />
        <Results />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React?
        </a>
      </header>
    </div>
  );
}

export default App;
