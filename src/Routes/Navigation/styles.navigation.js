import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const NavBar = styled.div`
  width: 4vw;
  height: 100%;
  position: relative;
  z-index: 2;
  background-color: red;

  ${Flex};
`;
export const Logo = styled.div`
  ${"" /* width: 80%; */}
  height: 30px;
`;
export const LinksContainer = styled.div`
  ${Flex}
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
