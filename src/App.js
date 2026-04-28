import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

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

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar 
        title="Word App"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      <div style={{ height: '70px' }}>
  <div
    className={`alert alert-${alert ? alert.type : 'primary'}`}
    role="alert"
    style={{
      margin: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      visibility: alert ? 'visible' : 'hidden'
    }}
  >
    {alert ? alert.msg : ''}
  </div>
</div>

      <div className="container" >
        <Routes>
          <Route 
            path="/" 
            element={
              <Textform 
                heading="Enter the text to Analyze" 
                mode={mode}
                showAlert={showAlert}
              />
            } 
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}