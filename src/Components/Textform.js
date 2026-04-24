import React, { useState } from 'react';

export default function Textform({ heading }) {
  const [text, settext] = useState('');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    settext(newText);
    showAlert("Converted to Uppercase!", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    settext(newText);
    showAlert("Converted to Lowercase!", "success");
  };

  const handleClearclick = () => {
    settext("");
    showAlert("Text Cleared!", "success");
  };

  const handleCamelCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.]\s*\w)/g, (char) => char.toUpperCase());

    settext(newText);
    showAlert("Converted to Sentence Case!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard!", "success");
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div className="container">

        {/* ✅ Alert should be INSIDE return */}
        {alert && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
          </div>
        )}

        <h1>{heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnchange}
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCamelCase}>
          Sentence Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <p>
          {text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words and{" "}
          {text.replace(/\s/g, "").length} characters
        </p>

        <p>
          {0.008 *
            text.trim().split(/\s+/).filter((word) => word.length !== 0).length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}