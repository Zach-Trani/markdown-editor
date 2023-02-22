import clsx from "clsx";
import styles from "./save-changes.module.scss";

/**
 * SaveChanges component is currently a non functioning button. Will download user input to a PDF in markdown syntax in future.
 *
 * @return {*}
 */
const SaveChanges = () => {
  return (
    <div className="ms-3 me-3">
      <button className={clsx("btn d-flex", styles.saveButton)} type="submit">
        <div className="me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-save"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
          </svg>
        </div>
        Save Changes
      </button>
    </div>
  );
};

export default SaveChanges;
