import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArray } from "../../redux/Workout/workout.actions";
import {
  selectarrToLoad,
  selectIsModalOpen,
  selectReducedWorkoutArray,
  selectWorkoutArray,
} from "../../redux/Workout/workout.selectors";
import { EditModal } from "../Edit-modal/Edit-modal";
import { FolderPreview } from "../Folder-preview/folder-preview";
import { Button } from "../Hero/styles.hero";
import { WorkoutCard } from "../Workout-card/WorkoutCard";
import { WorkoutListContainer } from "./styles.workout-list";
export const WorkoutList = () => {
  const workoutList = useSelector(selectReducedWorkoutArray);
  const [changeGridVal, setChangeGridVal] = useState(2);
  const [overflow, setOverflow] = useState("hidden");
  const isModalOpen = useSelector(selectIsModalOpen);

  const arrToLoad = useSelector(selectarrToLoad);
  useEffect(() => {
    // if (Object.keys(workoutList).length > 1) setSwitchToFolderView(true);
  }, [workoutList]);
  useEffect(() => {
    if (isModalOpen) {
      setOverflow("hidden");
      return;
    }
    setOverflow("scroll");
  }, [isModalOpen]);
  const dispatch = useDispatch();
  const loadClicked = (e) => {
    // if (!switchToFolderView) return;
    dispatch(loadArray(e.target.textContent));
  };
  const getTotals = (key, string) => {
    return workoutList[key].reduce((total, workout) => {
      const I = parseInt(workout[string]);
      total += I;
      return total;
    }, 0);
  };
  return (
    <>
      <WorkoutListContainer flow={overflow} changeGrid={changeGridVal}>
        {isModalOpen && <EditModal />}

        {Object.keys(workoutList).map((key, i) => {
          const totalWorkoutCount = workoutList[key].length;
          const totalRestBetweenSets = getTotals(key, "restBetweenSets");
          const totalRestAfterSet = getTotals(key, "restAfterSetComplete");
          const totalReps = getTotals(key, "reps");
          const totalSets = getTotals(key, "sets");
          console.log(
            totalReps,
            "reps",
            totalRestBetweenSets,
            "restB",
            totalSets,
            "sets",
            totalRestAfterSet,
            "restA"
          );
          return (
            <Fragment key={i}>
              <h3 onClick={loadClicked} style={{ width: "100%" }}>
                <span>{key}</span>
              </h3>

              <FolderPreview folderName={key} workoutList={workoutList} />
              <div style={{ color: "white" }}>
                Total-workouts-count-{totalWorkoutCount}
                <br />
                Total-rest-between -{totalRestBetweenSets}-mins
                <br />
                Total-rest-after -{totalRestAfterSet}-mins
                <br />
                Total-sets -{totalSets}
                <br />
                Total-reps -{totalReps}
              </div>
              <Button style={{ gridColumn: "1/-1" }}>See Full List</Button>
            </Fragment>
          );
        })}

        {/* {workoutList.map((workout) => {
          return workout.list.map((w, i) => {
            return <WorkoutCard key={i} nm={workout.name} workout={w} />;
          });
        })} */}
      </WorkoutListContainer>
    </>
  );
};
