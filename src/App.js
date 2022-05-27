import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import Alert from './components/Alert';
import { Routes ,Route ,BrowserRouter as Router , Link} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,

    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#213160'
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success");

    }
  }
  return (
    <>
 <Router>
      <Navbar title="Create yout text" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
     
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm textInputTitle="Place your text" heading="Enter the text to analyse" showAlert={showAlert} mode={mode} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
