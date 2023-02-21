import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Markdown component renders the side by side editor and preview windows allowing users to enter input and have it display to the DOM.
 *
 * @return {*}
 */
const Markdown = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <label htmlFor="name">Markdown</label>
        <textarea
          class="form-control"
          placeholder="Enter text"
          rows="24"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="col-12 col-sm-6">
        <label htmlFor="name">Preview</label>
        <ReactMarkdown children={input}></ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
