import styled from "styled-components";
import { Flex } from "../../Routes/Navigation/styles.navigation";
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  dis
`;
export const HeroBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50vh;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${({ uri }) => uri});
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(85%);
  }
`;
export const ImgBox = styled.div`
  height: 100%;
  width: 50%;
`;
export const Img = styled.img`
  height: 100%;
  width: 90%;
`;
export const Create = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Button = styled.button`
  ${Flex}
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 40px;
  padding: 1rem;
  text-align: center;
  border: none;
  margin-bottom: 2rem;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background: black;
  &:hover {
    background-color: #353a3e;

    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
export const Para = styled.p`
  width: 65%;
  font-size: 3.5rem;

  color: white;
`;
