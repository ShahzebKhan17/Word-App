import React, { useState } from 'react';

export default function About({mode}) {

  const [active, setActive] = useState(null);

  const toggle = (id) => {
    if (active === id) {
      setActive(null); // close if same clicked
    } else {
      setActive(id); // open new
    }
  };

  return (
    <div className="container">
      <h1>About Us</h1>

      <div className="accordion">

        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              onClick={() => toggle(1)}
            >
              Accordion Item #1
            </button>
          </h2>

          <div className={`accordion-collapse collapse ${active === 1 ? 'show' : ''}`}>
            <div className="accordion-body">
              This is item 1
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              onClick={() => toggle(2)}
            >
              Accordion Item #2
            </button>
          </h2>

          <div className={`accordion-collapse collapse ${active === 2 ? 'show' : ''}`}>
            <div className="accordion-body">
              This is item 2
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}