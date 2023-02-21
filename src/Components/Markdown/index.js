import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import styles from "./markdown.module.scss";

/**
 * Markdown component renders the side by side editor and preview windows allowing users to enter input and have it display to the DOM.
 *
 * @return {*}
 */
const Markdown = ({onData}) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    onData(event.target.value);
  };

  return (
    <div className="row text-light">
      <div className="col-12 col-sm-6 p-0">
        <p
          className={clsx(
            "ps-3 m-0 d-flex align-items-center",
            styles.headingText
          )}
        >
          MARKDOWN
        </p>
        <textarea
          className="form-control w-100 bg-dark text-light ps-3 pt-3"
          placeholder="Enter text"
          rows="100"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="col-12 col-sm-6 p-0 bg-dark text-light">
        <p
          className={clsx(
            "ps-3 m-0 d-flex align-items-center",
            styles.headingText
          )}
        >
          PREVIEW
        </p>
        <ReactMarkdown
          children={input}
          className={clsx("ps-3 pt-3", styles.markdownBody)}
        ></ReactMarkdown>
      </div>
     
    </div>
  );
};

export default Markdown;
