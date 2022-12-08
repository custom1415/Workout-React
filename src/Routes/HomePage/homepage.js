import Hero from "../../components/Hero/hero";
import { UserInfo } from "../../components/User-Info/User-Info";

const Homepage = () => {
  return (
    <div style={{ width: "100%" }}>
      <UserInfo />

      <Hero />
    </div>
  );
};
export default Homepage;
