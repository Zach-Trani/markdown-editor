import { GitHubIcon } from "../BootstrapIcons/GitHubIcon";
import { LinkedinIcon } from "../BootstrapIcons/LinkedinIcon";
import { ProfileIcon } from "../BootstrapIcons/ProfileIcon";


/**
 * ProfileCard is a component created using bootstrap card and shows information on the developers.
 *
 * @param {*} {
 *   name,
 *   heading,
 *   description,
 *   image,
 *   github,
 *   linkedin,
 *   portfolio,
 * }
 * @return {*} 
 */
const ProfileCard = ({
  name,
  heading,
  description,
  image,
  github,
  linkedin,
  portfolio,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top rounded-circle" src={image} alt="devloper picture"></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-evenly">
          <a href={github}>
            <GitHubIcon />
          </a>
          <a href={linkedin}>
            <LinkedinIcon />
          </a>
          <a href={portfolio}>
            <ProfileIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
