import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import styles from "./markdown.module.scss";
import AddButton from "../AddButton";
import { markDownSyntax } from "../../Data/markDownSyntax";
import NavBar from "../NavBar";
import { useCookies } from "react-cookie";

/**
 * Markdown component renders the side by side editor and preview windows allowing users to enter input and have it display to the DOM.
 *
 * @return {*}
 */
const Markdown = () => {
  const [markDownText, setMarkDownText] = useState(
    localStorage.getItem("markDownText") || ""
  );

  // Sets the cookie to check if the page has been loaded before.
  const [cookies, setCookie] = useCookies(["pageLoad"]);

  // Checks to see if the page has been loaded before. If it has, it will load the markdown text from local storage.
  // If it has not, it will set the cookie and set the markdown text to the default text.
  useEffect(() => {
    if (cookies.pageLoad) {
      return setMarkDownText(localStorage.getItem("markDownText"));
    }
    setCookie("pageLoad", true);
    setMarkDownText("# Welcome to my React Markdown Previewer!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sets the markdown text to local storage.
  useEffect(() => {
    localStorage.setItem("markDownText", markDownText);
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
