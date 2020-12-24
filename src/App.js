import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavControl from './components/navbar'
import About from './components/About'
import Work from './components/work';
import Header from './components/Header';
import Footer from './components/Footer'
import Skills from './components/skills'
function App() {
  return (
    <div className="App">
      <NavControl> </NavControl>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
