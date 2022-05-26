import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'



    function App() {
      const [mode, setMode] = useState("light")
      const toggleMode = () => {
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor='#0c264c'
        } else {
          setMode("light");
          document.body.style.backgroundColor='white'
        }
      }
      return (
        <>
       
          <Navbar title="Create yout text" aboutText="About us" mode={mode} toggleMode={toggleMode} />
          <div className="container">
            <TextForm textInputTitle="Place your text" heading="Enter the text to analyse"  mode={mode} />
          </div>
          <div className="container">
            <About />
          </div>
        </>
      );
    }

    export default App;
