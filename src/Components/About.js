import React, { useState } from 'react';

export default function About({ mode }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const myStyle = {
    color: mode === 'dark' ? 'white' : '#212529',
    backgroundColor: mode === 'dark' ? '#243e52' : 'white',
    border: mode === 'dark' ? '1px solid white' : '1px solid #360707',
    padding: '15px'
  };

  return (
    <div className="container py-4">

      <h1
  className="my-3"
  style={{
    color: mode === 'dark' ? 'white' : '#0b3f54',
    backgroundColor: mode === 'dark' ? '#243e52' : 'black',
  }}
>
  About Us
</h1>

      {/* Item 1 */}
      <div className="accordion-item mb-2" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={myStyle}
            onClick={() => toggleAccordion(1)}
          >
            <strong>Analyze Your Text</strong>
          </button>
        </h2>

        {openIndex === 1 && (
          <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently.
          </div>
        )}
      </div>

      {/* Item 2 */}
      <div className="accordion-item mb-2" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={myStyle}
            onClick={() => toggleAccordion(2)}
          >
            <strong>Free to Use</strong>
          </button>
        </h2>

        {openIndex === 2 && (
          <div className="accordion-body" style={myStyle}>
            It is a free character counter tool.
          </div>
        )}
      </div>

      {/* Item 3 */}
      <div className="accordion-item mb-2" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={myStyle}
            onClick={() => toggleAccordion(3)}
          >
            <strong>Browser Compatible</strong>
          </button>
        </h2>

        {openIndex === 3 && (
          <div className="accordion-body" style={myStyle}>
            Works in Chrome, Firefox, Safari, etc.
          </div>
        )}
      </div>

    </div>
  );
}