import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavControl from './components/navbar'
import About from './components/About'
function App() {
  return (
    <div className="App">
      <NavControl/>
      <About />
    </div>
  );
}

export default App;
