import {
  CardContainer,
  Edit,
  Note,
  NoteBtn,
  RemoveWorkoutBtn,
  UtilityBtnContainer,
  WorkoutDetail,
  WorkoutDetailsContainer,
} from "./styles.workout-card";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  RemoveWorkout,
  OpenEditModal,
  
} from "../../redux/Workout/workout.actions";
import {
  selectIsModalOpen,
  selectWorkoutArray,
} from "../../redux/Workout/workout.selectors";
import { useState } from "react";
export const WorkoutCard = ({ workout, folderName }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const {
    exerciseName,
    sets,
    reps,
    restBetweenSets,
    restAfterSetComplete,
    note,
  } = workout;
  const dispatch = useDispatch();
  const [NoteVisibilty, setNoteVisibilty] = useState(false);
  const openEditModalWithValues = () =>
    dispatch(OpenEditModal(workout, !isModalOpen, folderName));
  const toggleNoteVisibility = () => {
    setNoteVisibilty(!NoteVisibilty);
    console.log(NoteVisibilty);
  };
  const workoutArray = useSelector(selectWorkoutArray);
  return (
    <>
      <CardContainer>
        <UtilityBtnContainer>
          <Edit onClick={openEditModalWithValues} title="Edit" />
          <RemoveWorkoutBtn
            title="Remove"
            onClick={() => dispatch(RemoveWorkout(workoutArray, workout,folderName))}
          />
          <NoteBtn onClick={toggleNoteVisibility} title="Note" />
        </UtilityBtnContainer>
        <h1>{exerciseName}</h1>
        <WorkoutDetailsContainer>
          <WorkoutDetail>
            <h2>
              SETS&nbsp;&nbsp;-&nbsp;&nbsp;
              <span>
                {sets}
                &nbsp;SETS
              </span>
            </h2>
          </WorkoutDetail>
          <WorkoutDetail>
            <h2>
              REPS&nbsp;&nbsp;-&nbsp;&nbsp;<span>{reps}&nbsp;REPS</span>
            </h2>
          </WorkoutDetail>
          <WorkoutDetail>
            <h2>
              REST-BETWEEN-SETS &nbsp;&nbsp;-&nbsp;&nbsp;
              <span>
                {restBetweenSets}
                &nbsp;MIN
              </span>
            </h2>
          </WorkoutDetail>
          <WorkoutDetail>
            <h2>
              REST-AFTER-SET&nbsp;&nbsp;-&nbsp;&nbsp;
              <span>
                {restAfterSetComplete}
                &nbsp;MIN
              </span>
            </h2>
          </WorkoutDetail>
        </WorkoutDetailsContainer>
        <Note notes={NoteVisibilty}>
          <AiOutlineCloseCircle
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
            }}
            onClick={toggleNoteVisibility}
          />
          <p>{note}</p>
        </Note>
      </CardContainer>
    </>
  );
};
