import { useSelector } from "react-redux";
import { selectReducedWorkoutArray } from "../../redux/Workout/workout.selectors";
import { WorkoutCard } from "../Workout-card/WorkoutCard";
import { Card, GridContainer, WorkoutStatus } from "./styles.timer-workouts";
export const TimerWorkouts = () => {
  const Arr = useSelector(selectReducedWorkoutArray);

  const Maps = () =>
    Object.keys(Arr).map((key) =>
      Arr[key].map((a, i) => {
        const { exerciseName, sets, reps } = a;

        return (
          <div
            style={{
              width: "80%",
              height: "auto",
              color: "white",
              background:'#191919',
              margin:'1em'
            }}
          >
            <h1>E {exerciseName}</h1>
            <h3>R {reps}</h3>
            <h3>S {sets}</h3>
          </div>
        );
      })
    );
  const a = Maps();
  return (
    <>
      <GridContainer>
        <WorkoutStatus>
          <h1>
            Previous <br />
            Workouts
          </h1>
          {a}
        </WorkoutStatus>
        <WorkoutStatus>
          <h1>
            Current <br />
            Workout
          </h1>
          {a}
        </WorkoutStatus>
        <WorkoutStatus>
          <h1>
            Next <br />
            Workouts
          </h1>
          {a}
          {a}
          {a}
        </WorkoutStatus>
      </GridContainer>
    </>
  );
};
