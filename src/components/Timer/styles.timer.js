import styled, { css } from "styled-components";
import { Button } from "../Hero/styles.hero";

const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimerContainer = styled.div`
  width: 50%;
  background: black;
  height: 26vh;
  margin: 0 auto;

  ${centerFlex}
  flex-direction:column;

  span {
    color: white;
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    width: 60%;
    span {
      ${"" /* font-size: 2.2rem; */}
      font-size: 3rem;
      margin: 0;
    }
  }
  @media (max-width: 850px) {
    width: 70%;
    span {
      ${"" /* font-size: 2.2rem; */}
      font-size: 2.8rem;
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    width: 80%;
    span {
      ${"" /* font-size: 2.2rem; */}
      font-size: 2.2rem;
      margin: 0;
    }
  }
  @media (max-width: 480px) {
    width: 85%;
    span {
      ${"" /* font-size: 2.2rem; */}
      font-size: 2.2rem;
      margin: 0;
    }
  }
`;
export const Stats = styled.section`
  width: 80%;
  display: flex;

  display: grid;
  grid-template-columns: repeat(7, 60px);
  place-content: center;
  place-items: center;
  @media (max-width: 1000px) {
    width: 85%;
    grid-template-columns: repeat(7, 60px);
  }
  @media (max-width: 850px) {
    width: 85%;
    grid-template-columns: repeat(7, 50px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(7, 40px);
  }
  @media (max-width: 480px) {
    width: 90%;
    grid-template-columns: repeat(7, 40px);
  }
`;
export const BtnContainer = styled.section`
  width: 80%;
  ${centerFlex};
  justify-content: space-between;
  margin-top: 1.5em;
`;
export const CtrlBtn = styled(Button)`
  background: white;
  color: black;
  border-radius: 0px;
  width: 20%;
  margin: 0;
`;
