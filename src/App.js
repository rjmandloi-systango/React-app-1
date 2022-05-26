import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'


function App() {
  return (
    <>
      <Navbar title="Create yout text" aboutText="About us" />
      <div className="container">
      <TextForm textInputTitle="Place your text" heading="Enter the text to analyse" />
      </div>
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
