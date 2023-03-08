import { GitHubIcon } from "../BootstrapIcons/GitHubIcon";
import { LinkedinIcon } from "../BootstrapIcons/LinkedinIcon";
import { ProfileIcon } from "../BootstrapIcons/ProfileIcon";
import styles from "./profile-card.module.scss";


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
    <div className="card p-4" style={{ width: "400px" }}>
      <img className="card-img-top rounded-circle" src={image} alt="devloper picture"/>
      <div className="card-body d-flex flex-column justify-content-evenly">
        <h3 className="card-title">{name}</h3>
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-evenly">
          <a href={github} className={styles.icon}>
            <GitHubIcon />
          </a>
          <a href={linkedin} className={styles.icon}>
            <LinkedinIcon />
          </a>
          <a href={portfolio} className={styles.icon}>
            <ProfileIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
