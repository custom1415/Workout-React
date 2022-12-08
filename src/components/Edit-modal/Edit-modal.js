import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditValues, OpenEditModal } from "../../redux/Workout/workout.actions";
import {
  selectEditValues,
  selectWorkoutArray,
  selectFolder,
} from "../../redux/Workout/workout.selectors";
import { FormInput, TextArea } from "../../Routes/Workout/styles.workout";
import {
  CloseModal,
  EditBtn,
  EditContainer,
  EditInputContainer,
} from "./styles.edit-modal";

export const EditModal = () => {
  const currentFolder = useSelector(selectFolder);
  const WorkoutObject = useSelector(selectEditValues);
  const WorkoutList = useSelector(selectWorkoutArray);
  const defaultFormState = { ...WorkoutObject };
  const [FormField, setFormField] = useState(defaultFormState);
  const {
    exerciseName,
    note,
    reps,
    restAfterSetComplete,
    restBetweenSets,
    sets,
  } = FormField;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormField({ ...FormField, [name]: value });
  };
  const dispatch = useDispatch();
  const CloseModalHandler = () => dispatch(OpenEditModal({}, false));

  const handleSubmit = (e) => {
    e.preventDefault();
    // for (const key in FormField) {
    //   if (!FormField[key]) {
    //     alert("Input fields cannot be empty");
    //     return;
    //   }
    // }
    dispatch(
      EditValues(currentFolder, WorkoutList, FormField, defaultFormState)
    );
  };
  return (
    <EditContainer>
      <EditInputContainer onSubmit={handleSubmit}>
        <CloseModal onClick={CloseModalHandler} />
        <h1 style={{ color: "white", margin: "0.5em 0" }}>Edit</h1>
        <FormInput
          placeholder="Enter Exercise Name"
          onChange={handleChange}
          name="exerciseName"
          value={exerciseName}
          required
        />
        <FormInput
          placeholder="Enter Sets"
          onChange={handleChange}
          name="sets"
          value={sets}
          required
        />
        <FormInput
          placeholder="Enter Reps per Set"
          onChange={handleChange}
          name="reps"
          value={reps}
          required
        />
        <FormInput
          placeholder="Enter Rest Between Sets"
          onChange={handleChange}
          name="restBetweenSets"
          value={restBetweenSets}
          required
        />
        <FormInput
          placeholder="Enter Rest After Set"
          onChange={handleChange}
          name="restAfterSetComplete"
          value={restAfterSetComplete}
          required
        />
        <TextArea
          placeholder="Note"
          onChange={handleChange}
          name="note"
          value={note}
          required
        />
        <EditBtn>Commit Changes</EditBtn>
      </EditInputContainer>
    </EditContainer>
  );
};
