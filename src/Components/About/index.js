import NavBar from "../NavBar";
import ProfileCard from "../ProfileCard";
import { profilesData } from "../../Data/profilesData";

const About = () => {
  return (
    <>
      <NavBar showIcon={false} />
      <div>About Page Component</div>
      <div className="row justify-content-evenly">
        {profilesData.map((profile) => {
          return (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              heading={profile.heading}
              description={profile.description}
              image={profile.image}
              github={profile.github}
              linkedin={profile.linkedin}
              portfolio={profile.portfolio}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
