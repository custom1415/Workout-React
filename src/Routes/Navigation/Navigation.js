import { Outlet } from "react-router-dom";
import {
  Logo,
  NavBar,
  LinksContainer,
  NavLink,
  Container,
} from "./styles.navigation";
import { BiHomeHeart } from "react-icons/bi";
import { CiDumbbell } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const Navigation = () => {
  return (
    <Container>
      <NavBar>
        <Logo>S</Logo>
        <LinksContainer>
          <NavLink to="/">
            <BiHomeHeart />
          </NavLink>
          <NavLink to="workout">
            <CiDumbbell />
          </NavLink>
          <NavLink to="timer">
            <AiOutlineClockCircle />
          </NavLink>
        </LinksContainer>

        <div>
          <NavLink>iii</NavLink>
        </div>
      </NavBar>

      <Outlet />
    </Container>
  );
};
export default Navigation;
