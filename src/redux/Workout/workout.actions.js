import { WORKOUT_ACTION_TYPES } from "./workout.types";

export const AddWorkout = (workoutArray, folder = "Untitled", workout) => {
  console.log(folder, workout);
  const newWorkout = addToFolder(workoutArray, folder, workout);
  return {
    type: WORKOUT_ACTION_TYPES.SET_WORKOUT,
    payload: newWorkout,
  };
};
const addToFolder = (workoutArray, folder, workout) => {
  const folderExists = workoutArray.find((w) => w.name === folder);
  if (folderExists) {
    const workoutExists = folderExists.list.find(
      (w) => w.exerciseName === workout.exerciseName
    );
    if (workoutExists) {
      alert("Workout Exists");
      return workoutArray;
    }
  }
  if (folderExists) {
    return workoutArray.map((w) => {
      const a = { ...w, list: [...w.list, workout] };
      return w.name === folder ? a : w;
    });
  }
  return [...workoutArray, { name: folder, list: [workout] }];
};

export const RemoveWorkout = (WorkoutsArray, workout, folder) => {
  const newList = removeWorkoutFromList(WorkoutsArray, workout, folder);
  const newWorkoutList = WorkoutsArray.map((check) =>
    check.name === newList.name ? { ...check, list: newList.list } : check
  );
  return {
    type: WORKOUT_ACTION_TYPES.REMOVE_WORKOUT,
    payload: newWorkoutList,
  };
};
const removeWorkoutFromList = (WorkoutsArray, workout, folder) => {
  const f = WorkoutsArray.find((w) => w.name === folder);

  const newList = f.list.filter((w) => w.exerciseName !== workout.exerciseName);
  f.list = newList;
  return f;
};
// export const toggleModalVisibilty = (bool) => {
//   return {
//     type: WORKOUT_ACTION_TYPES.TOGGLE_WORKOUT_MODAL,
//     payload: bool,
//   };
// };
export const OpenEditModal = (workout, bool, folderName) => {
  return {
    type: WORKOUT_ACTION_TYPES.SET_EDIT_VALUES_AND_TOGGLE_WORKOUT_MODAL,
    payload: { workout, bool, folderName },
  };
};
export const EditValues = (
  folderName,
  WorkoutList,
  editedWorkout,
  uneditedWorkout
) => {
  const newWorkout = findAndEdit(
    WorkoutList,
    folderName,
    uneditedWorkout,
    editedWorkout
  );

  const newWorkoutList = WorkoutList.map((check) =>
    check.name === newWorkout.name ? { ...check, list: newWorkout.list } : check
  );

  // const newWorkout = WorkoutList.map((workout) => {
  //   // const {
  //   //   EditexerciseName,
  //   //   Editnote,
  //   //   Editreps,
  //   //   EditrestAfterSetComplete,
  //   //   EditrestBetweenSets,
  //   //   Editsets,
  //   // } = editedWorkout;
  //   console.log(workout, editedWorkout);

  //   return workout.exerciseName === uneditedWorkout.exerciseName
  //     ? {
  //         ...workout,
  //         ...editedWorkout,
  //       }
  //     : workout;
  // });
  return {
    type: WORKOUT_ACTION_TYPES.EDIT_WORKOUT,
    payload: newWorkoutList,
  };
};
const findAndEdit = (
  WorkoutList,
  folderName,
  uneditedWorkout,
  editedWorkout
) => {
  const findFolder = WorkoutList.find((f) => f.name === folderName);
  if (findFolder) {
    const newList = findFolder.list.map((l) => {
      return l.exerciseName === uneditedWorkout.exerciseName
        ? {
            ...l,
            ...editedWorkout,
          }
        : l;
    });
    findFolder.list = newList;
    return findFolder;
  }
};
export const loadArray = (arrToLoad) => {
  return {
    type: WORKOUT_ACTION_TYPES.ARR_TO_LOAD,
    payload: arrToLoad,
  };
};
