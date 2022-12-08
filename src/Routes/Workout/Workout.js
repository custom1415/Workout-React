import { useState } from "react";
import { Button } from "../../components/Hero/styles.hero";
import { FormInput, InputContainer, TextArea } from "./styles.workout";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkoutArray } from "../../redux/Workout/workout.selectors";
import { AddWorkout, loadArray } from "../../redux/Workout/workout.actions";
import { WorkoutList } from "../../components/Workout-list/Workout-list";
import { SelectFolder } from "../../components/Select-folder/select-folder";
const Workout = () => {
  // const [Workout, setWorkout] = useState([]);
  const dispatch = useDispatch();
  const Workout = useSelector(selectWorkoutArray);
  const defaultFormFields = {
    exerciseName: "",
    sets: "",
    reps: "",
    restBetweenSets: "",
    restAfterSetComplete: "",
    note: "",
    folder: "",
  };

  const [FormField, setFormField] = useState(defaultFormFields);
  const {
    exerciseName,
    sets,
    reps,
    restAfterSetComplete,
    restBetweenSets,
    note,
    folder,
  } = FormField;
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormField({ ...FormField, [name]: value });
  };
  const resetFormFields = () => {
    setFormField({ ...defaultFormFields, folder: folder });
  };
  const addWorkout = () => {
    for (const key in FormField) {
      if (!FormField[key]) return;
    }
    if (folder === "Choose Folder") {
      alert("Please choose a folder");
      return;
    }
    dispatch(loadArray(folder));
    dispatch(AddWorkout(Workout, folder, FormField));
    // setWorkout((prev) => [...prev, FormField]);
    resetFormFields();
  };

  return (
    <>
      <InputContainer>
        <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
          Create Your Workout
        </h1>
        <SelectFolder
          name="folder"
          value={folder}
          onValueChange={onChangeHandler}
        />
        <FormInput
          name="exerciseName"
          onChange={onChangeHandler}
          value={exerciseName}
          placeholder="Enter Exercise Name"
          required
        />
        <FormInput
          required
          name="sets"
          onChange={onChangeHandler}
          value={sets}
          placeholder="Enter Sets"
          type="number"
          min="0"
          max="10"
        />
        <FormInput
          required
          name="reps"
          onChange={onChangeHandler}
          value={reps}
          placeholder="Enter Reps Per Set"
          min="0"
          max="10"
          type="number"
        />
        <FormInput
          required
          name="restBetweenSets"
          onChange={onChangeHandler}
          min="0"
          max="10"
          value={restBetweenSets}
          placeholder="Enter Rest Between Sets In Mins"
          type="number"
        />
        <FormInput
          required
          name="restAfterSetComplete"
          onChange={onChangeHandler}
          value={restAfterSetComplete}
          placeholder="Enter Rest After Set In Mins"
          min="0"
          max="10"
          type="number"
        />
        <TextArea
          value={note}
          onChange={onChangeHandler}
          placeholder="Note"
          name="note"
        ></TextArea>
        <Button type="button" onClick={addWorkout}>
          Create
        </Button>
      </InputContainer>
      <WorkoutList />
    </>
  );
};
export default Workout;
