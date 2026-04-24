import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';

export default function App() {

  const [mode, setMode] = useState('dark');

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    }
  };

  return (
    <>
      <Navbar title="Word App" aboutText="About" mode={mode} togglemode={togglemode} />
      <About mode={mode} />
      <Textform heading="Enter the text to analyze" mode={mode} />  
    </>
  );
}