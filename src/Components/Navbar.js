import React, { useState } from 'react';

export default function Navbar({ title = 'Set title here', aboutText = 'About App' }) {

  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a0101';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/">{title}</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">{aboutText}</a>
              </li>

            </ul>

            <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
              <input
                className="form-check-input"
                onChange={togglemode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable {mode === 'dark' ? 'Light' : 'Dark'} Mode
              </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}