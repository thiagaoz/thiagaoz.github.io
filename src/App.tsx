import React, { useEffect } from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Formation from './Components/Formation';
import Contact from './Components/Contact';
import { Element } from 'react-scroll'

function App() {
  useEffect(() => {
    document.title = "Thiago Vaz <Frontend Dev />";
  },[])
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home ></Home>
      <Formation></Formation>
      <Element id='portfolio' name='example-destination'>
        <Portfolio></Portfolio>
      </Element>
      <Element id='contact' name='example-destination'>
        <Contact></Contact>
      </Element>
      
    </div>
  );
}

export default App;
