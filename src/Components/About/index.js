import NavBar from "../NavBar";
import ProfileCard from "../ProfileCard";
import { profilesData } from "../../Data/profilesData";
import clsx from "clsx";
import styles from "./about.module.scss";
import Info from "../Info";

/**
 * The About component is a page that displays information about the Markdown Project and developers that created it.
 *
 * @return {*}
 */
const About = () => {
  return (
    <>
      <NavBar showIcon={false} />
      <div
        className={clsx(
          "row justify-content-evenly p-5 h-100 border-top border-light",
          styles.aboutPage
        )}
      >
        {profilesData.map((profile) => {
          return (
            <div>
              <Info />
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
