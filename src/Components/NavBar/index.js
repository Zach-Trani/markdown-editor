import { Link } from "react-router-dom";
import HamburgerMenuIcon from "../BootstrapIcons/HamburgerMenuIcon";
import TrashIcon from "../BootstrapIcons/TrashIcon";
import SaveChanges from "../SaveChanges";

/**
 * NavBar component renders the nav bar including the hamburger menu, site name, trash button, and save changes.
 *
 * @return {*}
 */
const NavBar = ({ showIcon }) => {
  // Handles the click of the trash button and removes the markdown text from local storage.
  const handleTrashClick = () => {
    localStorage.removeItem("markDownText");
    window.location.reload();
  };

  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <ul>
            <li>
              <Link to="/" className="text-white h4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white h4">
                About
              </Link>
            </li>
            <li>
              <Link to="/markdown" className="text-white h4">
                Markdown
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex align-items-center ms-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HamburgerMenuIcon />
          </button>
          <h5 className="text-white ms-3 m-0">MARKDOWN</h5>
        </div>
        <div className="d-flex align-items-center" onClick={handleTrashClick}>
          {showIcon && <TrashIcon />}
          {showIcon && <SaveChanges />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
