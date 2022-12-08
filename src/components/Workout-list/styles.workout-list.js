import styled from "styled-components";
export const WorkoutListContainer = styled.div`
  display: grid;
  width: 70vw;
  background: #191919;
  grid-template-columns: ${({ changeGrid }) => `repeat(${changeGrid},1fr)`};
  grid-auto-rows: 130px;
  grid-gap: 30px;
  position: relative;
  z-index: 2;
  padding: 1em;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
  overflow-y: ${({ flow }) => flow};
  h3 {
    grid-column: 1/-1;
    text-align: center;
    font-size: 3rem;
    color: white;
    position: relative;
    margin-bottom: 0.5em;
    span {
      position: relative;

      &::before {
        position: absolute;
        top: 50%;
        left: -70%;
        width: 60%;
        height: 1px;
        background: white;
        content: "";
      }
      &::after {
        position: absolute;
        top: 50%;
        right: -70%;
        width: 60%;
        height: 1px;
        background: white;
        content: "";
      }
    }
  }
  @media (max-width: 1200px) {
    width: 96vw;
  }
  @media (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
