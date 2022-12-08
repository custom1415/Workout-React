import styled from "styled-components";
import { WorkoutCard } from "../Workout-card/WorkoutCard";

export const GridContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  background: #191919;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  place-items: center;
  grid-gap: 1em;
`;
export const WorkoutStatus = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;

  padding-top: 1em;
  overflow-y: scroll;
  h1 {
    text-align: center;
    color: white;
    width: 100%;
    margin-bottom: 1em;
  }
`;
export const Card = styled(WorkoutCard)`
  width: 30px;
`;
