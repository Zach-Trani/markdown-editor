import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import styles from "./markdown.module.scss";
import AddButton from "../AddButton";
import { markDownSyntax } from "../../Data/markDownSyntax";
import NavBar from "../NavBar";
import { defaultState } from "../../Data/defaultState";

/**
 * Markdown component renders the side by side editor and preview windows allowing users to enter input and have it display to the DOM.
 *
 * @return {*}
 */
const Markdown = () => {
  const [markDownText, setMarkDownText] = useState(localStorage.getItem("markDownText") || defaultState);


  useEffect(() => {
    localStorage.setItem('markDownText', markDownText);
  }, [markDownText]);

  // Handles the change in the text area and updates the state.
  const handleChange = (event) => {
    setMarkDownText(event.target.value);
  };

  // Handles the click of the add button and adds the markdown syntax to the text area.
  const handleClick = (content) => {
    setMarkDownText((prev) => {
      return prev + content;
    });
  };

  return (
    <>
    <NavBar/>
      <div className="d-flex flex-wrap justify-content-lg-evenly bg-dark">
        {markDownSyntax.map((el) => {
          return (
            <AddButton
              key={el.id}
              title={el.title}
              handleClick={() => handleClick(el.content)}
            />
          );
        })}
      </div>
      <div className="row text-light">
        <div className="col-12 col-sm-6 p-0">
          <p
            className={clsx(
              "ps-3 ps-4 m-0 d-flex align-items-center",
              styles.headingText
            )}
          >
            MARKDOWN
          </p>
          <textarea
            className="form-control w-100 bg-dark text-light ps-4 pt-3"
            placeholder="Enter text"
            rows="100"
            onChange={handleChange}
            value={markDownText}
          ></textarea>
        </div>
        <div className="col-12 col-sm-6 p-0 bg-dark text-light">
          <p
            className={clsx(
              "ps-4 m-0 d-flex align-items-center",
              styles.headingText
            )}
          >
            PREVIEW
          </p>
          <ReactMarkdown
            children={markDownText}
            className={clsx("ps-3 pt-3", styles.markdownBody)}
          ></ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;
