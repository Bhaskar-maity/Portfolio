import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavControl from './components/navbar'
import About from './components/About'
import Work from './components/work';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <NavControl> </NavControl>
      <Header></Header>
      <About></About>
      <Work></Work>
    </div>
  );
}

export default App;
