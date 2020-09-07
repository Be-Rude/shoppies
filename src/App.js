import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Title from "./components/title"
import Search from "./components/searchBar"
import Results from './components/results'
import Reset from './components/reset'

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
        
      </header>
      <Reset />
    </div>
  );
}

export default App;
