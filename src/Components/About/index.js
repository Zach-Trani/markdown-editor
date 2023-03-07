import NavBar from "../NavBar";
import ProfileCard from "../ProfileCard";

const About = () => {
  return (
    <>
      <NavBar showIcon={false} />
      <div>About Page Component</div>
      <ProfileCard />
      <ProfileCard />
    </>
  );
};

export default About;
