import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavControl from './components/navbar'
import About from './components/About'
import Work from './components/work';
function App() {
  return (
    <div className="App">
      <NavControl/>
      <About />
      <Work />
    </div>
  );
}

export default App;
