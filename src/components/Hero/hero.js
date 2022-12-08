import {
  HeroBody,
  HeroContainer,
  Img,
  ImgBox,
  Button,
  Para,
  Create,
} from "./styles.hero";
import Imag from "../../Assets/workout.webp";
const Hero = () => {
  return (
    <HeroContainer>
      <h1>Overview</h1>
      <HeroBody uri="https://static.vecteezy.com/system/resources/previews/002/099/721/large_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg">
        <ImgBox>
          <Img src={Imag} />
        </ImgBox>
        <Create>
          <Para>SET GOALS AND MOTIVATE YOURSELF</Para>
          <Button>Create Workout</Button>
        </Create>
      </HeroBody>
    </HeroContainer>
  );
};
export default Hero;
