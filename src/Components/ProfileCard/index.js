import { GitHubIcon } from "../BootstrapIcons/GitHubIcon";

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
      <img className="card-img-top" src={image} alt="devloper picture"></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>

        <a href={github}>
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
