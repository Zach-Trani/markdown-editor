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
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <p class="text-white h4git">Home</p>
          <p class="text-white h4">About</p>
          <p class="text-white h4">Markdown</p>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex align-items-center ms-3">
          <button
            class="navbar-toggler"
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
          <TrashIcon />
          <SaveChanges />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
