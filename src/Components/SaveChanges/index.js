import clsx from "clsx";
import SaveChangesIcon from "../BootstrapIcons/SaveChangesIcon";
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
          <SaveChangesIcon />
        </div>
        Save Changes
      </button>
    </div>
  );
};

export default SaveChanges;
