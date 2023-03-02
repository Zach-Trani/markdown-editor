import HamburgerMenuIcon from "../BootstrapIcons/HamburgerMenuIcon";
import TrashIcon from "../BootstrapIcons/TrashIcon";
import SaveChanges from "../SaveChanges";


/**
 * NavBar component renders the nav bar including the hamburger menu, site name, trash button, and save changes.
 *
 * @return {*}
 */
const NavBar = () => {

  // Handles the click of the trash button and removes the markdown text from local storage.
  const handleTrashClick = () => {
    localStorage.removeItem("markDownText");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex align-items-center ms-3">
        <HamburgerMenuIcon />
        <h5 className="text-white ms-3 m-0">MARKDOWN</h5>
      </div>
      <div className="d-flex align-items-center" onClick={handleTrashClick}>
        <TrashIcon />
        <SaveChanges />
      </div>
    </nav>
  );
};

export default NavBar;
